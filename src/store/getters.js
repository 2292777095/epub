const bookStore = {
    toggle: state => state.bookStore.toggle,
    currentBook: state => state.bookStore.currentBook,
    theme: state => state.bookStore.theme,
    fontSize: state => state.bookStore.fontSize,
    bookName: state => state.bookStore.bookName,
    bookLoading: state => state.bookStore.bookLoading,
    cover: state => state.bookStore.cover,
    metadata: state => state.bookStore.metadata,
    navigation: state => state.bookStore.navigation,
    section: state => state.bookStore.section,
    offsetY: state => state.store.offsetY,
    flagCardVisibility: state => state.store.flagCardVisibility,
}

export default  bookStore