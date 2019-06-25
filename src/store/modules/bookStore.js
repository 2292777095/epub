const bookStore = {
    state: {
        toggle: 0,
        currentBook: {},
        currentRendition: {}
    },
    mutations: {
        'setToggle': (state, toggle) => state.toggle = toggle,
        'setBook': (state, currentBook) => state.currentBook = currentBook,
        'setRendition': (state, currentRendition) => state.currentRendition = currentRendition,
    }
};

export default bookStore;