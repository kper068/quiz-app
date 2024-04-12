import * as dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { createQuiz } from "./quizDAO";
import { Quiz } from "./schema";

const quiz = {
  id: 0,
  name: "Basic Maths",
  playedCount: 2,
  rating: [4.5],
  dateOfCreation: new Date().toLocaleString(),
  questions: [
    {
      id: 0,
      title: "What is 2+2?",
      answers: ["1", "2", "3", "4"],
      correctAnswer: 3,
    },
  ],
};

main();

async function main() {
  await mongoose
    .connect(process.env.DB_URL!)
    .then(() => console.log("Connected to database!"))
    .catch((error) => console.log("Unable to connect: ", error));
  console.log();

  await clearDatabase();
  console.log();

  const dbQuiz = await createQuiz(quiz);
  console.log(`Quiz '${dbQuiz.name}' added to database (id = ${dbQuiz.id})`);
  console.log();

  await mongoose
    .disconnect()
    .then(() => console.log("Disconnected from database!"))
    .catch((error) => console.log("Unable to disconnect: ", error));
}

const clearDatabase = async () => {
  const quizzesDeleted = await Quiz.deleteMany({});
  console.log(
    `Cleared database (removed ${quizzesDeleted.deletedCount} quizzes)`
  );
};
