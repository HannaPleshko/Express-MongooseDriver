import { iTask } from '@/interface/index';
import { createTaskDB, getTaskDB, deleteTaskDB, updateTaskDB } from '@/repository/task.repository';
import { ExceptionType } from '@/exceptions/exceptions.type';
import { HttpException } from '@/exceptions/HttpException';

async function createTask(task: iTask): Promise<void> {
  await createTaskDB(task);
}

async function getTask(): Promise<iTask[]> {
  const tasks = await getTaskDB();
  if (!tasks.length) throw new HttpException(404, ExceptionType.TASKS_READ_NOT_FOUND);
  return tasks;
}

async function deleteTask(_id: string): Promise<void> {
  await deleteTaskDB(_id);
}

async function updateTask(_id: string, task: iTask): Promise<void> {
  await updateTaskDB(_id, task);
}

export { getTask, createTask, deleteTask, updateTask };
