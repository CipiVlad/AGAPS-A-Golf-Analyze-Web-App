"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const port = 3000 || process.env.PORT;
const db_1 = __importDefault(require("./config/db"));
dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
//add course info to table
app.post('/course-info', (req, res) => {
    const timestamp = Date.now();
    const formattedTimes = new Date(timestamp).toISOString().replace('T', ' ').split('.')[0];
    const { course, round, roundId } = req.body;
    const query = `INSERT INTO courseInfo (course, round, formattedTimes,roundId) VALUES (?, ?, ?, ?)`;
    db_1.default.query(query, [course, round, formattedTimes, roundId], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
//add agaps to table
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
// get agaps round by roundId
app.get('/agaps/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM agapsTable WHERE roundId = ? LIMIT 18`;
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
//get single agap by id
app.get('/single-agap/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM agapsTable WHERE id = ?`;
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
//update agaps round by roundId
app.put('/agaps/:id', (req, res) => {
    const { id } = req.params;
    const { hole, par, score, fairway, green, approach, penalty, putts } = req.body;
    const query = `UPDATE agapsTable SET hole = ?, par = ?, score = ?, fairway = ?, green = ?, approach = ?, penalty = ?, putts = ? WHERE id = ?`;
    db_1.default.query(query, [hole, par, score, fairway, green, approach, penalty, putts, id], (err, data) => {
        if (err) {
            return res.json(err);
        }
        else {
            console.log(data);
            return res.json(data);
        }
    });
});
// delete courseInfo and agapsTable by roundId
app.delete('/course-info/:id', (req, res) => {
    const { id } = req.params;
    //delete data from courseInfo and agapsTable by roundId
    const deleteQuery = `DELETE courseInfo, agapsTable FROM courseInfo JOIN agapsTable ON courseInfo.roundId = agapsTable.roundId WHERE courseInfo.roundId = ?`;
    db_1.default.query(deleteQuery, [id], (err, data) => {
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
