import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/menu") {
      throw redirect({
        to: "/menu/$cat",
        params: { cat: "drinks-1" },
        replace: true,
      });
    }
  },
  component: MenuComponent,
});

function MenuComponent() {
  return (
    <>
      <Outlet />
    </>
  );
}
