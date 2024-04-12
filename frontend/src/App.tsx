import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditQuiz from "./pages/EditQuiz";
import PlayQuiz from "./pages/PlayQuiz";
import ResultsQuiz from "./pages/ResultsQuiz";
import Quiz from "./pages/Quiz";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import "./styles/App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz">
          <Route path=":quizId" element={<Quiz />}>
            <Route path="play" element={<PlayQuiz />}></Route>
            <Route path="edit" element={<EditQuiz />}></Route>
            <Route path="results" element={<ResultsQuiz />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}
