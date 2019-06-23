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
            }
        },
        mounted() {
            this.book = new Epub("http://localhost:8081/《求魔》_qinkan.net.epub");
            this.setBook(this.book)
            this.initRendition()
            this.display()
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