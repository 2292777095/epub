<template>
    <div class="confirm-wrapper">
        <div class="confirm-main">
            <div class="confirm-title">{{confirmTitle}}</div>
            <div class="confirm-text">{{confirmText}}</div>
            <div class="confirm-button">
                <div class="confirm-cancel">取消</div>
                <div class="confirm-determine" @click="removeMark">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            confirmTitle: String,
            confirmText: String,
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .confirm-wrapper
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(0, 0, 0, .7)
        .confirm-main
            position: absolute
            top: 50%
            left: 50%
            width: 70%
            background: #FFF
</style>