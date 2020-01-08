'use strict'
const information = require('./information')

let facade = {
    getDetails: (req, res) => {
        let details = information.getDetails();
        
        res.send(details);
    }
};

module.exports = facade;