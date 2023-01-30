//task1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name,
            this.releaseDate = releaseDate,
            this.pagesCount = pagesCount,
            this.state = 100,
            this.type = null
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book',
            this.author = author
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective'
    }
}

//task2
class Library {
    constructor(name = '') {
        this.name = name,
        this.books = []
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let foundBook = this.books.find(book => book[type] === value);
        if( foundBook === undefined){
            return null;
        } else {
            return foundBook;
        }
    }

    giveBookByName(bookName){
        let foundBook = this.books.findIndex(book => book.name === bookName);
        if( foundBook === -1){
            return null;    
        } else {
            let result = this.books.splice(foundBook, 1);
            return result[0];
        }
    }
}

//task3
class Student {
    constructor(name){
        this.name = name,
        this.marks = {}
    }

    addMark(score, theme){
        if(score < 2 || score > 5) {
            return;
        }
        if(!this.marks.hasOwnProperty(theme)){
            this.marks[theme] = [];
        }
        this.marks[theme].push(score);
    }

    getAverageBySubject(theme){
        if(!this.marks.hasOwnProperty(theme)){
            return 0;
        }
        let result = this.marks[theme].reduce((accumulator, score, index, array) => {
            accumulator += score;
            if(index === array.length - 1){
                return accumulator / array.length;
            }
            return accumulator;
         }, 0)
        return result;
    }

    getAverage(){
        let result = Object.keys(this.marks).reduce((accumulator, theme, index, array) => {
            accumulator += this.getAverageBySubject(theme);
            if(index === array.length - 1){
                return accumulator / array.length;
            }
            return accumulator;
        }, 0);
        return result;
    }
}