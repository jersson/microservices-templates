'use strict'
const core = require('../core/book');

let controller = {
    books: (req, res, next) => {
        let allBooks = core.getAllBooks();
        
        if (error) return next(error);
        res.send(allBooks);
    }
};

module.exports = controller;