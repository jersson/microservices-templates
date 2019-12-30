'use strict'

let book = {
    buyBook: (req, res) => {

        let bookId = req.body.bookId;
        let bookQuantity = req.body.bookQuantity;

        let purchaseInfo = `{"id": "${bookId}", "quantity":"${bookQuantity}"}`; 
        
        res.setHeader('Content-Type', 'application/json'); //TODO: Check where's the best place to this line
        res.send(purchaseInfo);
    }
};

module.exports = book;