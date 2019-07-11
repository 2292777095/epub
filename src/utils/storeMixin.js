import {mapGetters, mapActions} from 'vuex'

export const storeMixin = {
    computed: {
        ...mapGetters([
            'offsetY',
            'flagCardVisibility',
        ])
    },
    methods: {
        ...mapActions([
            'setOffsetY',
            'setFlagCardVisibility',
        ])
    }
}