'use strict'
const express = require('express');
const body_parser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const route = require('./api/route');

app.use(body_parser.json());

route(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
