const actions = {
    setToggle: ({commit}, toggle) => commit('setToggle', toggle),
    setBook: ({commit}, currentBook) => commit('setBook', currentBook),
    setTheme: ({commit}, theme) => commit('setTheme', theme),
    setFontSize: ({commit}, fontSize) => commit('setFontSize', fontSize),
    setBookName: ({commit}, bookName) => commit('setBookName', bookName),
    setBookLoading: ({commit}, bookLoading) => commit('setBookLoading', bookLoading),
    setCover: ({commit}, cover) => commit('setCover', cover),
    setMetadata: ({commit}, metadata) => commit('setMetadata', metadata),
    setNavigation: ({commit}, navigation) => commit('setNavigation', navigation),
}

export default  actions