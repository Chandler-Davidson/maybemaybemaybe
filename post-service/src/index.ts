import "reflect-metadata";

import express from "express";
import { createConnection } from "typeorm";
import { findNewPosts } from "./findPosts"

const app = express();
const port = 4000;
const connection = createConnection();

app.get("/", async (req, res) => {
  res.send(await findNewPosts(connection, 3))
});

app.listen(port, () => console.log(`Listening: ${port}`));
