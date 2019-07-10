<template>
    <div class="navigation-wrapper">
        <div class="book-search-wrapper">
            <div class="book-search-box">
                <i class="icon-search"></i>
                <input placeholder="请输入搜索关键字"
                       type="text"
                       v-model="searchText"
                       @focus="showSearchContent(true)"
                       @click="showCancel = true"
                       @keyup.enter="search">
                <span class="cancel" v-show="showCancel" @click="cancel">取消</span>
            </div>
        </div>
        <div class="book-info-wrapper">
            <div class="info-wrapper">
                <img class="cover" :src="cover" alt="">
                <div class="info-text">
                    <h4>{{metadata && metadata.title}}</h4>
                    <p>作者：{{metadata && metadata.creator}}</p>
                </div>
            </div>
        </div>
        <div v-show="!searchContentToggle" class="navigation-list-wrapper"
             :style="{'height': boxHeight + 'px'}"
             ref="scrollWrapper"
             @load="">
            <ul class="navigation-box" :style="calcHeight">
                <li class="navigation-item"
                    :class="{'actived': index === section}"
                    v-for="(item, index) in navigation"
                    :data-key="index"
                    @click.stop="navigateTo(index, item.href)">
                    {{`[ ${index} ]&nbsp;&nbsp;${item.label}`}}
                </li>
            </ul>
        </div>
        <div class="searchContent"
             v-show="searchContentToggle"
             :style="{'height': boxHeight + 'px'}">
            <book-loading v-show="showLoading"></book-loading>
            <ul>
                <li class="item"
                    v-for="(searchItem, index) in searchList"
                    :key="index"
                    v-html="searchItem.excerpt"
                    @click="displayContent(searchItem.cfi)"></li>
            </ul>
            <div class="noData" v-show="showNoData">
                <img src="../../../public/image/notData.png" alt="">
                <p>暂未搜索到相关信息</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {bookMixin} from "../../utils/mixin"
    import bookLoading from "@/components/common/bookLoading"

    export default {
        mixins: [bookMixin],
        components: {
            bookLoading
        },
        data() {
            return {
                pageCount: null,
                boxHeight: window.innerHeight - 215,
                searchContentToggle: false,
                showLoading: false,
                searchText: '',
                searchList: null,
                showCancel: false,
                showNoData: false
            }
        },
        mounted() {
            this.currentBook.loaded.navigation.then(nav => {
                this.setNavigation(nav.toc).then(() => {
                    console.log(this.section, this.pageCount)
                    this.pageCount = this.section + 20
                })
            })
        },
        computed: {
            calcHeight() {
                if(this.navigation){
                    return {'height': this.navigation.length * 35 + 'px'}
                }
            }
        },
        methods: {
            // 目录跳转
            navigateTo(href) {
                this.setToggle(0).then(() => {
                    this.display(href, () => {
                        this.scrollTo()
                    })
                })
            },
            // 搜索
            search(e) {
                const self = this
                let text = e.target.value
                if(text && text.length > 0){
                    this.searchList = null
                    self.showLoading = true
                    this.doSearch(text).then(result => {
                        self.showLoading = false
                        if(result.length > 0){
                            self.showNoData = self.showNoData && false
                            self.searchList = result
                            self.searchList.map(item => {
                                // 搜索文字高亮提示
                                item.excerpt = item.excerpt.replace(text, `<span style="color: #aa6c1f;">${text}</span>`)
                                return item
                            })
                        }else {
                            self.showNoData = true
                        }
                    })
                }
            },
            // 搜索内容处理
            doSearch(text) {
                return Promise.all(
                    this.currentBook.spine.spineItems.map(
                        section => section.load(this.currentBook.load.bind(this.currentBook))
                        .then(section.find.bind(section, text))
                        .finally(section.unload.bind(section))
                    )
                ).then(result => Promise.resolve([].concat.apply([], result)))
            },
            // 显示搜索结果模块
            showSearchContent(flag) {
                this.searchContentToggle = flag
                this.scrollTo()
            },
            // 取消搜索，还原状态
            cancel() {
                this.showCancel = false
                this.searchContentToggle = false
                this.searchText = ''
                this.searchList = null
                this.showNoData = false
            },
            // 搜索内容跳转
            displayContent(target, highlight = false) {
                this.display(target, () => {
                    this.setToggle(0)
                    this.cancel()
                    if (highlight) {
                        this.currentBook.rendition.annotations.highlight(target)
                    }
                })
            },
        },
        watch: {
            navigation: function() {
                setTimeout(() => {
                    this.scrollTo()
                }, 3000)
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .navigation-wrapper
        display: flex
        flex-direction: column
        height: 100%
        .book-search-wrapper
            padding: 15px 15px 0
            .book-search-box
                position: relative
                display: flex
                justify-content: left
                align-items: center
                i
                    position: absolute
                    top: 50%
                    left: 15px
                    color: #BBB
                    font-size: 14px
                    margin-top: -7px
                input
                    border: 1px solid #EEE
                    padding: 2px 15px 2px 35px
                    flex: 1
                    background: none
                    height: 25px
                    font-size: 14px
                    color: #666
                    margin-right: 10px
                    &:focus
                        outline: none
                    &::placeholder
                        color: #999
                .cancel
                    color: #aa6c1f
                    font-size: 14px
        .book-info-wrapper
            flex: 0 0 105px
            box-sizing: border-box
            padding: 15px
            border-bottom: 1px solid #EEE
            .info-wrapper
                display: flex
                align-items: center
                .cover
                    display: block
                    width: 60px
                    height: 75px
                    margin-right: 20px
                .info-text
                    h4
                        color: #333
                        font-size: 16px
                        margin-bottom: 6px
                    p
                        color: #666
                        font-size: 12px
        .navigation-list-wrapper
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
            .navigation-item
                display: block
                width: 100%
                color: #333
                font-size: 14px
                line-height: 35px
                overflow: hidden
                white-space: nowrap
                -ms-text-overflow: ellipsis
                text-overflow: ellipsis
                &.actived
                    color: #4d96f2
        .searchContent
            position: relative
            z-index: 100
            width: 100%
            overflow-x: hidden
            overflow-y: scroll
            box-sizing: border-box
            padding: 0 20px
            -webkit-overflow-scrolling: touch
            background: #f7f7ef
            display: flex
            flex-direction: column
            &::-webkit-scrollbar
                display: none;
            &.no-scroll
                overflow: hidden
            .item
                font-size: 14px
                color: #666
                display: -webkit-box
                overflow: hidden
                -webkit-box-orient: vertical
                -webkit-line-clamp: 3
                line-height: 20px
                margin: 15px 0
                box-sizing: border-box
            .noData
                padding-top: 30px
                img
                    display: block
                    width: 150px
                    height: 150px
                    margin: 0 auto 10px
                p
                    font-size: 14px
                    color: #888
                    text-align: center
</style>