import { createContext } from "react";
import { httpRequest } from "./hooks/useHooks";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AppContext = createContext({
  quizzes: {},
});

interface ChildrenProp {
  children: React.ReactNode;
}

function AppContextProvider({ children }: ChildrenProp) {
  const {
    data: quizzes,
    status: quizzesStatus,
    loading: quizzesLoading,
    refresh: quizzesRefresh,
  } = httpRequest({
    url: `${API_BASE_URL}/api/quizzes`,
    initialState: [],
    method: "GET",
  });

  const context = {
    quizzes,
    quizzesStatus,
    quizzesLoading,
    quizzesRefresh,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
