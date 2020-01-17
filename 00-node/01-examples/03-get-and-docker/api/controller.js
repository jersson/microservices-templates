'use strict'
const core = require('../core/book');

let controller = {
    books: (req, res) => {
        let allBooks = core.getAllBooks();

        res.send(allBooks);
    }
};

module.exports = controller;