import Server1 from "./classes/server";
import { SERVER_PORT } from "./gobal/environment";
import { router } from "./routes/router";

import bodyParser from "body-parser";
import cors from 'cors';

const server = new Server1();

//BodyParser

server.app.use( bodyParser.urlencoded({extended:true}));
server.app.use( bodyParser.json());

//Cors

server.app.use( cors ({ origin: true, credentials: true }));

server.app.use('/', router );

server.start(() =>{
    console.log(`servidor corriendo en el puerto ${SERVER_PORT}`);
} )

