import { useOutletContext } from "react-router-dom";
import { Quiz, QuizQuestion } from "../types/data";
import { Pagination, Stack } from "@mui/material";
import { useContext, useState } from "react";
import PlayQuestion from "../components/PlayQuestion";
import { AppContext } from "../AppContextProvider";

export default function PlayQuiz() {
  const quiz: Quiz = useOutletContext();
  const { updateQuiz } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
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
    <Stack direction="column" alignItems="center">
      <Pagination
        count={quiz.questions.length}
        variant="outlined"
        shape="rounded"
        size="large"
        page={currentPage}
        onChange={onChangePage}
        sx={{ marginBottom: "1rem" }}
      />
      <PlayQuestion
        question={quiz.questions[currentPage - 1]}
        updateQuestion={updateQuestion}
      />
    </Stack>
  );
}
