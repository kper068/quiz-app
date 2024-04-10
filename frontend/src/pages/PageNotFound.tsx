import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  navigate("/");
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}
