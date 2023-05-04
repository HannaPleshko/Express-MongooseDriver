import { iTask } from "../interface/index";
import {
  createTaskDB,
  getTaskDB,
  deleteTaskDB,
  updateTaskDB,
} from "../repository/task.repository";

async function createTask(name, surname, tasks): Promise<void> {
  await createTaskDB(name, surname, tasks);
}
async function getTask(): Promise<iTask[]> {
  return await getTaskDB();
}
async function deleteTask(_id): Promise<void> {
  await deleteTaskDB(_id);
}
async function updateTask(_id, name, surname, tasks): Promise<void> {
  await updateTaskDB(_id, name, surname, tasks);
}

export { getTask, createTask, deleteTask, updateTask };
