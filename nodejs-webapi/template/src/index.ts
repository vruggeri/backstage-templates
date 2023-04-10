// import * as express from 'express';
import { Request, Response } from 'express';
import express = require('express');

const app = express();
const { PORT = 5000, } = process.env;

app.get('/', (req: Request, res: Response) => {
    res.send({
        message: 'Hello World from {{ cookiecutter.name }}!',
    });
});

app.listen(PORT, () => {
    console.log('Server started at http://localhost:' + PORT);
});