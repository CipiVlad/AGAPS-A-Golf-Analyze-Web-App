"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const port = 3000 || process.env.PORT;
const db_1 = __importDefault(require("./config/db"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//add course info to table
app.post('/course-info', (req, res) => {
    const timestamp = Date.now();
    const formattedTimestamp = new Date(timestamp).toISOString().replace('T', ' ').split('.')[0];
    const { course, round } = req.body;
    const query = `INSERT INTO courseInfo (course, round, formattedTimestamp) VALUES (?, ?, ?)`;
    db_1.default.query(query, [course, round, formattedTimestamp], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
//create a new table inside of courseInfo where column roundId of agapsTabel matches column id of courseInfo
app.post('/agaps', (req, res) => {
    const { hole, par, score, fairway, green, approach, penalty, putts, roundId } = req.body;
    const query = `INSERT INTO agapsTable (hole, par, score, fairway, green, approach, penalty, putts, roundId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db_1.default.query(query, [hole, par, score, fairway, green, approach, penalty, putts, roundId], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
// get agaps-round by id with courseInfo matching roundId
app.get('/agaps/:id', (req, res) => {
    const { id } = req.params;
    //get courseInfo by id concatenated with agapsTable by roundId
    const query = `SELECT agapsTable.*, courseInfo.* FROM courseInfo INNER JOIN agapsTable ON courseInfo.id = agapsTable.roundId WHERE courseInfo.id = ?`;
    db_1.default.query(query, [id], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
//get all courseInfo
app.get('/course-info', (req, res) => {
    const query = `SELECT * FROM courseInfo`;
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
// delete courseInfo and agapsTable by id
app.delete('/course-info/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM courseInfo WHERE id = ?`;
    db_1.default.query(query, [id], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
// listener
app.listen(3000, () => {
    console.log(`The application is listening on ${port}!`);
});
