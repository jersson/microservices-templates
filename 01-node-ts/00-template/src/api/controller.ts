import core from '../core/information';
import { Request, Response} from 'express';

let controller = {
    about: (req: Request, res: Response) => {
        let details = core.getDetails();
        res.send(details);
    }
};

export default controller;