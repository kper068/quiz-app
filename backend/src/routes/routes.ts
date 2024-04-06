import express from "express";
import quizzes from "./api/quizzes";

const router = express.Router();

router.use("/quizzes", quizzes);

export default router;
