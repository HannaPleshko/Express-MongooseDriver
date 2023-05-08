import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import user from '@controller/user.controller';
import task from '@controller/task.controller';
import cors from 'cors';
import { HttpException } from '@exceptions/HttpException';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/user', user);
app.use('/task', task);

app.use((error: HttpException, req: Request, res: Response, next: NextFunction) => {
  const status: number = error.status || 500;
  const message: string = error.message || 'Something went wrong';
  const id: number = error.id || 0;

  res.status(status).send({ id, message });
});

export default app;
