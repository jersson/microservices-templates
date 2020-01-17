//This is the post I read to build the first version of the template 
//https://blog.cloud66.com/beginners-guide-to-building-real-world-microservices-with-node-js/
//Thank you Mike :)

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./api/route');

route(app);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})