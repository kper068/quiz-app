import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import "./styles/App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
