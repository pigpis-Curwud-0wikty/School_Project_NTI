// app.js
import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Server is running successfully ✅");
});

export default app;
