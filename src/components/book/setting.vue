<template>
    <transition name="moveDown">
        <div class="footer-wrapper" v-show="toggle == 1">
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
                <li class="item">
                    <i class="icon-catalog"></i>
                    <span>查看目录</span>
                </li>
                <li class="item">
                    <i class="icon-add-bookMark"></i>
                    <span>添加书签</span>
                </li>
                <li class="item">
                    <i class="icon-sunlight"></i>
                    <span>白天模式</span>
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
    import {themeList} from "../../utils/book"
    import {bookMixin} from "../../utils/mixin"

    export default {
        data() {
            return {
                themeList
            }
        },
        mixins: [bookMixin],
        methods: {
            changeTheme(theme) {
                this.setTheme(theme.name).then(() => {
                    this.currentBook.rendition.themes.select(this.theme)
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

</style>