import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import useGetUser from "../hooks/useGetUser";
import UserContext from "../contexts/UserContext";
import Cart from "../components/Cart";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();
  const user = useGetUser();

  if (!user) {
    return <div></div>;
  }

  return (
    <UserContext value={user}>
      <div className="main">
        {location.pathname !== "/admin" ? <Navbar /> : null}
        <Cart />
        <Outlet />
      </div>
    </UserContext>
  );
}
