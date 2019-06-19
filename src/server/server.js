import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from '@koa/cors';
import { APP_PORT } from '../config';
import { setup as setupRethinkDB } from '../rethinkdb';
import { routes } from './routes';

const server = async () => {
    const app = new Koa();

    await setupRethinkDB();

    app.use(logger());
    app.use(cors());
    app.use(bodyParser());

    // Setup routes
    routes(app);

    app.listen(APP_PORT);

    console.info(`Started server on port ${APP_PORT}`);

    return app;
};

export const app = server();
