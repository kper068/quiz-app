import express from "express";
import {
  createQuiz,
  getQuizzes,
  getQuiz,
  updateQuiz,
  deleteQuiz,
} from "../../data/quizDAO";

const router = express.Router();

router.post("/", async (req, res) => {
  const newQuiz = await createQuiz(req.body);

  if (newQuiz) {
    return res
      .status(201)
      .header("Location", `/api/quizzes/${newQuiz._id}`)
      .json(newQuiz);
  } else {
    return res.sendStatus(422);
  }
});

router.get("/", async (_req, res) => {
  const quizzes = await getQuizzes();
  return res.json(quizzes);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const quiz = await getQuiz(+id);

  if (quiz) {
    return res.json(quiz);
  } else {
    return res.sendStatus(401);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const quiz = req.body;
  quiz._id = id;

  const success = await updateQuiz(quiz);
  return res.sendStatus(success ? 204 : 404);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await deleteQuiz(+id);
  return res.sendStatus(204);
});

export default router;
