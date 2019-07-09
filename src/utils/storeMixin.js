import {mapGetters, mapActions} from 'vuex'

export const storeMixin = {
    computed: {
        ...mapGetters([
            'offsetY'
        ])
    },
    methods: {
        ...mapActions([
            'setOffsetY'
        ])
    }
}