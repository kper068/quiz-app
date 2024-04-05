import { Box, Typography } from "@mui/material";
import Main from "../components/Main";

/**
 * Acts as the quiz browser page
 *
 * @returns HTML Component
 */
export default function Home() {
  return (
    <Main>
      <Box sx={{ p: "2rem" }}>
        <Typography variant="h6">Browse Quizzes</Typography>
      </Box>
    </Main>
  );
}
