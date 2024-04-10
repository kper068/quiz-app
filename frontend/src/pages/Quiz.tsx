import { Link, Outlet } from "react-router-dom";

export default function Quiz() {
  return (
    <>
      <Link to="/play" />
      <Link to="/edit" />
      <Outlet />
    </>
  );
}
