import express, { Application, Request, Response } from 'express';
import userRoute from "./routes/user"

require('dotenv').config()
const app: Application = express();

const PORT: any = process.env.PORT || 6969;

app.use('/', userRoute);

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});