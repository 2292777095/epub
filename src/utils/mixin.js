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
        ]),
        scrollTo() {
            let currentLocationIndex = this.currentBook.rendition.currentLocation().start.index,
                box = document.querySelector('.navigation-list-wrapper'),
                line = (window.innerHeight - 215) / 2,
                offsetTop = currentLocationIndex * 35 - line

            this.setSection(currentLocationIndex)
            box.scrollTo(0, offsetTop)
        },
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