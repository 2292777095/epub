<template>
    <transition name="moveUp">
        <div class="header-wrapper" v-show="bookLoading == false">
            <p class="chapter-title">{{getSectionName}}</p>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {bookMixin} from "../../utils/mixin"

    export default {
        mixins: [bookMixin],
        computed: {
            getSectionName() {
                if(this.navigation && this.section){
                    return this.section ? this.navigation[this.section].label : ''
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header-wrapper
        position: absolute
        left: 0
        top: 0
        width: 100%
        z-index: 99
        background: none
        padding: 0 15px
        box-sizing: border-box
        .chapter-title
            font-weight: bold
            color: #AA6C1F
            font-size: 12px
            line-height: 30px
            overflow: hidden
            white-space: nowrap
            -ms-text-overflow: ellipsis
            text-overflow: ellipsis
</style>