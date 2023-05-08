import express, { Request, Response, NextFunction } from 'express';
import { createUser, getUser, deleteUser, updateUser } from '@/service/user.service';
import { buildResponse } from '@/helper/response';
import { SuccessType } from '@/exceptions/exceptions.type';

const route = express.Router();

route.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    buildResponse(res, 200, await getUser());
  } catch (error) {
    next(error);
  }
});

route.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createUser(req.body);
    buildResponse(res, 201, SuccessType.USERS_SUCCESS.message);
  } catch (error) {
    next(error);
  }
});

route.delete('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.params;
    await deleteUser(_id);
    buildResponse(res, 200, SuccessType.USERS_SUCCESS.message);
  } catch (error) {
    next(error);
  }
});

route.put('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.params;
    await updateUser(_id, req.body);
    buildResponse(res, 200, SuccessType.USERS_SUCCESS.message);
  } catch (error) {
    next(error);
  }
});

export = route;
