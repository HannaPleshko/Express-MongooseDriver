import { iTask, iUser } from '@/interface/index';
import { Response } from 'express';

type message = string | iUser[] | iUser | iTask | iTask[];

const buildResponse = (res: Response, status: number, message: message): void => {
  res.status(status);
  res.send(message);
};

export { buildResponse };
