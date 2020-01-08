'use strict'
const controller = require('./controller');

let route = (app) => {    
    app.route('/books')
        .get(controller.books);
};

module.exports = route;
