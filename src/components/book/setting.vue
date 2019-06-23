<template>
    <transition name="moveDown">
        <div class="setting-wrapper" v-show="toggle == 1">
            <div class="progress-wrapper">
                <span>上一章</span>
                <input type="range"
                       min="0"
                       max="100"
                       step="1"
                       ref="inputRange"
                       @change="changeProgress($event.target.value)"
                       @input="changeProgress($event.target.value)"
                       :value="progress"
                       :disabled="disabled">
                <span>下一章</span>
            </div>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {bookMixin} from "../../utils/mixin"

    export default {
        data() {
            return {
                progress: 0,
                disabled: true
            }
        },
        mounted() {
            this.currentBook.ready.then(() => {
                this.disabled = false
            })
        },
        methods: {
            changeProgress(val) {
                this.progress = val
                this.changeProgressStyle()
                this.setBookProgress()
            },
            // 设置进度条样式
            changeProgressStyle() {
                this.$refs.inputRange.style.backgroundSize = this.progress + '% 100%'
            },
            // 设置进度
            setBookProgress() {
                let cfi = this.currentBook.locations.cfiFromPercentage(this.progress / 100)
                console.log(this.currentBook.rendition)
                this.display(cfi)
            }
        },
        mixins: [bookMixin]
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .setting-wrapper
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        z-index: 999
        background: rgba(41, 37, 36, .95)
        padding: 15px
        box-sizing: border-box
        .progress-wrapper
            display: flex
            justify-content: space-between
            align-items: center
            span
                font-size: 14px
                color: #c0bebf
            input[type="range"]
                outline: none
                -webkit-appearance: none
                -moz-appearance: none
                appearance: none
                flex: 1
                margin: 0 20px
                height: 3px
                border-radius: 4px
                background: linear-gradient(to right, #FFF, #FFF) no-repeat, #5f5b5a
                background-size: 0 100%
                &::-webkit-slider-thumb
                    width: 16px
                    height: 16px
                    border-radius: 50%
                    background: #FFF
                    -webkit-appearance: none
                    -moz-appearance: none
                    appearance: none
</style>