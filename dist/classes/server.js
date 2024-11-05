"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../gobal/environment");
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
class Server1 {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = new socket_io_1.Server(this.httpServer);
    }
    start(callback) {
        //this.app.listen( this.port, callback );
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Server1;
//Uso esta estructura ya que la nueva versión de SocketIO funciona así
/* import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server); */ 
