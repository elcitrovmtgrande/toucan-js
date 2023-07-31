"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Toucan_1 = __importDefault(require("../toucan/Toucan"));
const PORT = 23000;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    const toucan = new Toucan_1.default('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaXJkIjoidG91Y2FuICIsImlhdCI6MTY5MDgwNzgyMSwiZXhwIjoxNjkwODA3ODgxfQ.sOmfeSISouPnfVW1wtR8xjGv9U7U1L-8zeTPBcILrBc', { expiresIn: 60 });
    console.log(toucan.getToken());
    console.log('isJWT:', toucan.isJWT());
    console.log('isValid:', toucan.isValid());
    res.send('Hello Toucan!');
});
app.listen(PORT, () => {
    console.log(`Toucan's server listening on port ${PORT}`);
});
