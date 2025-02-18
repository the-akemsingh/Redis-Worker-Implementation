"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const redisClient = (0, redis_1.createClient)();
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = req.body;
        yield redisClient.lPush("message", JSON.stringify(message));
        res.send({ message: "done" });
    }
    catch (e) {
        console.log(e);
    }
}));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield redisClient.connect();
        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    });
}
startServer();
