'use strict'
const properties = require('../package.json');

let information = {
    getDetails: () => {
        let details = {
            name: properties.name, 
            version: properties.version,
            author: properties.author, 
            source: properties.source,
            license: properties.license
        };
        
        return details;
    }
};

module.exports = information;