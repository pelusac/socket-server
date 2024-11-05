"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const environment_1 = require("./gobal/environment");
const router_1 = require("./routes/router");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server = server_1.default.instance;
//BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//Cors
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
server.app.use('/', router_1.router);
server.start(() => {
    console.log(`servidor corriendo en el puerto ${environment_1.SERVER_PORT}`);
});
