import "reflect-metadata";

import express from "express";
import cors from "cors";
import { findNewPosts } from "./findPosts"
import { createConnection } from "typeorm";

const app = express();
const port = 4000;
createConnection();

app.use(cors());

app.get("/", async (req, res) => {
  const posts = await findNewPosts(3);
  res.send(posts)
});

app.listen(port, () => console.log(`Listening: ${port}`));
