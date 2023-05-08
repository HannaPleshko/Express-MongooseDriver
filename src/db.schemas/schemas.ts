import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  age: { type: Number },
  role: { type: String },
});

export const TaskSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  tasks: { type: Array },
});
