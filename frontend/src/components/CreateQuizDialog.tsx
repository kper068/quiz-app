import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import { useNavigate } from "react-router-dom";

interface CreateQuizDialogProps {
  open: boolean;
  handleClose: () => void;
}

export default function CreateQuizDialog(props: CreateQuizDialogProps) {
  const { open, handleClose } = props;
  const { createQuiz, fetchQuizzes } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          createQuiz(formJson.name.toString()).then((id) => {
            fetchQuizzes();
            navigate(`/quiz/${id}/edit`);
          });
          handleClose();
        },
      }}
    >
      <DialogTitle>Create Quiz</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out the necessary information below before starting to
          create your quiz!
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Quiz Name"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Create</Button>
      </DialogActions>
    </Dialog>
  );
}
