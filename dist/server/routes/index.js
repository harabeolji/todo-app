"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = __importDefault(require("./helpers/todos"));
const router = express_1.default.Router();
router.route('/')
    .get(todos_1.default.getTodos)
    .post(todos_1.default.createTodo);
router.route('/:todoId')
    .get(todos_1.default.getTodo)
    .put(todos_1.default.updateTodo)
    .delete(todos_1.default.deleteTodo);
exports.default = router;
//# sourceMappingURL=index.js.map