'use strict'
const core = require('../core/book');

let controller = {
    getBook: (req, res) => {
        let bookId = req.params.id;
        let filteredBook = core.getBook(bookId);

        res.send(filteredBook);
    }
};

module.exports = controller;