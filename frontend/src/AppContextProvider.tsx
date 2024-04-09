import axios from "axios";
import { createContext, useState } from "react";
import { Quiz } from "./types/data";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface IAppContext {
  quizzes: Quiz[];
  loading: boolean;
  error: string;
  fetchQuizzes: () => Promise<void>;
}

const initialState: IAppContext = {
  quizzes: [],
  loading: false,
  error: "",
  fetchQuizzes: async () => {},
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
      const response = await axios.get(`${API_BASE_URL}/api/quizzes`);
      setQuizzes(response.data);
    } catch (error) {
      setError(`Error during fetchQuizzes(): ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const context: IAppContext = {
    quizzes: quizzes,
    loading: loading,
    error: error,
    fetchQuizzes: fetchQuizzes,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
