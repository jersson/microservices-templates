'use strict'
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const route = require('./api/route');

route(app);

app.use( (err, req, res, next) => {

    let statusCode = err.status || 500;
    let message = err.message;

    if (err.message === 'bad-request') {
        message = 'Bad request';
        statusCode = 400;    
    } 

    console.log(`timestamp: ${new Date().toLocaleString()}`);
    console.log(`type: error`);
    console.log(`message: ${message}`);
    console.log(`stack: ${err.stack}`);

    res.status(statusCode);
    res.send({
        status:`${statusCode}`, 
        message: 'internal error', 
        type:'internal'
    }); 
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
