import { createContext } from "react";
import { httpRequest } from "./hooks/useHooks";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface IAppContext {
  data: object;
  status: number;
  loading: boolean;
  refresh: () => void;
}

const AppContext = createContext<IAppContext | null>(null);

interface ChildrenProp {
  children: React.ReactNode;
}

function AppContextProvider({ children }: ChildrenProp) {
  const response: IAppContext = httpRequest({
    url: `${API_BASE_URL}/api/quizzes`,
    initialState: [],
    method: "GET",
  });

  return <AppContext.Provider value={response}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider };
