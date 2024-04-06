import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { createQuiz } from "./quizDAO";
import { Quiz } from "./schema";

const quiz = {
  name: "Basic Maths",
  rating: 4.5,
  dateOfCreation: new Date().toLocaleString(),
  questions: [
    {
      id: 0,
      number: 1,
      title: "What is 2+2?",
      answers: ["1", "2", "3", "4"],
      correctAnswer: 3,
    },
  ],
};

main();

async function main() {
  await mongoose.connect(process.env.DB_URL!);
  console.log("Connected to database!");
  console.log();

  await clearDatabase();
  console.log();

  const dbQuiz = await createQuiz(quiz);
  console.log(`Quiz '${dbQuiz.name}' added to database (_id = ${dbQuiz._id})`);
  console.log();

  await mongoose.disconnect();
  console.log("Disconnected from database!");
}

const clearDatabase = async () => {
  const quizzesDeleted = await Quiz.deleteMany({});
  console.log(
    `Cleared database (removed ${quizzesDeleted.deletedCount} quizzes)`
  );
};
