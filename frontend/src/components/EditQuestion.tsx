import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
  InputLabel,
} from "@mui/material";
import { QuizQuestion } from "../types/data";
import { useState } from "react";

interface EditQuestionProps {
  question: QuizQuestion;
  updateQuestion: (question: QuizQuestion) => void;
}

export default function EditQuestion({
  question,
  updateQuestion,
}: EditQuestionProps) {
  const [correctAnswer, setCorrectAnswer] = useState<string>(
    question.correctAnswer === -1 ? "" : question.correctAnswer.toString()
  );

  const onChangeCorrectAnswer = (event: SelectChangeEvent) => {
    setCorrectAnswer(event.target.value);
    updateQuestion({
      ...question,
      correctAnswer: parseInt(event.target.value, 10),
    });
  };

  const onFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const newAnswers = [
      formJson.answer1.toString(),
      formJson.answer2.toString(),
      formJson.answer3.toString(),
      formJson.answer4.toString(),
    ];
    const newTitle = formJson.questionTitle.toString();
    updateQuestion({ ...question, answers: newAnswers, title: newTitle });
  };

  return (
    <Stack
      direction="column"
      spacing={6}
      alignItems="center"
      component="form"
      noValidate
      autoComplete="off"
      onChange={onFormChange}
      key={question.id}
    >
      <Typography variant="h6" sx={{ pb: "1rem", width: "100%" }}>
        <TextField
          margin="dense"
          name="questionTitle"
          label="Question"
          defaultValue={question.title}
          type="text"
          variant="standard"
          fullWidth
        />
      </Typography>
      <Stack direction="row" spacing={12} alignItems="center">
        <TextField
          margin="dense"
          name="answer1"
          label="Answer 1"
          defaultValue={question.answers[0]}
          type="text"
          variant="standard"
        />
        <TextField
          margin="dense"
          name="answer2"
          label="Answer 2"
          defaultValue={question.answers[1]}
          type="text"
          variant="standard"
        />
      </Stack>
      <Stack direction="row" spacing={12} alignItems="center">
        <TextField
          margin="dense"
          name="answer3"
          label="Answer 3"
          defaultValue={question.answers[2]}
          type="text"
          variant="standard"
        />
        <TextField
          margin="dense"
          name="answer4"
          label="Answer 4"
          defaultValue={question.answers[3]}
          type="text"
          variant="standard"
        />
      </Stack>
      <Box sx={{ width: "100%" }}>
        <InputLabel id="select-correct-answer">Correct Answer</InputLabel>
        <Select
          labelId="select-correct-answer"
          name="correctAnswer"
          value={correctAnswer}
          onChange={onChangeCorrectAnswer}
          fullWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="0">1</MenuItem>
          <MenuItem value="1">2</MenuItem>
          <MenuItem value="2">3</MenuItem>
          <MenuItem value="3">4</MenuItem>
        </Select>
      </Box>
    </Stack>
  );
}
