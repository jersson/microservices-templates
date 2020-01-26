import { Response } from 'express';
import ExpressError from './expressError';

let errorHandler = {
    sendToConsole: (err: ExpressError) => {
        console.log(`timestamp: ${new Date().toLocaleString()}`);
        console.log(`status: ${err.status}`);
        console.log('type: error');
        console.log(`message: ${err.messageToConsole}`);
        console.log(`stack: ${err.stack}`);
    },

    sendHttpResponse: (res: Response, err: ExpressError) => {
        res.status(err.status);
        res.send({
            status:`${err.status}`,
            message: 'internal error',
            type:'internal'
        });
    }
};

export default errorHandler;