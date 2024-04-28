const express = require('express');
import { Request, Response } from 'express';
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const port = 3000;
import db from './config/db';

dotenv.config();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.post('/', (req: Request, res: Response) => {
    const { hole, par, score, fairway, green, approach, penalty, putts } = req.body;
    const query = `INSERT INTO agapsTable (hole, par, score, fairway, green, approach, penalty, putts) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [hole, par, score, fairway, green, approach, penalty, putts], (err: any, data: any) => {
        if (err) {
            return res.json(err);
        } else {
            console.log(data);
            return res.json(data);
        }
    })
})

app.get('/', (req: Request, res: Response) => {
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


app.listen(3000, () => {
    console.log(`The application is listening on ${port}!`);
})