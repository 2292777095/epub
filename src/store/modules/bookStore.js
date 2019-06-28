const bookStore = {
    state: {
        toggle: 0,
        currentBook: {},
        theme: 'default',
        disabledAvailable: true
    },
    mutations: {
        'setToggle': (state, toggle) => state.toggle = toggle,
        'setBook': (state, currentBook) => state.currentBook = currentBook,
        'setTheme': (state, theme) => state.theme = theme,
        'setDisabledAvailable': (state, disabledAvailable) => state.progress = disabledAvailable,
    }
};

export default bookStore;