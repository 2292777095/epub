<template>
    <transition name="moveUp">
        <div class="header-wrapper" :style="{'background': themeStyle.background}" v-show="bookLoading == true">
            <p class="chapter-title" :style="{ 'color': themeStyle.color}">header</p>
        </div>
    </transition>
</template>

<script type="text/ecmascript-6">
    import {bookMixin} from "../../utils/mixin"

    export default {
        mixins: [bookMixin],
        data() {
            return {
                themeStyle: {
                    background: '',
                    color: ''
                }
            }
        },
        watch: {
            theme(newVal) {
                switch (newVal){
                    case 'default':
                        this.themeStyle.background = '#f7f7ef';
                        this.themeStyle.color = '#333';
                        break;
                    case 'orange':
                        this.themeStyle.background = '#efdfbd';
                        this.themeStyle.color = '#333';
                        break;
                    case 'green':
                        this.themeStyle.background = '#beccbd';
                        this.themeStyle.color = '#333';
                        break;
                    case 'pink':
                        this.themeStyle.background = '#e6cece';
                        this.themeStyle.color = '#333';
                        break;
                    case 'brown':
                        this.themeStyle.background = '#292421';
                        this.themeStyle.color = '#999';
                        break;
                    default:
                        this.themeStyle.background = '#f7f7ef';
                        this.themeStyle.color = '#333';
                        break;
                }
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header-wrapper
        position: absolute
        left: 0
        top: 0
        width: 100%
        z-index: 999
        background: #f7f7ef
        padding: 0 15px
        box-sizing: border-box
        .chapter-title
            color: #333
            font-size: 12px
            line-height: 22px
</style>