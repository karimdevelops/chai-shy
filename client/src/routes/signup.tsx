import { createFileRoute } from "@tanstack/react-router";
import Signup from "../pages/Signup";

export const Route = createFileRoute("/signup")({
  component: SignupComponent,
});

function SignupComponent() {
  return <Signup />;
}
