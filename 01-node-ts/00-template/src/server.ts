import express from 'express';
import mapping from './api/route';

const app = express();
const port = process.env.PORT || 3000;

mapping.route.about(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})


//how to run?  : npm start
//how to test? : curl localhost:3000/about
//:)