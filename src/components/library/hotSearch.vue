<template>
    <div class="hot-search-wrapper">
        <div class="hot-search-title-wrapper">
            <span class="label">{{label}}</span>
            <span class="btn">{{btn}}</span>
        </div>
        <div class="hot-search-list-wrapper">
            <ul>
                <li v-for="item in list" class="hot-search-list-item">
                    <i v-if="item.type === 1" class="icon-book"></i>
                    <i v-if="item.type === 2" class="icon-search"></i>
                    <div class="item-text">
                        <p class="text">{{item.text}}</p>
                        <span class="num" v-if="item.num">{{item.num}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            btn: String,
            list: Array
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .hot-search-title-wrapper
        display: flex
        justify-content: space-between
        padding: 10px
        font-size: 14px
        color: #666
        font-weight: bold
        .btn
            color: #409eff
    .hot-search-list-item
        display: flex
        align-items: center
        padding: 10px
        i
            padding: 10px
            font-size: 14px
            margin-right: 5px
            color: #999
        .item-text
            .text
                flex: 1
                white-space: nowrap
                overflow: hidden
                -ms-text-overflow: ellipsis
                text-overflow: ellipsis
                color: #666
                font-size: 14px
                font-weight: bold
                margin-bottom: 5px
            .num
                color: #999
                font-size: 12px
</style>