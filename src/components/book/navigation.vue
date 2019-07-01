<template>
    <div class="navigation-wrapper">
        <div class="book-search-wrapper">
            <div class="book-search-box">
                <i class="icon-search"></i>
                <input @change="doSearch" type="text" placeholder="请输入搜索关键字" :value="searchText">
                <i v-show="closeShow" class="icon-close"></i>
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
        <Scroll
            :top="154"
            :bottom="61"
            ref="scrollWrapper">
            <div class="navigation-list-wrapper">
                <ul>
                    <li class="navigation-item"
                        :class="{'actived': index === section}"
                        v-for="(item, index) in navigation"
                        @click.stop="navigateTo($event, item.href)"
                        v-navigationItemLoad="index">
                        {{`[ ${index} ]&nbsp;&nbsp;${item.label}`}}
                    </li>
                </ul>
            </div>
        </Scroll>
    </div>
</template>

<script>
    import {bookMixin} from "../../utils/mixin";
    import Scroll from '../common/scroll'

    export default {
        mixins: [bookMixin],
        data() {
            return {
                closeShow: false,
                searchText: ''
            }
        },
        components: {
            Scroll
        },
        directives: {
            navigationItemLoad: {
                inserted: function(el, binding, vnode) {
                    const selected = el
                    let boxHeight = (window.innerHeight - 215) / 2,
                        offsetTop = null

                    if(selected) {
                        if(selected.className === "navigation-item actived") {
                            offsetTop = binding.value * 35
                            if(offsetTop - boxHeight > boxHeight){
                                vnode.context.navScrollTo(offsetTop - boxHeight)
                            }
                        }
                    }
                }
            }
        },
        methods: {
            navigateTo(e, href) {
                let boxHeight = (window.innerHeight - 215) / 2,
                    offsetTop = e.target.offsetTop

                this.setToggle(0).then(() => {
                    this.display(href, () => {
                        this.refreshLocation()
                        if(offsetTop > boxHeight){
                            this.navScrollTo(offsetTop - boxHeight)
                        }else {
                            this.navScrollTo(0)
                        }
                    })
                })
            },
            doSearch(e) {
                this.searchText = e.target.value
            },
            navScrollTo(y) {
                this.$refs.scrollWrapper.scrollTo(0, y)
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
                display: flex
                justify-content: left
                align-items: center
                border: 1px solid #EEE
                padding: 2px 15px
                i
                    color: #BBB
                    font-size: 14px
                    &.icon-close
                        margin-left: 8px
                input
                    flex: 1
                    border: none
                    background: none
                    height: 25px
                    margin-left: 8px
                    font-size: 14px
                    color: #666
                    &:focus
                        outline: none
                    &::placeholder
                        color: #999
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
            flex: 1
            box-sizing: border-box
            padding: 0 20px
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
</style>