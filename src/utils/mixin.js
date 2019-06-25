import {mapGetters, mapActions} from 'vuex'

export const bookMixin = {
    computed: {
        ...mapGetters([
            'toggle',
            'currentBook',
            'currentRendition',
        ])
    },
    methods: {
        ...mapActions([
            'setToggle',
            'setBook',
            'setRendition',
        ]),
        refreshLocation() {

        },
        display(target, callback) {
            if(target){
                this.currentBook.rendition.display(target).then(() => {
                    callback && callback()
                })
            }else{
                this.currentBook.rendition.display().then(() => {
                    callback && callback()
                })
            }
        }
    }
}