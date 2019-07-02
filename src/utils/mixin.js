import {mapGetters, mapActions} from 'vuex'
import {bookLocalStorage} from './localStorage'

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
            'section',
            'distance',
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
            'setNavigation',
            'setSection',
            'setDistance',
        ]),
        refreshLocation() {
            const currentLocation = this.currentBook.rendition.currentLocation()
            if(currentLocation && currentLocation.start){
                let startCfi = currentLocation.start.cfi
                bookLocalStorage.setBookInfoStartCfi(this.bookName, startCfi)
                this.setSection(currentLocation.start.index)
            }
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