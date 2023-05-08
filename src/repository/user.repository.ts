import { Collections, ObjectId } from '../db';
import { iUser } from '@/interface/index';

async function createUserDB(user: iUser): Promise<void> {
  const newUser = new Collections.User({ ...user });
  newUser.save();
}

async function getUsersDB(): Promise<iUser[]> {
  return await Collections.User.find({});
}

async function deleteUserDB(_id: string): Promise<void> {
  await Collections.User.deleteOne({ _id: new ObjectId(_id) });
}

async function updateUserDB(_id: string, user: iUser): Promise<void> {
  await Collections.User.updateOne({ _id: new ObjectId(_id) }, { ...user });
}

export { createUserDB, getUsersDB, deleteUserDB, updateUserDB };
