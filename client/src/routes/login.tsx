import { createFileRoute, Navigate } from "@tanstack/react-router";
import Login from "../pages/Login";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export const Route = createFileRoute("/login")({
  component: LoginComponent,
});

function LoginComponent() {
  const user = useContext(UserContext);

  if (user != "empty") {
    return <Navigate to="/" replace />;
  }

  return <Login />;
}
