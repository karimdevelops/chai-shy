import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import CheckoutProduct from "../components/CheckoutProduct";
import { getCartSubTotal } from "../utils/calc";

import "../styles/Checkout.css";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [shipping, setShipping] = useState(0);
  const cartSubTotal = getCartSubTotal(cart);

  return (
    <div className="grid grid-2fr-1fr checkout">
      <div className="details">
        <h2>Address</h2>
        <form action="/api/checkout">
          <input type="text" />
        </form>
      </div>
      <div className="summary flex flex-column flex-gap-20">
        <h2 className="center-text cart-heading">Order Summary</h2>
        <div className="checkout-products">
          {cart != null
            ? cart.map((product) => (
                <CheckoutProduct key={product.id} product={product} />
              ))
            : null}
        </div>
        <div className="flex flex-sp-between">
          <p>Cart Subtotal:</p>
          <p>${cartSubTotal}</p>
        </div>
        <div className="flex flex-sp-between">
          <p>Shipping:</p>
          <p>${shipping}</p>
        </div>
        <div className="flex flex-sp-between">
          <h4>Order Total: </h4>
          <h4>${cartSubTotal + shipping}</h4>
        </div>
        <button className="theme-btn btn">Place Order</button>
      </div>
    </div>
  );
}
