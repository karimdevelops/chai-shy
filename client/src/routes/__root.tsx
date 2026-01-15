import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();

  return (
    <>
      <div className="main">
        {location.pathname !== "/admin" ? <Navbar /> : null}
        <Outlet />
      </div>
    </>
  );
}
