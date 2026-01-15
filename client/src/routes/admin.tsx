import { createFileRoute } from "@tanstack/react-router";
import Admin from "../pages/Admin";

export const Route = createFileRoute("/admin")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Admin />;
}
