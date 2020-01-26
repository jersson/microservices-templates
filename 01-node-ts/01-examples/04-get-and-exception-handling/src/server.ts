import express from 'express';
import { Request, Response } from 'express';
import route from './api/route';
import errorHandler from '../tools/diagnostics/error/errorHandler';
import ExpressError from '../tools/diagnostics/error/expressError';

const app = express();
const port = process.env.PORT || 3000;

route.books(app);

app.use((err: ExpressError, req: Request, res: Response, next: express.NextFunction) => {

    err.status = err.status || 500;

    if (err.message === 'bad-request') {
        err.messageToConsole = 'Bad request';
        err.status = 400;
    }
    
    errorHandler.sendToConsole(err);
    errorHandler.sendHttpResponse(res, err);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});