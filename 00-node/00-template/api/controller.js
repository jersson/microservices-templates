'use strict'
const properties = require('../package.json');
const information = require('../core/facade');

let controller = {
    about: (req, res) => {
        information.getDetails(req, res, (details) => {
            res.json(details);
        });
    }
};

module.exports = controller;