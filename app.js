import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use((req, res) => {
  res.status(200).json({
    status: "success",
    message: "server healthy",
  });
});

export default app;
