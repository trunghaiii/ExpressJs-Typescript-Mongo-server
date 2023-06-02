import express, { Application, Request, Response } from 'express';

require('dotenv').config()
const app: Application = express();

const PORT: any = process.env.PORT || 6969;

app.use('/', (req: Request, res: Response): void => {
    res.send('Hello world!11nodehuhu');
});

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});