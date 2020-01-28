import core from '../core/book';
import { Request, Response} from 'express';

let controller = {
    books: (req: Request, res: Response) => {
        let allBooks = core.getAllBooks();
        res.send(allBooks);
    }
};

export default controller;