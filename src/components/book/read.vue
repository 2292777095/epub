<template>
    <div class="container">
        <div class="click-wrapper">
            <div class="prev" @click="prev"></div>
            <div class="setting" @click="hide"></div>
            <div class="next" @click="next"></div>
        </div>
        <div class="read-wrapper">
            <div id="read"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {bookMixin} from '../../utils/mixin'
    import {themeList} from "../../utils/book"
    import {bookLocalStorage} from "../../utils/localStorage"
    import Epub from 'epubjs'

    global.ePub = Epub;

    export default {
        mixins: [bookMixin],
        methods: {
            prev(){
                if(this.rendition){
                    this.rendition.prev()
                    this.setToggle(0)
                }
            },
            hide() {
                this.toggle == '0' ? this.setToggle(1) : this.setToggle(0)
            },
            next(){
                if(this.rendition){
                    this.rendition.next()
                    this.setToggle(0)
                }
            },
            initRendition() {
                this.rendition = this.book.renderTo('read', {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    method: 'default'
                })
            },
            initTheme() {
                themeList.forEach(item => {
                    this.currentBook.rendition.themes.register(item.name, item.style)
                })
            },
            parseBook() {
                this.book.loaded.cover.then(cover => {
                    this.book.archive.createUrl(cover).then(url => {
                        this.setCover(url)
                    })
                })
                this.book.loaded.metadata.then(metadata => {
                    this.setMetadata(metadata)
                })
                this.book.loaded.navigation.then(navigation => {
                    this.setNavigation(navigation)
                })
            }
        },
        mounted() {
            const bookName = "《求魔》_qinkan.net"
            this.book = new Epub(`http://localhost:8080/${bookName}.epub`)
            this.setBook(this.book).then(() => {
                this.setBookName(bookName)
                bookLocalStorage.setBookInfo(bookName)
            })
            this.initRendition()
            this.initTheme()
            this.parseBook()
            this.display(null, () => {
                this.setBookLoading(true)
            })
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .container
        position: relative
        .click-wrapper
            display: flex
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: 0
            z-index: 99
            &>div
                flex: 1
                height: 100%
</style>