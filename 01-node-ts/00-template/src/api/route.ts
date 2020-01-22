import controller from './controller';
import express from 'express';

let route = {
    about: (app: express.Application) =>{
        app.route('/about')
            .get(controller.about);
    }    
};

export default route;
