'use strict'
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const route = require('./api/route');

route(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
