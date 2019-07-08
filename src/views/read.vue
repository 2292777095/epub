<template>
    <div class="container">
        <book-header></book-header>
        <book-view></book-view>
        <book-setting @showMarkTips="showMarkTips"></book-setting>
        <book-slide></book-slide>
        <book-loading v-show="bookLoading === true"></book-loading>
        <transition name="fade">
            <tips v-show="showTips" :icon="icon" :message="message"></tips>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    import {bookMixin} from "../utils/mixin"
    import bookHeader from '@/components/book/header'
    import bookView from '@/components/book/read'
    import bookSetting from '@/components/book/setting'
    import bookSlide from '@/components/book/slide'
    import bookLoading from '@/components/common/bookLoading'
    import tips from "@/components/common/tips"


    export default {
        data() {
            return {
                message: '',
                icon: '',
                showTips: false
            }
        },
        mixins: [bookMixin],
        components: {
            bookHeader,
            bookView,
            bookSetting,
            bookSlide,
            bookLoading,
            tips
        },
        methods: {
            showMarkTips(message, icon) {
                const self = this
                clearTimeout(timeout)
                this.showTips = true
                this.message = message
                this.icon = icon
                let timeout = setTimeout(() => {
                    self.showTips = false
                    clearTimeout(timeout)
                }, 1000)
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>