<template>
    <div class="mark-wrapper">
        <ul>
            <li class="mark-item" v-for="(item, index) in bookMark" :key="index" @click="navigateTo(item.cfi)">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
    import {bookLocalStorage} from "../../utils/localStorage"
    import {bookMixin} from "../../utils/mixin"

    export default {
        mixins: [bookMixin],
        data() {
            return {
                bookMark: null
            }
        },
        methods: {
            // 目录跳转
            navigateTo(href) {
                this.setToggle(0).then(() => {
                    this.$emit('switchCurrentTab', 1)
                    this.display(href, () => {
                        this.scrollTo()
                    })
                })
            },
        },
        mounted() {
            this.bookMark = bookLocalStorage.getBookInfoMark(this.bookName)
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .mark-wrapper
        position: relative
        z-index: 100
        width: 100%
        overflow-x: hidden
        overflow-y: scroll
        box-sizing: border-box
        padding: 0 20px
        -webkit-overflow-scrolling: touch
        &::-webkit-scrollbar
            display: none;
        &.no-scroll
            overflow: hidden
        .mark-item
            margin: 20px 0
            color: #666
            line-height: 20px
            font-size: 14px
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 4
            overflow: hidden
</style>