import { Box, Typography } from "@mui/material";
import Main from "../components/Main";
import QuizTable from "../components/QuizTable";
import QuizControls from "../components/QuizControls";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContextProvider";

/**
 * Acts as the quiz browser page
 *
 * @returns HTML Component
 */
export default function Home() {
  const { fetchQuizzes } = useContext(AppContext);
  const [selected, setSelected] = useState(-1);

  const handleSelectedQuiz = (selected: number) => {
    setSelected(selected);
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <Main>
      <Box sx={{ p: "2rem" }}>
        <Typography variant="h6" sx={{ pb: "1rem" }}>
          Browse Quizzes
        </Typography>
        <QuizTable handleSelected={handleSelectedQuiz} />
        <QuizControls selected={selected} />
      </Box>
    </Main>
  );
}
