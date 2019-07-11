<template>
    <transition name="fade">
        <div class="flap-card-wrapper"
             @click="setFlagCardVisibility(false)"
             v-show="flagCardVisibility">
            <div class="flap-card-box" @click.stop="">
                <div class="flag-card-item"
                    v-for="(item, index) in flapCardList"
                    :style="{'background-color': `rgb(${item.r}, ${item.g}, ${item.b})`, 'border': `1px solid rgb(${item.r}, ${item.g}, ${item.b})`, 'z-index': item.zIndex}">
                    <div class="flag-card-item-left" ref="`flagCardLeft${index}`" :style="{'background-image': item.imgLeft}"></div>
                    <div class="flag-card-item-right" ref="`flagCardRight${index}`" :style="{'background-image': item.imgRight}"></div>
                </div>
            </div>
            <div class="close-card-wrapper" @click="setFlagCardVisibility(false)">
                <i class="icon-close"></i>
            </div>
        </div>
    </transition>
</template>

<script>
    import {storeMixin} from "../../utils/storeMixin";
    import {flapCardList} from "../../utils/store"

    export default {
        mixins: [storeMixin],
        data() {
            return {
                flapCardList
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .flap-card-wrapper
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        height: 100%
        z-index: 99
        background-color: rgba(0, 0, 0, .7)
        .flap-card-box
            position: absolute
            left: 50%
            top: 30%
            margin-left: -40px
            background: #FFF
            width: 100px
            height: 100px
            border-radius: 5px
            .flag-card-item
                display: flex
                justify-content: left
                align-items: center
                position: absolute
                left: 10px
                top: 10px
                width: 80px
                height: 80px
                border-radius: 50%
                box-sizing: border-box
                div
                    flex: 1
                    height: 100%
                    background-size: 50%, 50%
                    background-repeat: no-repeat
                    &.flag-card-item-left
                        background-position: right center
                        transform-origin: right
                    &.flag-card-item-right
                        background-position: left center
                        transform-origin: left
        .close-card-wrapper
            position: absolute
            left: 50%
            bottom: 50px
            font-size: 20px
            background: #FFF
            border-radius: 50%
            padding: 15px
            margin-left: -25px
</style>