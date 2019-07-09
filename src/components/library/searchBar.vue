<template>
    <div class="search-bar-wrapper">
        <i class="icon-back" v-show="showBack" @click="showBack = false"></i>
        <div class="search-bar-input-wrapper">
            <i class="icon-search"></i>
            <input class="search" @click="showBack = true" type="text" placeholder="计算机科学和软件工程">
        </div>
        <i class="icon-shake"></i>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showBack: false,
            }
        }
    }
</script>


<style scoped lang="stylus" rel="stylesheet">
    .search-bar-wrapper
        position: fixed
        left: 0
        top: 0
        width: 100%
        box-sizing: border-box
        display: flex
        justify-content: space-between
        align-items: center
        padding: 10px 15px
        &.scroll
            box-shadow: 1px 0 10px rgba(0, 0, 0, .2)
        .search-bar-input-wrapper
            flex: 1
            display: flex
            border-radius: 40px
            border: 1px solid #EEE
            padding: 5px 10px
            justify-content: left
            align-items: center
            background: #F4F4F4
            margin: 0 10px 0 5px
            .icon-search
                font-size: 18px
                color: #979697
            .search
                display: block
                flex: 1
                height: 20px
                border: none
                color: #666
                margin-left: 5px
                font-size: 14px
                background: none
                &:focus
                    outline: none
                &::-webkit-input-placeholder
                    color: #CCC
</style>