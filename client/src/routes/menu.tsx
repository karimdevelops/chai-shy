import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  component: MenuComponent,
});

function MenuComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
