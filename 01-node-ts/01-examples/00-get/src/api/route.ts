import controller from './controller';
import express from 'express';

let route = {
    books: (app: express.Application) => {
        app.route('/books')
            .get(controller.books);
    }    
};

export default route;
