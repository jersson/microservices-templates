'use strict'
const book = require('./book');

let facade = {
    getAllBooks: (req, res) => {
        let books = book.getAllBooks();

        res.send(books);
    }
};

module.exports = facade;