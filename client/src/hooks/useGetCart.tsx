import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import CartContext from "../contexts/CartContext";

type Cart = {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
};

export default function useGetCart() {
  const user = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchUser() {
      if (user != "empty") {
        const results = await fetch("/api/cart/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
          }),
        });
        const data = await results.json();
        setCart(data);
      }
    }

    fetchUser();
  }, [user]);
  return cart;
}
