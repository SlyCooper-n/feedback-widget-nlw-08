import { Request, Response } from "express";
import { prisma } from "./prisma";

const express = require("express");

const app = express();

// middleware
app.use(express.json());

app.post("/", async (req: Request, res: Response) => {
  const feedback = await prisma.feedback.create({
    data: {
      ...req.body,
    },
  });

  return res.status(201).json({ data: feedback, message: "Feedback received" });
});

app.listen(3333, () => {
  console.log(
    "Server started on port 3333 \nOpen in the browser: http://localhost:3333"
  );
});
