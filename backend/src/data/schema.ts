import mongoose from "mongoose";

const Schema = mongoose.Schema;

const quizSchema = new Schema({
  name: { type: String, required: true },
  rating: Number,
  dateOfCreation: Date,
  questions: {
    id: { type: Number, required: true },
    number: Number,
    title: String,
    answers: [],
    correctAnswer: String,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

export { Quiz };
