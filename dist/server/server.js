"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = 8080;
class App {
    constructor(port) {
        this.port = port;
        const app = express_1.default();
        app.use(body_parser_1.default.json());
        app.use(body_parser_1.default.urlencoded({ extended: true }));
        app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
        app.use('/jquery', express_1.default.static(path_1.default.join(__dirname, '../../node_modules/jquery/dist/')));
        app.use('/api/todos', routes_1.default);
        this.server = new http_1.default.Server(app);
    }
    Start() {
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}
new App(port).Start();
//# sourceMappingURL=server.js.map