import * as express from 'express';
import * as http from 'http';
import { config } from './config/ServerConfig';
import * as DBManager from './utils/firebaseManager';
import * as DBlistener from './helpers/DbListener';

export class Server {
    app: express.Application;
    private server: http.Server;
    static bootstrap(): Server {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.server.listen(config.port, () => {
            console.log(`Server running on port ${config.port}`);
        });
        DBlistener.listener(DBManager.collectionRef);
    }
    close() {
        this.server.close();
    }
}

const server : Server = new Server();
