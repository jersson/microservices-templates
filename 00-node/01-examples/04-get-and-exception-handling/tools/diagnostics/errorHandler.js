'use strict'

let errorHandler = {
    sendToConsole: (err, status, message) => {
        console.log(`timestamp: ${new Date().toLocaleString()}`);
        console.log(`status: ${status}`);
        console.log('type: error');
        console.log(`message: ${message}`);
        console.log(`stack: ${err.stack}`);
    }, 

    sendHttpResponse: (res, status) => {
        res.status(status);        
        res.send({
            status:`${status}`, 
            message: 'internal error', 
            type:'internal'
        }); 
    }
};

module.exports = errorHandler;