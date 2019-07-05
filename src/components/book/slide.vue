<template>
    <transition name="fade">
        <div class="slider-wrapper" v-show="toggle == 2" @click="hideSlider">
            <transition name="moveLeft">
                <div class="content-wrapper" v-show="toggle == 2" @click.stop="">
                    <div class="content">
                        <component ref="slider" @switchCurrentTab="switchCurrentTab" :is="currentTab === 1 ? slideNavigation : slideMark"></component>
                    </div>
                    <div class="content-page-wrapper">
                        <span :class="{'actived': currentTab === 1}" @click="switchCurrentTab(1)">目录</span>
                        <span :class="{'actived': currentTab === 2}" @click="switchCurrentTab(2)">书签</span>
                    </div>
                    <book-loading v-if="hideLoading"></book-loading>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
    import {bookMixin} from "../../utils/mixin"
    import slideMark from './mark'
    import slideNavigation from './navigation'
    import bookLoading from '@/components/common/bookLoading'

    export default {
        mixins: [bookMixin],
        components: {
            bookLoading
        },
        data() {
            return {
                currentTab: 1,
                slideMark,
                slideNavigation,
                hideLoading: true
            }
        },
        methods: {
            switchCurrentTab(index) {
                this.currentTab = index
            },
            hideSlider() {
                this.setToggle(0).then(() => {
                    this.currentTab = 1
                })
            }
        },
        mounted() {
            this.$nextTick(() => {
                const timeout = setTimeout(() => {
                    this.hideLoading = false
                    clearTimeout(timeout)
                }, 4000)
            })
        },
        watch: {
            currentTab: function (newVal) {
                if(newVal === 1) {
                    this.$nextTick(() => {
                        this.scrollTo()
                    })
                }
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .slider-wrapper
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 9999
        background: rgba(0, 0, 0, .65)
        .content-wrapper
            position: relative
            display: flex
            flex-direction: column
            width: 80%
            height: 100%
            background: #f7f7ef
            .content
                width: 100%
                flex: 1
            .content-page-wrapper
                position: relative
                display: flex
                justify-content: center
                flex: 0 0 60px
                line-height: 60px
                text-align: center
                border-top: 1px solid #EEE
                box-sizing: border-box
                &:after
                    display: block
                    content: ''
                    position: absolute
                    left: 50%
                    top: 50%
                    width: 1px
                    height: 20px
                    margin-top: -10px
                    background: #CCC
                span
                    display: block
                    flex: 1
                    font-size: 14px
                    color: #999
                    &.actived
                        color: #AA6C1F
                        font-weight: bold
</style>