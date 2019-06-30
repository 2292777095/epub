<template>
    <transition name="moveUp">
        <div class="header-wrapper" v-show="bookLoading == true">
            <p class="chapter-title">header</p>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {bookMixin} from "../../utils/mixin"

    export default {
        mixins: [bookMixin]
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header-wrapper
        position: absolute
        left: 0
        top: 0
        width: 100%
        z-index: 999
        background: #f7f7ef
        padding: 0 15px
        box-sizing: border-box
        .chapter-title
            color: #333
            font-size: 12px
            line-height: 22px
</style>