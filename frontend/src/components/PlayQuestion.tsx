import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { QuizQuestion } from "../types/data";
import React, { useEffect, useState } from "react";

interface PlayQuestionProps {
  question: QuizQuestion;
  answer: number;
  setAnswer: (questionId: number, answer: number) => void;
}

export default function PlayQuestion({
  question,
  answer,
  setAnswer,
}: PlayQuestionProps) {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setValue(answer?.toString() ?? "");
  }, [question.id]);

  const onRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const onFormChange = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    setAnswer(question.id, parseInt(formJson.answer.toString()));
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
      <RadioGroup name="answer" value={value} onChange={onRadioChange}>
        {question.answers.map((answer, index) => {
          return (
            <FormControlLabel
              key={index}
              value={index}
              defaultValue={value}
              control={<Radio />}
              label={answer}
            />
          );
        })}
      </RadioGroup>
    </Stack>
  );
}
