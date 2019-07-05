<template>
    <div class="tips-wrapper">
        <i class="icon" :class="icon"></i>
        <p class="tips-text">{{message}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            message: null,
            icon: null
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .tips-wrapper
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 50%
        left: 50%
        width: 100px
        height: 100px
        margin: -50px 0 0 -50px
        border-radius: 10px
        background: rgba(0, 0, 0, .6)
        text-align: center
        z-index: 99
        .icon
            font-size: 25px
            color: #FFF
        .tips-text
            font-size: 12px
            color: #FFF
            margin-top: 10px

</style>