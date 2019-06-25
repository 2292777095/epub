const actions = {
    setToggle: ({commit}, toggle) => commit('setToggle', toggle),
    setBook: ({commit}, currentBook) => commit('setBook', currentBook),
    setRendition: ({commit}, currentRendition) => commit('setRendition', currentRendition),
}

export default  actions