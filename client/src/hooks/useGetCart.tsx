import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

type Cart = {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
};

export default function useGetCart() {
  const user = useContext(UserContext);
  const [cart, setCart] = useState<Cart[] | null>(null);

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
  console.log(cart);
  return cart;
}
