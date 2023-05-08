import { Collections, ObjectId } from '../db';
import { iTask } from '@/interface/index';

async function createTaskDB(task: iTask): Promise<void> {
  const newUser = new Collections.Task({ ...task });
  newUser.save();
}

async function getTaskDB(): Promise<iTask[]> {
  return await Collections.Task.find({});
}

async function deleteTaskDB(_id: string): Promise<void> {
  await Collections.Task.deleteOne({ _id: new ObjectId(_id) });
}

async function updateTaskDB(_id: string, task: iTask): Promise<void> {
  await Collections.Task.updateOne({ _id: new ObjectId(_id) }, { ...task });
}

export { createTaskDB, getTaskDB, deleteTaskDB, updateTaskDB };
