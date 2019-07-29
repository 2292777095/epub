<template>
    <transition name="fade">
        <div class="flap-card-wrapper"
             @click="hideFlagCard"
             v-show="flagCardVisibility">
            <div class="flap-card-box" @click.stop="" v-show="!runBookCardAnimation">
                <div class="flag-card-item"
                    v-for="(item, index) in flapCardList"
                     :key="index"
                    :style="{zIndex: item.zIndex}">
                    <div class="flag-card-item-left" ref="left" :style="semiCircleStyle(item, 'left')"></div>
                    <div class="flag-card-item-right" ref="right" :style="semiCircleStyle(item, 'right')"></div>
                </div>
            </div>
            <div class="recommend-book-wrapper" v-show="runBookCardAnimation" @click.stop="">
                <img class="recommend-book-cover" :src="random ? random.cover : ''" alt="">
                <h4 class="recommend-book-title ellipsises">{{random ? random.title : ''}}</h4>
                <p class="recommend-book-author ellipsises">{{random ? random.author : ''}}</p>
                <div class="read-book-btn">立即阅读</div>
            </div>
            <div class="close-card-wrapper" @click="hideFlagCard">
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
        props: {
            random: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {
                flapCardList,
                front: 0,
                back: 1,
                flapCardSpeed: 25,
                rotateInterval: null,
                runBookCardAnimation: false
            }
        },
        methods: {
            hideFlagCard() {
                this.setFlagCardVisibility(false).then(() => {
                    this.runBookCardAnimation = false
                })
            },
            semiCircleStyle(item, dir) {
                return {
                    backgroundColor: `rgb(${item.r}, ${item.g}, ${item.b})`,
                    backgroundSize: item.backgroundSize,
                    backgroundImage: dir === 'left' ? item.imgLeft : item.imgRight
                }
            },
            startRotateAmation() {
                this.prepare()
                this.rotateInterval = setInterval(() => {
                    this.flapCardRotate()
                }, this.flapCardSpeed)
            },
            flapCardRotate() {
                const frontFlapCard = this.flapCardList[this.front]
                const backFlapCard = this.flapCardList[this.back]
                frontFlapCard.rotateDegree += 10
                frontFlapCard._g -= 5
                backFlapCard.rotateDegree -= 10
                if (backFlapCard.rotateDegree < 90) {
                    backFlapCard._g += 5
                }
                if (frontFlapCard.rotateDegree === 90 && backFlapCard.rotateDegree === 90) {
                    backFlapCard.zIndex += 2
                }
                this.rotate(this.front, 'front')
                this.rotate(this.back, 'back')
                if (frontFlapCard.rotateDegree === 180 && backFlapCard.rotateDegree === 0) {
                    this.next()
                }
            },
            rotate(index, dir) {
                let item = this.flapCardList[index],
                    dom = null
                if(dir === 'front') {
                    dom = this.$refs.right[index]
                }else {
                    dom = this.$refs.left[index]
                }

                dom.style.transform = `rotateY(${item.rotateDegree}deg)`
                dom.style.backgroundColor = `rgb(${item.r}, ${item._g}, ${item.b}`
            },
            prepare() {
                const backFlapCard = this.flapCardList[this.back]
                backFlapCard.rotateDegree = 180
                backFlapCard._g = backFlapCard.g - 5 * 9
                this.rotate(this.back, 'back')
            },
            next() {
                const frontFlapCard = this.flapCardList[this.front]
                const backFlapCard = this.flapCardList[this.back]
                frontFlapCard.rotateDegree = 0
                backFlapCard.rotateDegree = 0
                frontFlapCard._g = frontFlapCard.g
                backFlapCard._g = backFlapCard.g
                this.rotate(this.front, 'front')
                this.rotate(this.back, 'back')
                this.front++
                this.back++
                const len = this.flapCardList.length
                if (this.front >= len) {
                    this.front = 0
                }
                if (this.back >= len) {
                    this.back = 0
                }
                this.flapCardList.forEach((item, index) => {
                    item.zIndex = 100 - ((index - this.front + len) % len)
                })
                this.prepare()
            },
            resetRotateAmation() {
                this.front = 0
                this.back = 1
                this.flapCardList.forEach((item, index) => {
                    item.zIndex = 100 - index
                    item._g = item.g
                    item.rotateDegree = 0
                    this.rotate(index, 'front')
                    this.rotate(index, 'back')
                })
                clearInterval(this.rotateInterval)
            },
            stopAnimation() {
                if (this.task) {
                    clearInterval(this.task)
                }
                if (this.timeout) {
                    clearTimeout(this.timeout)
                }
                if (this.timeout2) {
                    clearTimeout(this.timeout2)
                }
                this.resetRotateAmation()
            },
            runAnimation() {
                this.timeout = setTimeout(() => {
                    this.startRotateAmation()
                }, 300)
                this.timeout2 = setTimeout(() => {
                    this.stopAnimation()
                    this.runBookCardAnimation = true
                }, 2500)
            }
        },
        watch: {
            flagCardVisibility(newVal) {
                if(newVal) {
                    this.runAnimation()
                }
            }
        },
    }
</script>

<style scoped lang="stylus" rel="stylesheet">
    .flap-card-wrapper
        position: fixed
        left: 0
        top: 0
        width: 100%
        height: 100%
        z-index: 99
        background-color: rgba(0, 0, 0, .7)
        display: flex
        justify-content: center
        align-items: center
        .flap-card-box
            position: relative
            background: #FFF
            width: 100px
            height: 100px
            border-radius: 5px
            padding: 10px
            box-sizing: border-box
            .flag-card-item
                display: flex
                position: absolute
                left: 0
                top: 0
                bottom: 0
                right: 0
                margin: auto
                width: 80px
                height: 80px
                div
                    flex: 0 0 50%
                    width: 50%
                    height: 100%
                    background-repeat: no-repeat
                    backface-visibility: hidden;
                    &.flag-card-item-left
                        background-position: right center
                        transform-origin: right
                        border-radius: 80px 0 0 80px
                    &.flag-card-item-right
                        background-position: left center
                        transform-origin: left
                        border-radius: 0 80px 80px 0
        .recommend-book-wrapper
            position: relative;
            width: 65%;
            padding-top: 40px
            max-width: 400px
            background: #FFF
            border-radius: 15px
            .recommend-book-cover
                display: block
                width: 90px
                height: 130px
                margin: 0 auto
            .recommend-book-title
                color: #333
                font-weight: bold
                font-size: 18px
                line-height: 24px
                padding: 0 20px
                margin-top: 30px
                text-align: center
                ellipsises(2)
            .recommend-book-author
                margin-top: 10px
                padding: 0 20px
                text-align: center
                color: #999
                font-size: 14px
                line-height: 20px
            .read-book-btn
                margin-top: 20px
                width: 100%
                border-radius: 0 0 15px 15px
                padding: 15px 0
                text-align: center
                color: white
                font-size: 14px
                background: rgb(74, 171, 255)
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