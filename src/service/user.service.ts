import { iUser } from "../interface/index";
import {
  createUserDB,
  getUsersDB,
  deleteUserDB,
  updateUserDB,
} from "../repository/user.repository";

async function createUser(name, surname, age, role): Promise<void> {
  await createUserDB(name, surname, age, role);
}
async function getUser(): Promise<iUser[]> {
  return await getUsersDB();
}
async function deleteUser(_id): Promise<void> {
  await deleteUserDB(_id);
}
async function updateUser(_id, name, surname, age, role): Promise<void> {
  await updateUserDB(_id, name, surname, age, role);
}

export { getUser, createUser, deleteUser, updateUser };
