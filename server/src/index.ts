const express = require('express');
import { Request, Response } from 'express';
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const port = 3000;
import db from './config/db.ts';

dotenv.config();
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    const query = `SELECT * FROM agapsTable`;
    db.query(query, (err: any, data: any) => {
        if (err) {
            return res.json(err);
        } else {
            return res.json(data);
        }
    })


})


app.listen(3000, () => {
    console.log(`The application is listening on ${port}!`);
})