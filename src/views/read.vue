<template>
    <div class="container">
        <book-header></book-header>
        <book-view></book-view>
        <book-setting></book-setting>
        <book-slide></book-slide>
    </div>
</template>

<script type="text/ecmascript-6">
    import bookHeader from '@/components/book/header'
    import bookView from '@/components/book/read'
    import bookSetting from '@/components/book/setting'
    import bookSlide from '@/components/book/slide'

    export default {
        components: {
            bookHeader,
            bookView,
            bookSetting,
            bookSlide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>