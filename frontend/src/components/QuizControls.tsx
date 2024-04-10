import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateQuizDialog from "../components/CreateQuizDialog";
import { useContext, useState } from "react";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContextProvider";

interface QuizControlProps {
  selected: number;
}

export default function QuizControls({ selected }: QuizControlProps) {
  const navigate = useNavigate();
  const { deleteQuiz, fetchQuizzes } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  const handleOpenForm = () => {
    setOpen(true);
  };

  const handleCloseForm = () => {
    setOpen(false);
  };

  const onClickPlay = () => {
    navigate(`/quiz/${selected}/play`);
  };

  const onClickEdit = () => {
    navigate(`/quiz/${selected}/edit`);
  };

  const onClickDelete = () => {
    deleteQuiz(selected);
    fetchQuizzes();
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
            onClick={onClickPlay}
          >
            Play Quiz
          </Button>
          <Button
            disabled={!isSelected}
            variant="contained"
            startIcon={<EditIcon />}
            onClick={onClickEdit}
          >
            Edit Quiz
          </Button>
          <Button
            disabled={!isSelected}
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={onClickDelete}
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
