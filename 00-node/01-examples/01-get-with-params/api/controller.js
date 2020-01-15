'use strict'
const book = require('../core/facade');

let controller = {
    getBook: (req, res) => {
        book.getBook(req, res, (books) => {
            res.json(books);
        });
    }
};

module.exports = controller;