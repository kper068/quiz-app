import { useParams } from "react-router-dom";
import Main from "../components/Main";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";
import { Box, Stack, Typography } from "@mui/material";
import EditQuestion from "../components/EditQuestion";
import { Quiz, QuizQuestion } from "../types/data";
import EditQuizControls from "../components/EditQuizControls";

export default function EditQuiz() {
  const { quizId } = useParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { quizzes, updateQuiz, fetchQuizzes } = useContext(AppContext);

  const quiz = quizzes.find((quiz) => {
    if (quiz.id === parseInt(quizId!, 10)) {
      return quiz;
    }
  });

  if (!quiz) {
    return;
  }

  const changeCurrentPage = (currentPage: number) => {
    setCurrentPage(currentPage);
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
    fetchQuizzes();
  };

  return (
    <Main>
      <Box sx={{ p: "2rem" }}>
        <Typography variant="h6" sx={{ pb: "1rem" }}>
          {quiz.name}
        </Typography>
        <Stack direction="column" alignItems="center">
          <EditQuizControls
            quiz={quiz}
            currentPage={currentPage}
            changeCurrentPage={changeCurrentPage}
            updateQuiz={callUpdateQuiz}
          />
          <EditQuestion
            question={quiz.questions[currentPage - 1]}
            updateQuestion={updateQuestion}
          />
        </Stack>
      </Box>
    </Main>
  );
}
