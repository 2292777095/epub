<template>
    <transition name="fade">
        <div class="flap-card-wrapper"
             @click="setFlagCardVisibility(false)"
             v-show="flagCardVisibility">
            <div class="flap-card-box" @click.stop="">
                <div class="flag-card-item"
                    v-for="(item, index) in flapCardList"
                     :key="index"
                    :style="{zIndex: item.zIndex}">
                    <div class="flag-card-item-left" ref="left" :style="semiCircleStyle(item, 'left')"></div>
                    <div class="flag-card-item-right" ref="right" :style="semiCircleStyle(item, 'right')"></div>
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
                flapCardList,
                front: 0,
                back: 1,
                flapCardSpeed: 25,
                rotateInterval: null
            }
        },
        methods: {
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
                this.setFlagCardVisibility(false).then(() => {
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
                })
            },
            stopRotateAmation() {
                this.resetRotateAmation()
            }
        },
        watch: {
            flagCardVisibility(newVal) {
                if(newVal) {
                    this.startRotateAmation()
                }else {
                    this.stopRotateAmation()
                }
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