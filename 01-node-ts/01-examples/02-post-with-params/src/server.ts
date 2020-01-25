import express from 'express';
import body_parser from 'body-parser';
import route from './api/route';

const app = express();
const port = process.env.PORT || 3000;

app.use(body_parser.json());
route.books(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});