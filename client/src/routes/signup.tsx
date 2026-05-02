import { createFileRoute, Navigate } from "@tanstack/react-router";
import Signup from "../pages/Signup";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export const Route = createFileRoute("/signup")({
  component: SignupComponent,
});

function SignupComponent() {
  const user = useContext(UserContext);
  if (user != "empty") {
    return <Navigate to="/" replace />;
  }
  return <Signup />;
}
