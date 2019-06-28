<template>
    <div class="navigation-wrapper">
        <div class="book-info-wrapper">
            <div class="info-wrapper">
                <img class="cover" :src="cover" alt="">
                <div class="info-text">
                    <h4>{{metadata && metadata.title}}</h4>
                    <p>{{metadata && metadata.creator}}</p>
                </div>
            </div>
        </div>
        <Scroll
            :top="106"
            :bottom="61">
            <div class="navigation-list-wrapper">
                <ul>
                    <li class="navigation-item" v-for="navigationItem in navigation">
                        <span>{{navigationItem.label}}</span>
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
        mounted() {
            console.log(this.navigation && this.navigation)
        },
        components: {
            Scroll
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .navigation-wrapper
        display: flex
        flex-direction: column
        height: 100%
        .book-info-wrapper
            flex: 0 0 105px
            box-sizing: border-box
            padding: 15px
            border-bottom: 1px solid #EEE
            .info-wrapper
                display: flex
                .cover
                    display: block
                    width: 60px
                    height: 75px
                    margin-right: 20px
                .info-text
                    display: flex
                    flex-direction: column
                    justify-content: space-between
                    h4
                        color: #333
                        font-size: 16px
                    p
                        color: #666
                        font-size: 14px
        .navigation-list-wrapper
            flex: 1
            box-sizing: border-box
            padding: 20px
</style>