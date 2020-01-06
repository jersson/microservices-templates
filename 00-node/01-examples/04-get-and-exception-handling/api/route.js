'use strict'
const controller = require('./controller');

let route = (app) => {    
    app.route('/books')
        .get(controller.books);
    
    app.all('*', function(req, res) {
        throw new Error('bad-request');
    });
};

module.exports = route;
