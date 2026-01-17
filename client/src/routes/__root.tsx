import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import useGetUser from "../hooks/useGetUser";
import UserContext from "../contexts/UserContext";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();
  const user = useGetUser();

  return (
    <UserContext value={user}>
      <div className="main">
        {location.pathname !== "/admin" ? <Navbar /> : null}
        <Outlet />
      </div>
    </UserContext>
  );
}
