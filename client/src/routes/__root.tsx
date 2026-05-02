import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import useGetUser from "../hooks/useGetUser";
import UserContext from "../contexts/UserContext";
import Cart from "../components/Cart";
import CartContext, { type CartItem } from "../contexts/CartContext";
import { useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const location = useLocation();
  const user = useGetUser();
  const [cart, setCart] = useState<CartItem[]>([]);

  if (!user) {
    return <div></div>;
  }

  return (
    <UserContext value={user}>
      <CartContext value={{ cart, setCart }}>
        <div className="p-4 md:p-8">
          {location.pathname !== "/admin" ? <Navbar /> : null}
          <Cart />
          <Outlet />
        </div>
      </CartContext>
    </UserContext>
  );
}
