<template>
    <transition name="moveDown">
        <div class="footer-wrapper" v-show="toggle == 1">
            <div class="setting-fontSize-wrapper">
                <i class="icon-reduce"></i>
                <ul class="fontSize-list-wrapper">
                    <li v-for="fontSizeItem in fontSizeList">
                        <span @click="changeFontSize(fontSizeItem.fontSize)"></span>
                        <i class="select" :class="{'selected': fontSize === fontSizeItem.fontSize}"></i>
                    </li>
                </ul>
                <i style="font-size: 20px;" class="icon-increase"></i>
            </div>
            <ul class="theme-wrapper">
                <li class="item"
                    v-for="(themeItem, index) in themeList"
                    @click="changeTheme(themeItem)"
                    :key="index"
                    :class="{'active': themeItem.name === theme}">
                    <span :style="{background: themeItem.style.body.background}"></span>
                </li>
            </ul>
            <ul class="setting-wrapper">
                <li class="item" @click="setToggle(2)">
                    <i class="icon-catalog"></i>
                    <span>查看目录</span>
                </li>
                <li class="item" @click="addMark">
                    <i class="icon-add-bookMark"></i>
                    <span>添加书签</span>
                </li>
                <li class="item" @click="switchTheme">
                    <i :class="theme !== 'brown' ? 'icon-night' : 'icon-sunlight'"></i>
                    <span>{{theme !== 'brown' ? '夜间模式' : '日间模式'}}</span>
                </li>
                <li class="item">
                    <i class="icon-out"></i>
                    <span>退出阅读</span>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {themeList, fontSizeList} from "../../utils/book"
    import {bookMixin} from "../../utils/mixin"
    import {bookLocalStorage} from "../../utils/localStorage"

    export default {
        data() {
            return {
                themeList,
                fontSizeList,
                showTips: false
            }
        },
        mixins: [bookMixin],
        methods: {
            // 添加书签
            addMark() {
                this.bookMark = bookLocalStorage.getBookInfoMark(this.bookName)
                if(!this.bookMark) {
                    this.bookMark = []
                }
                // 获取当前所处的内容位置
                const currentLocation = this.currentBook.rendition.currentLocation()
                let cfiBase = currentLocation.start.cfi.replace(/!.*/, '')
                let cfiStart = currentLocation.start.cfi.replace(/.*!/, '').replace(/\)$/, '')
                let cfiEnd = currentLocation.end.cfi.replace(/.*!/, '').replace(/\)$/, '')
                let cfiRange = `${cfiBase}!,${cfiStart},${cfiEnd})`
                // 设置书签
                this.currentBook.getRange(cfiRange).then(range => {
                    let text = range.toString().replace(/\s\s/g, '')
                    this.bookMark.push({
                        cfi: currentLocation.start.cfi,
                        text
                    })
                    // 加入缓存
                    bookLocalStorage.setBookInfoMark(this.bookName, this.bookMark)
                }).then(() => {
                    clearTimeout(timeout)
                    this.showTips = true
                    const timeout = setTimeout(() => {
                        this.showTips = false
                        clearTimeout(timeout)
                    }, 500)
                })
            },
            changeTheme(theme) {
                this.setTheme(theme.name).then(() => {
                    this.currentBook.rendition.themes.select(this.theme)
                    bookLocalStorage.setBookInfoTheme(this.bookName, theme.name)
                })
            },
            changeFontSize(fontSize) {
                this.setFontSize(fontSize).then(() => {
                    this.currentBook.rendition.themes.fontSize(fontSize + 'px')
                    bookLocalStorage.setBookInfoFontSize(this.bookName, fontSize)
                })
            },
            switchTheme() {
                let isNight = this.theme !== 'brown' ? 'brown' : 'default'
                this.setTheme(isNight).then(() => {
                    this.currentBook.rendition.themes.select(isNight)
                    bookLocalStorage.setBookInfoTheme(this.bookName, isNight)
                })
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .footer-wrapper
        position: absolute
        width: 100%
        bottom: 0
        left: 0
        z-index: 999
        box-sizing: border-box
        background: #FFF
        .theme-wrapper
            display: flex
            justify-content: space-between
            padding: 15px
            .item
                border: 1px solid #FFF
                padding: 5px
                width: 40px
                height: 40px
                border-radius: 50%
                box-sizing: border-box
                &.active
                    border-color: #3d3d3d
                span
                    display: block
                    width: 100%
                    height: 100%
                    border-radius: 50%
        .setting-wrapper
            display: flex
            align-items: center
            border-top: 1px solid #EEE
            padding: 15px
            .item
                flex: 1
                text-align: center
                i
                    display: block
                    color: #333
                    font-size: 20px
                span
                    display: block
                    color: #333
                    font-size: 12px
                    margin-top: 10px

        .setting-fontSize-wrapper
            display: flex
            padding: 15px
            justify-content: space-between
            align-items: flex-end
            .fontSize-list-wrapper
                position: relative
                display: flex
                flex: 1
                justify-content: space-between
                margin: 0 25px
                height: 10px
                &:after
                    display: block
                    position: absolute
                    top: 50%
                    left: 0
                    content: ''
                    width: 100%
                    height: 1px
                    background: #D5D5D5
                li
                    position: relative
                    span
                        display: block
                        height: 100%
                        margin: 0 auto
                        text-align: center
                        position: relative
                        z-index: 2
                        &:after
                            display: block
                            content: ''
                            width: 1px
                            height: 100%
                            background: #D5D5D5
                            margin: 0 auto
                    .select
                        position: absolute
                        top: 50%
                        left: 50%
                        display: none
                        width: 16px
                        height: 16px
                        margin: -8px 0 0 -8px
                        border-radius: 50%
                        border: 1px solid #EEE
                        box-shadow: 0 3px 3px rgba(0, 0, 0, .5)
                        background: #FFF
                        box-sizing: border-box
                        &.selected
                            display: block
                            z-index: 2
</style>