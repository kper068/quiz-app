import { Box, Typography } from "@mui/material";
import Main from "../components/Main";
import QuizTable from "../components/QuizTable";
import QuizControls from "../components/QuizControls";
import { useContext, useEffect } from "react";
import { AppContext } from "../AppContextProvider";

/**
 * Acts as the quiz browser page
 *
 * @returns HTML Component
 */
export default function Home() {
  const { fetchQuizzes } = useContext(AppContext);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <Main>
      <Box sx={{ p: "2rem" }}>
        <Typography variant="h6" sx={{ pb: "1rem" }}>
          Browse Quizzes
        </Typography>
        <QuizTable />
        <QuizControls />
      </Box>
    </Main>
  );
}
