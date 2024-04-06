import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Main from "../components/Main";
import { QuizTable } from "../components/QuizTable";
import CreateQuizDialog from "../components/CreateQuizDialog";
import { useState } from "react";

/**
 * Acts as the quiz browser page
 *
 * @returns HTML Component
 */
export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpenForm = () => {
    setOpen(true);
  };

  const handleCloseForm = () => {
    setOpen(false);
  };

  return (
    <Main>
      <Box sx={{ p: "2rem" }}>
        <Typography variant="h6" sx={{ pb: "1rem" }}>
          Browse Quizzes
        </Typography>
        <QuizTable />
        <Stack direction="row" spacing={2}>
          <Button
            onClick={handleOpenForm}
            variant="contained"
            startIcon={<AddIcon />}
          >
            Create Quiz
          </Button>
          <Button disabled variant="contained" startIcon={<EditIcon />}>
            Edit Quiz
          </Button>
        </Stack>
        <CreateQuizDialog open={open} handleClose={handleCloseForm} />
      </Box>
    </Main>
  );
}
