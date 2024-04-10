import axios, { AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { Quiz } from "./types/data";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const QUIZ_BASE_URL = `${API_BASE_URL}/api/quizzes`;

interface IAppContext {
  quizzes: Quiz[];
  loading: boolean;
  error: string;
  fetchQuizzes: () => Promise<void>;
  createQuiz: (name: string) => Promise<void>;
}

const initialState: IAppContext = {
  quizzes: [],
  loading: false,
  error: "",
  fetchQuizzes: async () => {},
  createQuiz: async () => {},
};

const AppContext = createContext<IAppContext>(initialState);

interface ChildrenProp {
  children: React.ReactNode;
}

function AppContextProvider({ children }: Readonly<ChildrenProp>) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchQuizzes = async () => {
    try {
      setLoading(true);
      const response: AxiosResponse<Quiz[]> = await axios.get(QUIZ_BASE_URL);
      setQuizzes(response.data);
    } catch (error) {
      setError(`Error during fetchQuizzes(): ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const createQuiz = async (name: string) => {
    const newQuiz: Quiz = {
      id: quizzes.length ? quizzes[quizzes.length - 1].id + 1 : 0,
      name: name,
      playedCount: 0,
      rating: -1,
      dateOfCreation: new Date(),
      questions: [],
    };

    try {
      await axios.post(QUIZ_BASE_URL, newQuiz);
    } catch (error) {
      setError(`Error during createQuiz(): ${error}`);
    }
  };

  const context: IAppContext = {
    quizzes: quizzes,
    loading: loading,
    error: error,
    fetchQuizzes: fetchQuizzes,
    createQuiz: createQuiz,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
