import controller from './controller';
import express from 'express';

let route = {
    books: (app: express.Application) => {
        app.route('/checkout/books')
        .post(controller.buyBook);
    }    
};

export default route;
