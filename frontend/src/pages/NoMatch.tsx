import { useNavigate } from "react-router-dom";

export default function NoMatch() {
  const navigate = useNavigate();
  navigate("/");
  return <></>;
}
