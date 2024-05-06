const express = require('express');
import { Request, Response } from 'express';
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const port = 3000 || process.env.PORT;
import db from './config/db';

dotenv.config();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//add course info to table
app.post('/course-info', (req: Request, res: Response) => {
    const timestamp = Date.now();
    const formattedTimes = new Date(timestamp).toISOString().replace('T', ' ').split('.')[0];
    const { course, round, courseId } = req.body;

    const query = `INSERT INTO courseInfo (courseId, course, round, formattedTimes) VALUES (?, ?, ? , ?)`;
    db.query(query, [courseId, course, round, formattedTimes], (err: any, data: any) => {
        if (err) {
            return res.json(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

app.post('/agaps', (req: Request, res: Response) => {
    const getCourseId = `SELECT courseInfo.courseId FROM courseInfo`;

    let { hole, par, score, fairway, green, approach, penalty, putts, roundId = getCourseId } = req.body;

    // insert into agapsTable all fields and set roundId to courseInfo.courseId

    const query = `INSERT INTO agapsTable (hole, par, score, fairway, green, approach, penalty, putts, roundId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [hole, par, score, fairway, green, approach, penalty, putts, roundId, getCourseId], (err: any, data: any) => {
        if (err) {
            return res.json(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })


})

// get agaps round by roundId
app.get('/agaps/:id', (req: Request, res: Response) => {

    const { id } = req.params;
    const query = `SELECT * FROM agapsTable WHERE roundId = ? LIMIT 1`;
    db.query(query, [id], (err: any, data: any) => {
        if (err) {
            return res.json(err);
        } else if (data.length > 0) {
            console.log(data[0]);
            return res.json(data[0]);
        } else {
            return res.json({ message: 'No data found' });
        }
    })
})

app.get('/agaps', (req: Request, res: Response) => {

    const query = `SELECT * FROM agapsTable`;
    db.query(query, (err: any, data: any) => {
        if (err) {
            return res.json(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

//get all courseInfo
app.get('/course-info', (req: Request, res: Response) => {
    const query = `SELECT * FROM courseInfo`;
    db.query(query, (err: any, data: any) => {
        if (err) {
            return res.json(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

// delete courseInfo and agapsTable by id
app.delete('/course-info/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const query = `DELETE FROM courseInfo WHERE id = ?`;
    db.query(query, [id], (err: any, data: any) => {
        if (err) {
            return res.json(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})


// listener

app.listen(3000, () => {
    console.log(`The application is listening on ${port}!`);
})