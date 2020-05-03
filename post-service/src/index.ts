import "reflect-metadata";

import express from "express";
import cors from "cors";
import { findNewPosts } from "./findPosts"
import { createConnection } from "typeorm";

const app = express();
const port = 4000;

app.use(cors());

app.get("/", async (req, res) => {
  try {
    createConnection();
    const posts = await findNewPosts(3);
    res.send(posts)
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => console.log(`Listening: ${port}`));
