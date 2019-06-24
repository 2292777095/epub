<template>
    <transition name="moveUp">
        <div class="header-wrapper">
            <p class="chapter-title">header</p>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {bookMixin} from "../../utils/mixin"

    export default {
        mixins: [bookMixin],
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header-wrapper
        display: none
        /*display: flex*/
        justify-content: space-between
        align-items: center
        position: absolute
        left: 0
        top: 0
        width: 100%
        z-index: 999
        background: #FFF
        height: 50px
        padding: 15px
        box-sizing: border-box
        .chapter-title
            color: #333
</style>