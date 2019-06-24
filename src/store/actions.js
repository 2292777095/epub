const actions = {
    setToggle: ({commit}, toggle) => commit('setToggle', toggle),
    setBook: ({commit}, currentBook) => commit('setBook', currentBook),
    setTheme: ({commit}, theme) => commit('setTheme', theme),
    setDisabledAvailable: ({commit}, disabledAvailable) => commit('setDisabledAvailable', disabledAvailable),
}

export default  actions