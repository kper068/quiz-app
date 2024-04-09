import express from "express";
import quizzes from "./api/quizzes";

const router = express.Router();

router.use("/api/quizzes", quizzes);

export default router;
