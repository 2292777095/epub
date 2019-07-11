const store = {
    state: {
        offsetY: 0,
        flagCardVisibility: false
    },
    mutations: {
        'setOffsetY': (state, offsetY) => state.offsetY = offsetY,
        'setFlagCardVisibility': (state, flagCardVisibility) => state.flagCardVisibility = flagCardVisibility,
    }
}
export default store;