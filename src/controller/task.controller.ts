import express, { Request, Response, NextFunction } from 'express';
import { createTask, getTask, deleteTask, updateTask } from '@/service/task.service';
import { buildResponse } from '@helper/response';
import { SuccessType } from '@/exceptions/exceptions.type';

const route = express.Router();

route.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    buildResponse(res, 200, await getTask());
  } catch (error) {
    next(error);
  }
});

route.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = req.body;
    await createTask(task);
    buildResponse(res, 201, SuccessType.TASKS_SUCCESS.message);
  } catch (error) {
    next(error);
  }
});

route.delete('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.params;
    await deleteTask(_id);
    buildResponse(res, 200, SuccessType.TASKS_SUCCESS.message);
  } catch (error) {
    next(error);
  }
});

route.put('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { _id } = req.params;
    await updateTask(_id, req.body);
    buildResponse(res, 200, SuccessType.TASKS_SUCCESS.message);
  } catch (error) {
    next(error);
  }
});

export default route;
