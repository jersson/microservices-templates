'use strict'
const book = require('../service/book');

let controller = {
    books: (req, res) => {
        book.getAllBooks(req, res, (books) => {
            res.json(books);
        });
    }
};

module.exports = controller;