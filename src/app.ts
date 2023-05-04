import express from "express";
import bodyParser from "body-parser";
import user from "./controller/user.controller";
import task from "./controller/task.controller";

const app = express();

app.use(bodyParser.json());

app.use("/user", user);
app.use("/task", task);

app.use((er, req, res, next) => res.send(er.message));

export = app;
