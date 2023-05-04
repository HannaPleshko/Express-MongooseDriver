import { Collections, ObjectId } from "../db";
import { iUser } from "../interface/index";

async function createUserDB(name, surname, age, role): Promise<void> {
  const newUser = new Collections.User({ name, surname, age, role });
  newUser.save();
}

async function getUsersDB(): Promise<iUser[]> {
  return await Collections.User.find({});
}

async function deleteUserDB(_id): Promise<void> {
  await Collections.User.deleteOne({ _id: new ObjectId(_id) });
}

async function updateUserDB(_id, name, surname, age, role): Promise<void> {
  await Collections.User.updateOne(
    { _id: new ObjectId(_id) },
    { name, surname, age, role }
  );
}

export { createUserDB, getUsersDB, deleteUserDB, updateUserDB };
