import { useNavigate, useOutletContext } from "react-router-dom";
import { Quiz } from "../types/data";
import { Button, Pagination, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import PlayQuestion from "../components/PlayQuestion";
import { AppContext } from "../AppContextProvider";

export default function PlayQuiz() {
  const { quiz, setUserAnswers } = useOutletContext<{
    quiz: Quiz;
    setUserAnswers: (answers: number[]) => void;
  }>();
  const navigate = useNavigate();
  const { updateQuiz } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [answers, setAnswers] = useState<number[]>(
    new Array<number>(quiz.questions.length)
  );

  const onChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const onChangeAnswer = (questionId: number, answer: number) => {
    const answerIndex = quiz.questions.findIndex((question) => {
      return question.id === questionId;
    });
    let newAnswers = [...answers];
    newAnswers[answerIndex] = answer;
    setAnswers(newAnswers);
  };

  const onEndQuiz = () => {
    setUserAnswers(answers);
    quiz.playedCount += 1;
    updateQuiz(quiz);
    navigate(`/quiz/${quiz.id}/results`);
  };

  const isLastPage = currentPage === quiz.questions.length + 1;

  return (
    <Stack direction="column" alignItems="center">
      <Pagination
        count={quiz.questions.length + 1}
        variant="outlined"
        shape="rounded"
        size="large"
        page={currentPage}
        onChange={onChangePage}
        sx={{
          marginBottom: isLastPage ? "6rem" : "1rem",
        }}
      />
      {isLastPage ? (
        <>
          <Typography variant="h6" sx={{ pb: "1rem" }}>
            You have reached the end of this quiz!
          </Typography>
          <Button variant="contained" onClick={onEndQuiz}>
            End Question
          </Button>
        </>
      ) : (
        <PlayQuestion
          question={quiz.questions[currentPage - 1]}
          answer={answers[currentPage - 1]}
          setAnswer={onChangeAnswer}
        />
      )}
    </Stack>
  );
}
