import { Outlet, useParams } from "react-router-dom";
import Main from "../components/Main";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

export default function Quiz() {
  const { quizId } = useParams();
  const { quizzes } = useContext(AppContext);

  const quiz = quizzes.find((quiz) => {
    if (quiz.id === parseInt(quizId!, 10)) {
      return quiz;
    }
  });

  if (!quiz) {
    return;
  }

  return (
    <Main>
      <Box sx={{ p: "2rem" }}>
        <Typography variant="h6" sx={{ pb: "1rem" }}>
          {quiz.name}
        </Typography>
        <Outlet context={quiz} />
      </Box>
    </Main>
  );
}
