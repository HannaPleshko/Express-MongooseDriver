import { Collections, ObjectId } from "../db";
import { iTask } from "../interface/index";

async function createTaskDB(name, surname, tasks): Promise<void> {
  const newUser = new Collections.Task({ name, surname, tasks });
  newUser.save();
}

async function getTaskDB(): Promise<iTask[]> {
  return await Collections.Task.find({});
}

async function deleteTaskDB(_id): Promise<void> {
  await Collections.Task.deleteOne({ _id: new ObjectId(_id) });
}

async function updateTaskDB(_id, name, surname, tasks): Promise<void> {
  await Collections.Task.updateOne(
    { _id: new ObjectId(_id) },
    { name, surname, tasks }
  );
}

export { createTaskDB, getTaskDB, deleteTaskDB, updateTaskDB };
