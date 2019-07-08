<template>
    <div class="scroll-wrapper"></div>
</template>

<script>
    export default {}
</script>

<style scoped lang="stylus" rel="stylesheet">
    .scroll-wrapper
        position: relative
        z-index: 100
        width: 100%
        overflow-x: hidden
        overflow-y: scroll
        -webkit-overflow-scrolling: touch
        &::-webkit-scrollbar
             display: none;
        &.no-scroll
             overflow: hidden
</style>