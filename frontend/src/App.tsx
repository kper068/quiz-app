import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import { useContext } from "react";
import { AppContext } from "./AppContextProvider";

export default function App() {
  const appContext = useContext(AppContext);
  appContext?.loading;
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </>
  );
}
