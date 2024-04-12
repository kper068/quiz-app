import { Button, Rating, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ListIcon from "@mui/icons-material/List";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Quiz } from "../types/data";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContextProvider";

export default function ResultsQuiz() {
  const { quiz, userAnswers } = useOutletContext<{
    quiz: Quiz;
    userAnswers: number[];
  }>();
  const navigate = useNavigate();
  const { updateQuiz } = useContext(AppContext);
  const [score, setScore] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    let numScore = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        numScore += 1;
      }
    });
    setScore(numScore);
  }, []);

  const onChangeRating = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    if (newValue !== null) {
      setRating(newValue);
    }
  };

  const goToHome = () => {
    navigate("/");
    if (rating !== 0) updateRating();
  };

  const goToStart = () => {
    navigate(`/quiz/${quiz.id}/play`);
    if (rating !== 0) updateRating();
  };

  const updateRating = () => {
    quiz.rating.push(rating);
    updateQuiz(quiz);
  };

  return (
    <Stack direction="column" alignItems="center">
      <Typography variant="h5" sx={{ pt: "4rem", pb: "2rem" }}>
        You scored: {score}/{quiz.questions.length}
      </Typography>
      <Typography variant="h6" sx={{ pb: "1rem" }}>
        Rate the quiz!
      </Typography>
      <Rating
        defaultValue={0}
        precision={0.5}
        onChange={onChangeRating}
        emptyIcon={<StarIcon fontSize="inherit" style={{ opacity: 0.55 }} />}
        size="large"
        sx={{ pb: "2rem" }}
      />
      <Stack direction="row" spacing={6} justifyContent="center">
        <Button variant="contained" startIcon={<ListIcon />} onClick={goToHome}>
          Main Menu
        </Button>
        <Button
          variant="contained"
          startIcon={<RestartAltIcon />}
          onClick={goToStart}
        >
          Redo Quiz
        </Button>
      </Stack>
    </Stack>
  );
}
