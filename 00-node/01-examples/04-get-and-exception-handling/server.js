'use strict'
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const route = require('./api/route');
const errorHandler = require('./tools/diagnostics/errorHandler');

route(app);

app.use((err, req, res, next) => {

    let status = err.status || 500;
    let message = err.message;

    if (err.message === 'bad-request') {
        message = 'Bad request';
        status = 400;    
    } 

    errorHandler.sendToConsole(err, status, message);
    errorHandler.sendHttpResponse(res, status);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
