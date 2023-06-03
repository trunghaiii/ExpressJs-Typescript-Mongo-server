require('dotenv').config()
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';

import userRoute from "./routes/user"
import mongooseConnection from "./config/mongoose"

const app: Application = express();
const PORT: any = process.env.PORT || 6969;

app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', userRoute);

app.listen(PORT, async () => {
    await mongooseConnection()
    console.log('SERVER IS UP ON PORT:', PORT);
});