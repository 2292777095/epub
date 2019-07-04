const bookStore = {
    state: {
        toggle: 0,
        currentBook: {},
        theme: 'default',
        fontSize: 16,
        bookName: '',
        bookLoading: true,
        cover: "",
        metadata: null,
        navigation: null,
        section: null,
        distance: 0,
        showIconMark: true
    },
    mutations: {
        'setToggle': (state, toggle) => state.toggle = toggle,
        'setBook': (state, currentBook) => state.currentBook = currentBook,
        'setTheme': (state, theme) => state.theme = theme,
        'setFontSize': (state, fontSize) => state.fontSize = fontSize,
        'setBookName': (state, bookName) => state.bookName = bookName,
        'setBookLoading': (state, bookLoading) => state.bookLoading = bookLoading,
        'setCover': (state, cover) => state.cover = cover,
        'setMetadata': (state, metadata) => state.metadata = metadata,
        'setNavigation': (state, navigation) => state.navigation = navigation,
        'setSection': (state, section) => state.section = section,
        'setDistance': (state, distance) => state.distance = distance,
        'setShowIconMark': (state, showIconMark) => state.showIconMark = showIconMark,
    }
};

export default bookStore;