'use strict'
const controller = require('./controller');

let route = (app) => {    
    app.route('/about')
        .get(controller.about);
};

module.exports = route;
