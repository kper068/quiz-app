import { Button, Pagination, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Quiz, QuizQuestion } from "../types/data";
import { useState } from "react";

interface EditQuizControlsProps {
  quiz: Quiz;
  currentPage: number;
  changeCurrentPage: (currentPage: number) => void;
  updateQuiz: (quiz: Quiz) => void;
}

export default function EditQuizControls({
  quiz,
  currentPage,
  changeCurrentPage,
  updateQuiz,
}: EditQuizControlsProps) {
  const [pageCount, setPageCount] = useState<number>(quiz.questions.length);

  const onChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
    changeCurrentPage(page);
  };

  const onDeleteQuestion = () => {
    if (currentPage === pageCount) {
      changeCurrentPage(currentPage - 1);
      quiz.questions.pop();
    } else {
      quiz.questions.splice(currentPage - 1, 1);
      changeCurrentPage(currentPage);
    }
    setPageCount(quiz.questions.length);
    updateQuiz(quiz);
  };

  const onAddQuestion = () => {
    const newId =
      quiz.questions.reduce((prev, curr) => {
        return prev && prev.id > curr.id ? prev : curr;
      }).id + 1;
    const newQuestion: QuizQuestion = {
      id: newId,
      title: "",
      answers: [],
      correctAnswer: -1,
    };
    if (currentPage === quiz.questions.length) {
      quiz.questions.push(newQuestion);
    } else {
      quiz.questions.splice(currentPage, 0, newQuestion);
    }
    setPageCount(quiz.questions.length);
    updateQuiz(quiz);
    changeCurrentPage(currentPage + 1);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: "100%", marginBottom: "1rem" }}
    >
      <Button
        disabled={pageCount === 1 ? true : false}
        variant="contained"
        startIcon={<DeleteIcon />}
        sx={{ float: "right" }}
        onClick={onDeleteQuestion}
      >
        Delete Question
      </Button>
      <Pagination
        count={pageCount}
        variant="outlined"
        shape="rounded"
        size="large"
        page={currentPage}
        onChange={onChangePage}
      />
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ float: "right" }}
        onClick={onAddQuestion}
      >
        Add Question
      </Button>
    </Stack>
  );
}
