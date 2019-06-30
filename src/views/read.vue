<template>
    <div class="container">
        <book-view></book-view>
        <book-setting></book-setting>
        <book-slide></book-slide>
    </div>
</template>

<script type="text/ecmascript-6">
    import bookView from '@/components/book/read'
    import bookSetting from '@/components/book/setting'
    import bookSlide from '@/components/book/slide'

    export default {
        components: {
            bookView,
            bookSetting,
            bookSlide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>