'use strict'
const book = require('./book');

let facade = {
    getBook: (req, res) => {
        let bookId = req.params.id;
        let filteredBook = book.getBook(bookId);

        res.send(filteredBook);
    }
};

module.exports = facade;