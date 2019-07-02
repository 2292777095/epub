<template>
    <div class="container">
        <book-view></book-view>
        <book-setting></book-setting>
        <book-slide></book-slide>
        <book-loading v-show="bookLoading === true"></book-loading>
    </div>
</template>

<script type="text/ecmascript-6">
    import {bookMixin} from "../utils/mixin"
    import bookView from '@/components/book/read'
    import bookSetting from '@/components/book/setting'
    import bookSlide from '@/components/book/slide'
    import bookLoading from '@/components/common/bookLoading'

    export default {
        mixins: [bookMixin],
        components: {
            bookView,
            bookSetting,
            bookSlide,
            bookLoading
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>