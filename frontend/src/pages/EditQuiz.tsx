import { useParams } from "react-router-dom";
import Main from "../components/Main";
import { useContext, useState } from "react";
import { AppContext } from "../AppContextProvider";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import EditQuestion from "../components/EditQuestion";
import { QuizQuestion } from "../types/data";

export default function EditQuiz() {
  const { quizId } = useParams();
  const [page, setPage] = useState<number>(1);
  const { quizzes, updateQuiz } = useContext(AppContext);

  const quiz = quizzes.find((quiz) => {
    if (quiz.id === parseInt(quizId!, 10)) {
      return quiz;
    }
  });

  if (!quiz) {
    return;
  }

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  const updateQuestion = (updatedQuestion: QuizQuestion) => {
    quiz.questions.forEach((question, index) => {
      if (question.id === updatedQuestion.id) {
        quiz.questions[index] = updatedQuestion;
      }
    });
    updateQuiz(quiz);
  };

  return (
    <Main>
      <Box sx={{ p: "2rem" }}>
        <Typography variant="h6" sx={{ pb: "1rem" }}>
          {quiz.name}
        </Typography>
        <Stack direction="column" alignItems="center">
          <Pagination
            count={quiz.questions.length}
            variant="outlined"
            shape="rounded"
            showFirstButton
            showLastButton
            page={page}
            onChange={onChangePage}
            sx={{ marginBottom: "1rem" }}
          />
          <EditQuestion
            question={quiz.questions[page - 1]}
            updateQuestion={updateQuestion}
          />
        </Stack>
      </Box>
    </Main>
  );
}
