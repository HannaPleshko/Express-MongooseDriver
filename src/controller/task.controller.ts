import express, { Request, Response } from "express";
import {
  createTask,
  getTask,
  deleteTask,
  updateTask,
} from "../service/task.service";

const route = express.Router();

route.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await getTask());
  } catch (err) {
    if (err instanceof Error) {
      console.error("An error occurred:", err.message);
      res.status(503).send(err.message);
    }
  }
});

route.post("/", async (req: Request, res: Response) => {
  try {
    const { name, surname, tasks } = req.body;
    await createTask(name, surname, tasks);
    res.status(200).send("SUCCESS");
  } catch (err) {
    if (err instanceof Error) {
      console.error("An error occurred:", err.message);
      res.status(503).send(err.message);
    }
  }
});

route.delete("/:_id", async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    await deleteTask(_id);
    res.status(200).send("SUCCESS");
  } catch (err) {
    if (err instanceof Error) {
      console.error("An error occurred:", err.message);
      res.status(503).send(err.message);
    }
  }
});

route.put("/:_id", async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const { name, surname, tasks } = req.body;
    await updateTask(_id, name, surname, tasks);
    res.status(200).send("SUCCESS");
  } catch (err) {
    if (err instanceof Error) {
      console.error("An error occurred:", err.message);
      res.status(503).send(err.message);
    }
  }
});

export = route;
