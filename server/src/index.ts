const express = require('express');
const app = express();
import dotenv from 'dotenv';
const cors = require('cors');

app.use(cors());
dotenv.config();
import { Request, Response } from 'express';

app.get('/', (req: Request, res: Response) => {
    res.send('Well done!');
})

app.get('/test', (req: Request, res: Response) => {
    type Test = [
        {
            name: string
        },
        {
            name: string
        }
    ]
    const obj: Test = [
        { name: 'test' },
        { name: 'test2' }
    ]
    res.json(obj)
})


app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})