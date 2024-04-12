import { useOutletContext } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";
import { Stack } from "@mui/material";
import EditQuestion from "../components/EditQuestion";
import { Quiz, QuizQuestion } from "../types/data";
import EditQuizControls from "../components/EditQuizControls";

export default function EditQuiz() {
  const { quiz } = useOutletContext<{ quiz: Quiz }>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const { updateQuiz } = useContext(AppContext);

  const changeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
    setCurrentQuestion(quiz.questions[currentPage - 1].id);
  };

  const updateQuestion = (updatedQuestion: QuizQuestion) => {
    quiz.questions.forEach((question, index) => {
      if (question.id === updatedQuestion.id) {
        quiz.questions[index] = updatedQuestion;
      }
    });
    callUpdateQuiz(quiz);
  };

  const callUpdateQuiz = (quiz: Quiz) => {
    updateQuiz(quiz);
  };

  return (
    <Stack direction="column" alignItems="center">
      <EditQuizControls
        quiz={quiz}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
        updateQuiz={callUpdateQuiz}
      />
      <EditQuestion
        question={
          quiz.questions.find((question) => {
            return question.id === currentQuestion;
          }) ?? quiz.questions[0]
        }
        updateQuestion={updateQuestion}
      />
    </Stack>
  );
}
