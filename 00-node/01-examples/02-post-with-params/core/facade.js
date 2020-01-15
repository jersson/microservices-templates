'use strict'
const book = require('./book');

let facade = {
    buyBook: (req, res) => {
        let bookId = req.body.bookId;
        let bookQuantity = req.body.bookQuantity;

        let purchaseInfo = book.buyBook(bookId, bookQuantity); 
        
        res.setHeader('Content-Type', 'application/json');
        res.send(purchaseInfo);
    }
};

module.exports = facade;