import { createContext, type Dispatch, type SetStateAction } from "react";

export interface CartItem {
  product_id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartContexType {
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContexType | null>(null);
export default CartContext;
