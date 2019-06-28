import {mapGetters, mapActions} from 'vuex'

export const bookMixin = {
    computed: {
        ...mapGetters([
            'toggle',
            'currentBook',
            'theme',
            'disabledAvailable',
        ])
    },
    methods: {
        ...mapActions([
            'setToggle',
            'setBook',
            'setTheme',
            'setDisabledAvailable',
        ]),
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