
import express from 'express';
import { SERVER_PORT } from '../gobal/environment';
import socketIO from 'socket.io';
import http from 'http';
import { Server } from "socket.io"

export default class Server1{

    public app: express.Application;
    public port:number;

    public io!: socketIO.Server;
    private httpServer: http.Server;

    constructor( ){ 
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server( this.app );
        this.io = new Server( this.httpServer );


    }

    start ( callback: any ){
        //this.app.listen( this.port, callback );
        this.httpServer.listen( this.port, callback );
    }
}    
//Uso esta estructura ya que la nueva versión de SocketIO funciona así
/* import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server); */