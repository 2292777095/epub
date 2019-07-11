<template>
    <div class="container">
        <div class="search-bar-wrapper" :class="{'showShadow': showShadow === true}">
            <i class="icon-back" v-show="hotSearchVisibility" @click="hideHotSearch"></i>
            <div class="search-bar-input-wrapper">
                <i class="icon-search"></i>
                <input class="search" @click="showHotSearch" type="text" placeholder="计算机科学和软件工程">
            </div>
            <i class="icon-shake" @click="setFlagCardVisibility(true)"></i>
        </div>
        <transition name="fadeMove">
            <div class="scroll-box" v-show="hotSearchVisibility">
                <scroll :top="top" :bottom="bottom" ref="scroll" @onScroll="onScroll">
                    <hot-search :label="hotSearch.label" :btn="hotSearch.btn" :list="hotSearch.list"></hot-search>
                    <div class="hr"></div>
                    <hot-search :label="historySearch.label" :btn="historySearch.btn" :list="historySearch.list"></hot-search>
                </scroll>
            </div>
        </transition>
    </div>
</template>

<script>
    import {storeMixin} from "../../utils/storeMixin"
    import scroll from "@/components/common/scroll"
    import hotSearch from "@/components/library/hotSearch"

    export default {
        mixins: [storeMixin],
        data() {
            return {
                showShadow: false,
                hotSearchVisibility: false,
                top: 54,
                bottom: 0,
                hotSearch: {
                    label: '热门搜索',
                    btn: '换一批',
                    list: [
                        {
                            type: 1,
                            text: 'Self-Reported Population Health',
                            num: '1.8万'
                        },
                        {
                            type: 1,
                            text: 'Library and Information Sciences',
                            num: '1.1万'
                        },
                        {
                            type: 1,
                            text: 'Global Business Strategy',
                            num: '1.3万'
                        },
                        {
                            type: 1,
                            text: 'Corporate Data Quality',
                            num: '1.0万'
                        },
                        {
                            type: 1,
                            text: 'Verrechnungspreise',
                            num: '3.9万'
                        }
                    ],
                },
                historySearch: {
                    label: '历史搜索',
                    btn: '清空',
                    list: [
                        {
                            type: 2,
                            text: 'Computer Science'
                        },
                        {
                            type: 1,
                            text: 'Building the Infrastructure for Cloud Security'
                        },
                        {
                            type: 2,
                            text: 'ePub'
                        },
                        {
                            type: 2,
                            text: 'api'
                        },
                        {
                            type: 2,
                            text: 'Vue.js'
                        },
                        {
                            type: 2,
                            text: 'Nginx'
                        },
                        {
                            type: 2,
                            text: 'Java'
                        },
                        {
                            type: 2,
                            text: 'hdfs'
                        },
                        {
                            type: 2,
                            text: 'vuejs'
                        },
                        {
                            type: 2,
                            text: 'es6'
                        },
                        {
                            type: 2,
                            text: 'Intel'
                        },
                        {
                            type: 1,
                            text: 'Pro Git'
                        },
                        {
                            type: 2,
                            text: 'imooc'
                        },
                        {
                            type: 2,
                            text: 'Education'
                        },
                        {
                            type: 2,
                            text: 'Springer'
                        },
                        {
                            type: 2,
                            text: 'Environment'
                        }
                    ],
                }
            }
        },
        methods: {
            onScroll(offsetY) {
                this.setOffsetY(offsetY)
            },
            showHotSearch() {
                this.hotSearchVisibility = true
                this.$nextTick(() => {
                    this.$refs.scroll.scrollTo(0, 0)
                })
            },
            hideHotSearch() {
                this.hotSearchVisibility = false
                this.showShadow = false
            }
        },
        components: {
            scroll,
            hotSearch
        },
        watch: {
            offsetY(newVal) {
                console.log(newVal)
                if(newVal > 0){
                    this.showShadow = true
                }else {
                    this.showShadow = false
                }
            }
        }
    }
</script>


<style scoped lang="stylus" rel="stylesheet">
    .container
        position: fixed
        left: 0
        top: 0
        width: 100%
        z-index: 99
        .search-bar-wrapper
            position: relative
            z-index: 99
            display: flex
            justify-content: space-between
            box-sizing: border-box
            padding: 10px 15px
            align-items: center
            &.showShadow
                box-shadow: 1px 0 10px rgba(0, 0, 0, .2)
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
        .scroll-box
            position: relative
            z-index: 9
            background: #FFF
            .hr
                width: 100%
                height: 1px
                background: #F5F5F5
</style>