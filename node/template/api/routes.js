'use strict'
const controller = require('./controller');

let routes = (app) => {    
    app.route('/about')
        .get(controller.about);
};

module.exports = routes;
