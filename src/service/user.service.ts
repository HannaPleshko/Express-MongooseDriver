import { iUser } from '@/interface/index';
import { createUserDB, getUsersDB, deleteUserDB, updateUserDB } from '@/repository/user.repository';
import { ExceptionType } from '@/exceptions/exceptions.type';
import { HttpException } from '@/exceptions/HttpException';

async function createUser(user: iUser): Promise<void> {
  await createUserDB(user);
}

async function getUser(): Promise<iUser[]> {
  const users = await getUsersDB();
  if (!users.length) throw new HttpException(404, ExceptionType.USERS_READ_NOT_FOUND);
  return users;
}

async function deleteUser(_id: string): Promise<void> {
  await deleteUserDB(_id);
}

async function updateUser(_id: string, user: iUser): Promise<void> {
  await updateUserDB(_id, user);
}

export { getUser, createUser, deleteUser, updateUser };
