import core from '../core/book';
import { Request, Response} from 'express';

let controller = {
    getBook: (req: Request, res: Response) => {
        let bookId = req.params.id;
        let filteredBook = core.getBook(bookId);
        res.send(filteredBook);
    }
};

export default controller;