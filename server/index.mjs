import "./loadEnvironment.mjs";
import express from "express";
import cors from "cors";
import db from "./db/conn.mjs";
import posts from "./routes/posts.mjs";

const app = express();
const port = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/posts", posts);

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
