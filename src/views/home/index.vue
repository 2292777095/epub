<template>
    <div class="container">
        <router-view/>
        <div class="footer-wrapper">
            <ul>
                <router-link to="/library" tag="li">
                    <i class="icon-read"></i>
                    <span>读书</span>
                </router-link>
                <router-link to="/user" tag="li">
                    <i class="icon-user"></i>
                    <span>我的</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .footer-wrapper
        position: fixed
        bottom: 0
        left: 0
        width: 100%
        box-sizing: border-box
        padding: 10px 0px
        border-top: 1px solid #EEE
        ul
            position: relative
            display: flex
            &:after
                display: block
                content: ''
                width: 1px
                height: 100%
                background: #EEE
                position: absolute
                left: 50%
                top: 0
            li
                flex: 1
                justify-content: center
                align-items: center
                text-align: center
                font-size: 14px
                color: #666
                i
                    font-size: 25px
                span
                    display: block
                    margin-top: 2px
                &.router-link-active
                    color: #349fd5
</style>