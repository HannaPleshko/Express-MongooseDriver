import mongoose from "mongoose";
import { UserSchema, TaskSchema } from "./db.schemas/schemas";

mongoose
  .connect("mongodb://localhost:27017/hschool")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

const Collections = {
  User: mongoose.model("User", UserSchema),
  Task: mongoose.model("Task", TaskSchema),
};

const ObjectId = mongoose.Types.ObjectId;

export { Collections, ObjectId };
