<template>
    <transition name="moveUp">
        <div class="header-wrapper" v-show="toggle == 1">
            <i class="icon icon-arrow"></i>
            <div class="operation-wrapper">
                <i class="icon icon-right-catalog" @click="operationToggle"></i>
                <transition name="operation">
                    <div class="right-catalog-wrapper" v-show="show">
                        <ul>
                            <li>
                                <i class="icon icon-search"></i>
                                <span>全文搜索</span>
                            </li>
                            <li>
                                <i class="icon icon-bookmark"></i>
                                <span>添加书签</span>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
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
        },
        methods: {
            operationToggle() {
                this.show = !this.show
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header-wrapper
        display: flex
        justify-content: space-between
        align-items: center
        position: absolute
        left: 0
        top: 0
        width: 100%
        z-index: 999
        background: rgba(41, 37, 36, .95)
        height: 50px
        padding: 15px
        box-sizing: border-box
        .icon
            color: #c0bebf
        .operation-wrapper
            position: relative
            .icon-right-catalog
                font-size: 20px
            .right-catalog-wrapper
                position: absolute
                top: 35px
                right: 0
                background: rgba(41, 37, 36, .95)
                overflow: hidden
                ul
                    li
                        display: flex
                        justify-content: space-between
                        align-items: center
                        padding: 15px
                        span
                            width: 64px
                            font-size: 14px
                            margin-left: 15px
                            color: #c0bebf

</style>