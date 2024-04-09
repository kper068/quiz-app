import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateQuizDialog from "../components/CreateQuizDialog";
import { useState } from "react";
import { Button, Stack } from "@mui/material";

interface QuizControlProps {
  selected: number;
}

export default function QuizControls({ selected }: QuizControlProps) {
  const [open, setOpen] = useState(false);

  const handleOpenForm = () => {
    setOpen(true);
  };

  const handleCloseForm = () => {
    setOpen(false);
  };

  const isSelected = selected !== -1 ? true : false;

  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <Button
            disabled={!isSelected}
            variant="contained"
            startIcon={<PlayArrowIcon />}
          >
            Play Quiz
          </Button>
          <Button
            disabled={!isSelected}
            variant="contained"
            startIcon={<EditIcon />}
          >
            Edit Quiz
          </Button>
          <Button
            disabled={!isSelected}
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Delete Quiz
          </Button>
        </Stack>
        <Button
          onClick={handleOpenForm}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Create Quiz
        </Button>
      </Stack>
      <CreateQuizDialog open={open} handleClose={handleCloseForm} />
    </>
  );
}
