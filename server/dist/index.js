"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const port = 3000;
const db_1 = __importDefault(require("./config/db"));
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/', (req, res) => {
    const { hole, par, score, fairway, green, approach, penalty, putts } = req.body;
    const query = `INSERT INTO agapsTable (hole, par, score, fairway, green, approach, penalty, putts) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db_1.default.query(query, [hole, par, score, fairway, green, approach, penalty, putts], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
app.get('/', (req, res) => {
    const query = `SELECT * FROM agapsTable`;
    db_1.default.query(query, (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
app.listen(3000, () => {
    console.log(`The application is listening on ${port}!`);
});
