const express = require('express');
import { Request, Response } from 'express';
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mysql = require('mysql');

app.use(cors());
dotenv.config();


const db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

app.get('/agaps', (req: Request, res: Response) => {
    const query = `SELECT * FROM agapsTable`;
    db.query(query, (err: any, data: any) => {
        if (err) {
            return res.json(err);
        } else {
            res.json(data);
        }
    })


})


app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})