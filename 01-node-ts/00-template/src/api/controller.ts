import core from '../core/information';
import { Request, Response} from 'express';

let controller = {
    about: (req: Request, res: Response) => {
        let details = core.information.getDetails();
        res.send(details);
    }
};

export default controller;