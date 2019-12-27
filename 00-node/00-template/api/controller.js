'use strict'
const properties = require('../package.json');
const information = require('../service/information');

let controllers = {
    about: (req, res) => {
        information.getDetails(req, res, (details) => {
            res.json(details);
        });
    }
};

module.exports = controllers;