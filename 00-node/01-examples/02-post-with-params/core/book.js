'use strict'

let book = {
    buyBook: (id, quantity) => {

        let purchaseInfo = `{"id": "${id}", "quantity":"${quantity}"}`; 
        
        return purchaseInfo;
    }
};

module.exports = book;