const Media = require('./Media');

class Book extends Media {
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    static highestRating(bookItems) {
        let highest = 0;
        let idx = 0;
        bookItems.forEach((book, i) => {
            if(book.rating > highest) {
                highest = book.rating;
                idx = i;
            };
        });

        return bookItems[idx];
    };

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    };
};

module.exports = Book;
