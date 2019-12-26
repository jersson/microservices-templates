const properties = require('../package.json');

let information = {
    getDetails: (req, res) => {
        let details = {
            name: properties.name, 
            version: properties.version,
            author: properties.author, 
            source: properties.source,
            license: properties.license
        };
        res.send(details);   
    }
};

module.exports = information;