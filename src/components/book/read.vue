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
    import {themeList, fontSizeList} from "../../utils/book"
    import {bookLocalStorage} from "../../utils/localStorage"
    import Epub from 'epubjs'

    global.ePub = Epub;
    const bookName = "《求魔》_qinkan.net"

    export default {
        mixins: [bookMixin],
        methods: {
            prev(){
                if(this.rendition){
                    this.rendition.prev().then(() => {
                        this.refreshLocation()
                        this.scrollTo()
                    })
                    this.setToggle(0)
                }
            },
            hide() {
                this.toggle == '0' ? this.setToggle(1) : this.setToggle(0)
            },
            next(){
                if(this.rendition){
                    this.rendition.next().then(() => {
                        this.refreshLocation()
                        this.scrollTo()
                    })
                    this.setToggle(0)
                }
            },
            initFontSize() {
                const fontSize = bookLocalStorage.getBookInfoFontSize(this.bookName)
                this.setFontSize(fontSize ? fontSize : fontSizeList[2].fontSize).then(() => {
                    this.rendition.themes.fontSize(fontSize)
                    this.rendition.themes.fontSize(fontSize ? fontSize : fontSizeList[2].fontSize)
                    !fontSize && bookLocalStorage.setBookInfoFontSize(this.bookName, fontSizeList[2].fontSize)
                })
            },
            initTheme() {
                const theme = bookLocalStorage.getBookInfoTheme(this.bookName)
                this.setTheme(theme ? theme : themeList[0].name).then(() => {
                    this.rendition.themes.select(theme ? theme : themeList[0].name)
                    !theme && bookLocalStorage.setBookInfoTheme(this.bookName, themeList[0].name)
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
                this.book.loaded.navigation.then(nav => {
                    this.setNavigation(nav.toc)
                })
            },
            initRendition() {
                this.rendition = this.book.renderTo('read', {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    method: 'default'
                })
                themeList.forEach(item => {
                    this.rendition.themes.register(item.name, item.style)
                })
                const startCfi = bookLocalStorage.getBookInfoStartCfi(this.bookName)
                this.display(startCfi ? startCfi : null, () => {
                    this.initTheme()
                    this.initFontSize()
                    this.parseBook()
                    this.setSection(this.rendition.currentLocation().start.index)
                    this.setBookLoading(false)
                })
            },
        },
        mounted() {
            this.book = new Epub(`http://localhost:8080/${bookName}.epub`)
            this.setBook(this.book)
            this.setBookName(bookName)
            this.initRendition()
            bookLocalStorage.setBookInfo(bookName)
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
            overflow: hidden
            &>div
                flex: 1
                height: 100%
                &:nth-of-type(2)
                    flex: 2
</style>