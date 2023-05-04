import express, { Request, Response } from "express";
import {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../service/user.service";

const route = express.Router();

route.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send(await getUser());
  } catch (err) {
    if (err instanceof Error) {
      console.error("An error occurred:", err.message);
      res.status(503).send(err.message);
    }
  }
});

route.post("/", async (req: Request, res: Response) => {
  try {
    const { name, surname, age, role } = req.body;
    await createUser(name, surname, age, role);
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
    await deleteUser(_id);
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
    const { name, surname, age, role } = req.body;
    await updateUser(_id, name, surname, age, role);
    res.status(200).send("SUCCESS");
  } catch (err) {
    if (err instanceof Error) {
      console.error("An error occurred:", err.message);
      res.status(503).send(err.message);
    }
  }
});

export = route;
