<template>
    <div class="bookLoading-wrapper" v-show="bookLoading === true">
        <div class="loading-wrapper">
            <div class="box">
                <div class="loading-wrapper-item-box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="loading-wrapper-item-box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <p>加载中，请稍后...</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {bookMixin} from "../../utils/mixin";

    export default {
        mixins: [bookMixin]
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @keyframes bookLoading
        from
            width: 0
        to
            width: 100%

    .bookLoading-wrapper
        position: absolute
        z-index: 9999
        left: 0
        top: 0
        width: 100%
        height: 100%
        background: #FFF
        .loading-wrapper
            position: absolute
            left: 50%
            top: 50%
            transform: translate3d(-50%, -100%, 0)
            .box
                display: flex
                border: 2px solid #efdfbd
                border-radius: 5px
                width: 80px
                height: 50px
                margin: 0 auto
                box-sizing: border-box
                .loading-wrapper-item-box
                    display: flex
                    flex-direction: column
                    flex: 1
                    padding: 0 8px
                    justify-content: space-evenly
                    &:first-of-type
                        border-right: 1px solid #efdfbd
                    &:last-of-type
                        border-left: 1px solid #efdfbd
                    span
                        display: block
                        width: 100%
                        flex: 0 0 2px
                        background: #efdfbd
                        animation: bookLoading .8s ease infinite
                        &:first-of-type
                            animation-delay: .3s
                        &:nth-of-type(2)
                            animation-delay: .15s
                        &:last-of-type
                            animation-delay: 0s
            p
                margin-top: 15px
                font-size: 14px
                color: #AA6C1F
                text-align: center
</style>