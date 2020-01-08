'use strict'
const book = require('../core/facade');

let controller = {
    books: (req, res, next) => {
        book.getAllBooks(req, res, (books) => {
            if (error) return next(error);
            res.json(books);
        });
    }
};

module.exports = controller;