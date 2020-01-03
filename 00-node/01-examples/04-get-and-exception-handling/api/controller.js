'use strict'
const book = require('../service/book');

let controller = {
    books: (req, res, next) => {
        book.getAllBooks(req, res, (books) => {
            if (error) return next(error);
            res.json(books);
        });
    }
};

module.exports = controller;