import { useOutletContext } from "react-router-dom";
import { Quiz } from "../types/data";
import { Stack } from "@mui/material";

export default function PlayQuiz() {
  const quiz: Quiz = useOutletContext();
  return <Stack direction="column" alignItems="center"></Stack>;
}
