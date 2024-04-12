import mongoose from "mongoose";

const Schema = mongoose.Schema;

const quizSchema = new Schema({
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
