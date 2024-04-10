import express from "express";
import {
  createQuiz,
  getQuizzes,
  getQuiz,
  updateQuiz,
  deleteQuiz,
} from "../../data/quizDAO";

const HTTP_CREATED = 201;
const HTTP_NO_CONTENT = 204;
const HTTP_UNAUTHORIZED = 401;
const HTTP_NOT_FOUND = 404;
const HTTP_UNPROCESSABLE_CONTENT = 422;

const router = express.Router();

router.post("/", async (req, res) => {
  const newQuiz = await createQuiz(req.body);

  if (newQuiz) {
    return res
      .status(HTTP_CREATED)
      .header("Location", `/api/quizzes/${newQuiz.id}`)
      .json(newQuiz);
  } else {
    return res.sendStatus(HTTP_UNPROCESSABLE_CONTENT);
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
    return res.sendStatus(HTTP_UNAUTHORIZED);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const quiz = req.body;
  quiz.id = id;

  const success = await updateQuiz(quiz);
  return res.sendStatus(success ? HTTP_NO_CONTENT : HTTP_NOT_FOUND);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await deleteQuiz(+id);
  return res.sendStatus(HTTP_NO_CONTENT);
});

export default router;
