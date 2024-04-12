import { useOutletContext } from "react-router-dom";
import { Quiz } from "../types/data";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
import PlayQuestion from "../components/PlayQuestion";

export default function PlayQuiz() {
  const quiz: Quiz = useOutletContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [answers, setAnswers] = useState<number[]>(
    new Array<number>(quiz.questions.length)
  );

  const onChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const changeAnswer = (questionId: number, answer: number) => {
    const answerIndex = quiz.questions.findIndex((question) => {
      return question.id === questionId;
    });
    let newAnswers = [...answers];
    newAnswers[answerIndex] = answer;
    setAnswers(newAnswers);
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
        answer={answers[currentPage - 1]}
        setAnswer={changeAnswer}
      />
    </Stack>
  );
}
