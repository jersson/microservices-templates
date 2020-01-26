import express from 'express';
import { Request, Response } from 'express';
import controller from './controller';

let route = {
    books: (app: express.Application) => {
        app.route('/books')
            .get(controller.books);
        
        app.all('*', (req: Request, res: Response) => {
            throw new Error('bad-request');
        })
    }    
};

export default route;
