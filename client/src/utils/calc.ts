import { type CartItem } from "../contexts/CartContext";

export function getCartSubTotal(cart: CartItem[]) {
  return cart
    ? cart
        .reduce(
          (total: number, item) => total + Number(item.price) * item.quantity,
          0,
        )
        .toFixed(2)
    : 0;
}
