<template>
    <div class="bookLoading-wrapper" v-if="bookLoading === true">
        <div class="loading-wrapper">
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
            margin: -25px 0 0 -40px
            display: flex
            border: 2px solid #d8d9db
            border-radius: 5px
            width: 80px
            height: 50px
            box-sizing: border-box
            .loading-wrapper-item-box
                display: flex
                flex-direction: column
                flex: 1
                padding: 0 8px
                justify-content: space-evenly
                &:first-of-type
                    border-right: 1px solid #d8d9db
                &:last-of-type
                    border-left: 1px solid #d8d9db
                span
                    display: block
                    width: 100%
                    flex: 0 0 2px
                    background: #d8d9db
                    animation: bookLoading .8s ease infinite
                    &:first-of-type
                        animation-delay: .3s
                    &:nth-of-type(2)
                        animation-delay: .15s
                    &:last-of-type
                        animation-delay: 0s

</style>