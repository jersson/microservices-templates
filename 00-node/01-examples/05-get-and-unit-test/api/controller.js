'use strict'
const book = require('../service/facade');

let controller = {
    books: (req, res) => {
        book.getAllBooks(req, res, (books) => {
            res.json(books);
        });
    }
};

module.exports = controller;