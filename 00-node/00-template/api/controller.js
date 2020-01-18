'use strict'
const core = require('../core/information');

let controller = {
    about: (req, res) => {
        let details = core.getDetails();
        res.send(details);
    }
};

module.exports = controller;