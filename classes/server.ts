
import express from 'express';
import { SERVER_PORT } from '../gobal/environment';
import socketIO from 'socket.io';
import http from 'http';

export default class Server{

    public app: express.Application;
    public port:number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    constructor( ){ 
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server( this.app );

    }

    start ( callback: any ){
        //this.app.listen( this.port, callback );
        this.httpServer.listen( this.port, callback );
    }
}    