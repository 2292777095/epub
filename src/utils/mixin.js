import {mapGetters, mapActions} from 'vuex'

export const bookMixin = {
    computed: {
        ...mapGetters([
            'toggle',
            'currentBook',
            'theme',
            'fontSize',
            'bookName',
            'bookLoading',
            'cover',
            'metadata',
            'navigation',
        ])
    },
    methods: {
        ...mapActions([
            'setToggle',
            'setBook',
            'setTheme',
            'setFontSize',
            'setBookName',
            'setBookLoading',
            'setCover',
            'setMetadata',
            'setNavigation'
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