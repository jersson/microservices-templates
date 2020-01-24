import controller from './controller';
import express from 'express';

let route = {
    books: (app: express.Application) => {
        app.route('/books/:id')
            .get(controller.getBook);
    }    
};

export default route;
