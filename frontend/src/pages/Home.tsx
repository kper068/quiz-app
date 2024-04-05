import { Box, Typography } from "@mui/material";
import Main from "../components/Main";
import { QuizTable } from "../components/QuizTable";

/**
 * Acts as the quiz browser page
 *
 * @returns HTML Component
 */
export default function Home() {
  return (
    <Main>
      <Box sx={{ p: "2rem" }}>
        <Typography variant="h6" sx={{ pb: "1rem" }}>
          Browse Quizzes
        </Typography>
        <QuizTable />
      </Box>
    </Main>
  );
}
