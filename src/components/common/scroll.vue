<template>
    <div class="scroll-wrapper" :class="{'no-scroll': isNoScroll}" ref="scrollWrapper">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            top: {
                type: Number,
                default: 0
            },
            bottom: {
                type: Number,
                default: 0
            },
            isNoScroll: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            scrollTo(x, y) {
                this.$refs.scrollWrapper.scrollTo(x, y)
            },
            refresh() {
                if(this.$refs.scrollWrapper) {
                    this.$refs.scrollWrapper.style.height = window.innerHeight - this.top - this.bottom + 'px'
                }
            }
        },
        mounted() {
            this.refresh()
        }
    }
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