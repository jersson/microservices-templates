'use strict'
const book = require('../core/facade');

let controller = {
    buyBook: (req, res) => {
        book.buyBook(req, res, (purchaseInfo) => {
            res.json(purchaseInfo);
        });
    }
};

module.exports = controller;