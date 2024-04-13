import { Quiz } from "./schema";
import { Quiz as QuizType } from "../types/data";

const createQuiz = async (quiz: QuizType): Promise<QuizType> => {
  const dbQuiz = new Quiz(quiz);
  await dbQuiz.save();
  return dbQuiz;
};

const getQuizzes = async (): Promise<QuizType[]> => {
  return await Quiz.find();
};

const getQuiz = async (id: number): Promise<QuizType | null> => {
  return await Quiz.findOne({ id: id });
};

const updateQuiz = async (quiz: QuizType): Promise<boolean> => {
  const dbQuiz = await Quiz.findOneAndUpdate({ id: quiz.id }, quiz);
  return dbQuiz !== undefined;
};

const deleteQuiz = async (id: number) => {
  await Quiz.deleteOne({ id: id });
};

export { createQuiz, getQuizzes, getQuiz, updateQuiz, deleteQuiz };
