import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { QuizQuestion } from "../types/data";
import React, { useState } from "react";

interface PlayQuestionProps {
  question: QuizQuestion;
  updateQuestion: (question: QuizQuestion) => void;
}

export default function PlayQuestion({
  question,
  updateQuestion,
}: PlayQuestionProps) {
  const [value, setValue] = useState<number>(-1);

  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt((event.target as HTMLInputElement).value));
  };

  const onFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
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
        {question.title}
      </Typography>
      <RadioGroup name="question" value={value} onChange={onRadioChange}>
        {question.answers.map((answer, index) => {
          return (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={answer}
            />
          );
        })}
      </RadioGroup>
    </Stack>
  );
}
