import axios, { AxiosResponse } from "axios";
import { createContext, useState } from "react";
import { Quiz } from "./types/data";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const QUIZ_BASE_URL = `${API_BASE_URL}/api/quizzes`;

interface IAppContext {
  quizzes: Quiz[];
  loading: boolean;
  error: string;
  fetchQuizzes: () => Promise<void>;
  createQuiz: (name: string) => Promise<number | undefined>;
  deleteQuiz: (id: number) => Promise<void>;
  updateQuiz: (quiz: Quiz) => Promise<void>;
}

const initialState: IAppContext = {
  quizzes: [],
  loading: false,
  error: "",
  fetchQuizzes: async () => {},
  createQuiz: async () => {
    return -1;
  },
  deleteQuiz: async () => {},
  updateQuiz: async () => {},
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
      questions: [
        { id: 0, number: 1, title: "", answers: [], correctAnswer: -1 },
      ],
    };
    try {
      const response: AxiosResponse<Quiz> = await axios.post(
        QUIZ_BASE_URL,
        newQuiz
      );
      return response.data.id;
    } catch (error) {
      setError(`Error during createQuiz(): ${error}`);
    }
  };

  const deleteQuiz = async (id: number) => {
    try {
      await axios.delete(`${QUIZ_BASE_URL}/${id}`);
    } catch (error) {
      setError(`Error during deleteQuiz(): ${error}`);
    }
  };

  const updateQuiz = async (quiz: Quiz) => {
    const updatedQuiz: Quiz = {
      id: quiz.id,
      name: quiz.name,
      playedCount: quiz.playedCount,
      rating: quiz.rating,
      dateOfCreation: quiz.dateOfCreation,
      questions: quiz.questions,
    };
    try {
      await axios.put(`${QUIZ_BASE_URL}/${quiz.id}`, updatedQuiz);
    } catch (error) {
      setError(`Error during updateQuiz(): ${error}`);
    }
  };

  const context: IAppContext = {
    quizzes: quizzes,
    loading: loading,
    error: error,
    fetchQuizzes: fetchQuizzes,
    createQuiz: createQuiz,
    deleteQuiz: deleteQuiz,
    updateQuiz: updateQuiz,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
