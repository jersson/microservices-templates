'use strict'
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const route = require('./api/route');

route(app);

app.use( (err, req, res, next) => {
    
    console.log(`timestamp: ${new Date().toLocaleString()}`);
    console.log(`type: error`);
    console.log(`message: ${err.message}`);
    console.log(`stack: ${err.stack}`);

    res.status(err.status || 500);
    res.send({
        status:`${res.statusCode}`, 
        message: 'internal error', 
        type:'internal'
    }); 
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
