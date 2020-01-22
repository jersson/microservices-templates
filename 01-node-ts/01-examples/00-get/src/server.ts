import express from 'express';
import route from './api/route';

const app = express();
const port = process.env.PORT || 3000;

route.books(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});