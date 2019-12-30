'use strict'
const controller = require('./controller');

let route = (app) => {    
    app.route('/books/:id')
        .get(controller.getBook);
};

module.exports = route;
