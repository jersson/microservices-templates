'use strict'
const core = require('../core/book');

let controller = {
    buyBook: (req, res) => {
        let bookId = req.body.bookId;
        let bookQuantity = req.body.bookQuantity;

        let purchaseInfo = core.buyBook(bookId, bookQuantity); 
        
        res.setHeader('Content-Type', 'application/json');
        res.send(purchaseInfo);
    }
};

module.exports = controller;