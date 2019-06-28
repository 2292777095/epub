const bookStore = {
    toggle: state => state.bookStore.toggle,
    currentBook: state => state.bookStore.currentBook,
    theme: state => state.bookStore.theme,
    disabledAvailable: state => state.bookStore.disabledAvailable,
}

export default  bookStore