<template>
    <div class="scroll-wrapper" :style="{'height': boxHeight}" ref="scrollWrapper">
        <slot></slot>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        data() {
            return {
                boxHeight: window.innerHeight - 215 + 'px'
            }
        },
        props: {
            top: {
                type: Number,
                default: 0
            },
            bottom: {
                type: Number,
                default: 0
            },
            distance: {
                type: Number,
                default: 0
            },
            calcHeight: {
                type: Number,
                default: 0
            }
        },
        watch: {
            distance(newVal) {
                console.log(newVal)
                if(this.Scroll) {
                    this.Scroll.refresh()
                }else {
                    this.Scroll = new BScroll(this.$refs.scrollWrapper, {
                        click: true
                    })
                }
                this.Scroll.scrollTo(0, -newVal, 100)
                console.log(this.Scroll)
            }
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