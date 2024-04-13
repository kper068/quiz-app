import mongoose from "mongoose";
import { Quiz as QuizType } from "../types/data";

const Schema = mongoose.Schema;

const quizSchema = new Schema<QuizType>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  playedCount: Number,
  rating: [],
  dateOfCreation: Date,
  questions: [
    {
      id: { type: Number, required: true },
      title: String,
      answers: [],
      correctAnswer: Number,
    },
  ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

export { Quiz };
