'use strict'
const controller = require('./controller');

let route = (app) => {    
    app.route('/checkout/books')
        .post(controller.buyBook);
};

module.exports = route;
