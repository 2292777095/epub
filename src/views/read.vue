<template>
    <div class="container">
        <book-view></book-view>
        <book-setting></book-setting>
        <book-slide></book-slide>
        <book-loading></book-loading>
    </div>
</template>

<script type="text/ecmascript-6">
    import bookView from '@/components/book/read'
    import bookSetting from '@/components/book/setting'
    import bookSlide from '@/components/book/slide'
    import bookLoading from '@/components/common/bookLoading'

    export default {
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