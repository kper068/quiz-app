import { Quiz } from "./schema";

const createQuiz = async (quiz: any) => {
  const dbQuiz = new Quiz(quiz);
  await dbQuiz.save();
  return dbQuiz;
};

const getQuizzes = async () => {
  return await Quiz.find();
};

const getQuiz = async (id: number) => {
  return await Quiz.findOne({ id: id });
};

const updateQuiz = async (quiz: any) => {
  const dbQuiz = await Quiz.findOneAndUpdate({ id: quiz.id }, quiz);
  return dbQuiz !== undefined;
};

const deleteQuiz = async (id: number) => {
  await Quiz.deleteOne({ id: id });
};

export { createQuiz, getQuizzes, getQuiz, updateQuiz, deleteQuiz };
