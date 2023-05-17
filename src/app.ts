import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

import userRoutes from './app/modules/user/user.route'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/user', userRoutes );

export default app;

