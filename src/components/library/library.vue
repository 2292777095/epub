<template>
    <div class="library-wrapper">
        <search-bar></search-bar>
        <div class="scroll-box">
            <scroll :top="top" :bottom="bottom" @onScroll="onScroll">
                <hot-search :label="hotSearch.label" :btn="hotSearch.btn" :list="hotSearch.list"></hot-search>
                <div class="hr"></div>
                <hot-search :label="historySearch.label" :btn="historySearch.btn" :list="historySearch.list"></hot-search>
            </scroll>
        </div>
    </div>
</template>

<script>
    import searchBar from "@/components/library/searchBar"
    import hotSearch from "@/components/library/hotSearch"
    import scroll from "@/components/common/scroll"
    import {storeMixin} from "../../utils/storeMixin"

    export default {
        mixins: [storeMixin],
        data() {
            return {
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
        components: {
            searchBar,
            scroll,
            hotSearch
        },
        methods: {
            onScroll(offsetY) {
                this.setOffsetY(offsetY)
            }
        },
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .scroll-box
        position: relative
        z-index: 9
        background: #FFF
        margin-top: 54px
        .hr
            width: 100%
            height: 1px
            background: #F5F5F5
</style>