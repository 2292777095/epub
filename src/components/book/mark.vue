<template>
    <div>
        <div class="mark-wrapper">
            <ul>
                <li class="mark-item"
                    v-for="(item, index) in bookMark"
                    :key="index"
                    @touchstart="touchStart($event, index)"
                    @touchmove="touchMove($event, index)"
                    @touchend="touchEnd"
                >
                <span class="mark-text"
                      @click.self="navigateTo(item.cfi)"
                      :style="{'flex': activeIndex === index ? `0 0 ${endX}%` : `0 0 100%`}"
                >{{item.text}}</span>
                    <span class="remove-mark" @click.stop="showConfirm = true">删除</span>
                </li>
            </ul>
        </div>
        <transition name="fade">
            <div class="confirm-wrapper" v-show="showConfirm" @click="showConfirm = false">
                <div class="confirm-main">
                    <div class="confirm-title">书签删除提示</div>
                    <div class="confirm-text">确定删除此书签？</div>
                    <div class="confirm-button">
                        <div class="confirm-cancel" @click.stop="showConfirm = false">取消</div>
                        <div class="confirm-determine" @click.stop="removeMark">确定</div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {bookLocalStorage} from "../../utils/localStorage"
    import {bookMixin} from "../../utils/mixin"

    export default {
        mixins: [bookMixin],
        data() {
            return {
                bookMark: null,
                startX: 0,
                moveX: null,
                endX: 100,
                activeIndex: null,
                showConfirm: false
            }
        },
        methods: {
            // 目录跳转
            navigateTo(href) {
                this.setToggle(0).then(() => {
                    this.$emit('switchCurrentTab', 1)
                    this.display(href, () => {
                        this.scrollTo()
                    })
                })
            },
            touchStart(e, index) {
                this.startX = e.touches[0].clientX
                this.moveX = e.touches[0].clientX
                this.activeIndex = index
            },
            touchMove(e) {
                if(this.moveX < e.touches[0].clientX) {
                    this.endX += (e.touches[0].clientX - this.moveX)
                    this.endX = this.endX > 100 ? 100 : this.endX
                }else if(this.moveX > e.touches[0].clientX) {
                    this.endX -= (this.moveX - e.touches[0].clientX)
                    this.endX = this.endX < 75 ? 75 : this.endX
                }
                this.moveX = e.touches[0].clientX
            },
            touchEnd() {
                if(this.endX > 85 && this.endX < 90 ) {
                    this.endX = 100
                }else if(this.endX <= 85 && this.endX >= 75) {
                    this.endX = 75
                }else if(this.endX >= 90 && this.endX <= 100) {
                    this.endX = 100
                }
            },
            removeMark() {
                const markArr = bookLocalStorage.getBookInfoMark(this.bookName)
                markArr.splice(this.activeIndex, 1)
                bookLocalStorage.setBookInfoMark(this.bookName, markArr)
                this.showConfirm = false
                this.bookMark = bookLocalStorage.getBookInfoMark(this.bookName)
            }
        },
        mounted() {
            this.bookMark = bookLocalStorage.getBookInfoMark(this.bookName)
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .mark-wrapper
        position: relative
        z-index: 100
        width: 100%
        overflow-x: hidden
        overflow-y: scroll
        box-sizing: border-box
        padding: 0 20px
        -webkit-overflow-scrolling: touch
        &::-webkit-scrollbar
            display: none;
        &.no-scroll
            overflow: hidden
        .mark-item
            display: flex
            margin: 20px 0
            color: #666
            line-height: 20px
            font-size: 12px
            justify-content: space-between
            align-items: center
            overflow: hidden
            .mark-text
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
                flex: 0 0 100%
            .remove-mark
                display: block
                line-height: 30px
                text-align: center
                background-color: #f56c6c
                color: #FFF
                flex: 0 0 20%
                font-size: 12px
                border-radius: 3px
    .confirm-wrapper
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(0, 0, 0, .7)
        z-index: 9999
        .confirm-main
            position: absolute
            top: 50%
            left: 50%
            width: 70%
            background: #FFF
            margin: -100px 0 0 -35%
            border-radius: 5px
            .confirm-title
                padding: 15px 0
                border-bottom: 1px solid #EEE
                font-size: 14px
                color: #666
                text-align: center
                box-sizing: border-box
            .confirm-text
                font-size: 16px
                color: #333
                padding: 20px
                line-height: 25px
                text-align: center
            .confirm-button
                display: flex
                position: relative
                box-sizing: border-box
                border-top: 1px solid #EEE
                &:after
                    display: block
                    content: ''
                    position: absolute
                    left: 50%
                    top: 0
                    height: 100%
                    width: 1px
                    background: #EEE
                div
                    flex: 1
                    line-height: 40px
                    font-size: 14px
                    text-align: center
                    color: #666
                    &.confirm-determine
                        color: #AA6C1F
</style>