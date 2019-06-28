import Storage from "web-storage-cache"

const localStorage = new Storage()

export function setLocalStorage(key, val) {
    return localStorage.set(key, val)
}

export function getLocalStorage(key) {
    return localStorage.get(key)
}

export const bookLocalStorage = {
    setBookInfo(bookName, key, val) {
        let book = getLocalStorage(bookName)
        if(!book) {
            book = {}
        }
        book[key] = val
        setLocalStorage(bookName, book)
    },
    getBookInfo(bookName, key) {
        const book = getLocalStorage(bookName)
        return book ? book[key] : null
    },
    setBookInfoFontSize(bookName, fontSize) {
        this.setBookInfo(bookName, 'fontSize', fontSize)
    },
    setBookInfoTheme(bookName, theme) {
        this.setBookInfo(bookName, 'theme', theme)
    }
}