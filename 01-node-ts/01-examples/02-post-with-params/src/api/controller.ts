import core from '../core/book';
import { Request, Response} from 'express';

let controller = {
    buyBook: (req: Request, res: Response) => {
        let bookId = req.body.bookId;
        let bookQuantity = req.body.bookQuantity;

        let purchaseInfo = core.buyBook(bookId, bookQuantity);

        res.setHeader('Content-Type', 'application/json');
        res.send(purchaseInfo);
    }
};

export default controller;