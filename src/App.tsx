import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";
import "./styles/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
]);

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <RouterProvider router={router} />
    </>
  );
}
