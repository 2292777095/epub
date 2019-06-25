<template>
    <div class="container">
        <book-header></book-header>
        <book-view></book-view>
        <book-setting></book-setting>
    </div>
</template>

<script type="text/ecmascript-6">
    import bookHeader from '@/components/book/header'
    import bookView from '@/components/book/read'
    import bookSetting from '@/components/book/setting'

    export default {
        components: {
            bookHeader,
            bookView,
            bookSetting
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>