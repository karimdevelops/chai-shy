import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import CheckoutProduct from "../components/CheckoutProduct";
import { getCartSubTotal } from "../utils/calc";

import "../styles/Checkout.css";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [shipping, setShipping] = useState(0);
  const [activeId, setActiveId] = useState(0);
  const cartSubTotal = getCartSubTotal(cart);

  return (
    <div className="grid grid-2fr-1fr grid-gap-20 checkout">
      <div className="details flex flex-column flex-gap-50">
        <div className="flex flex-column flex-gap-20">
          <h2>Address</h2>
          <form action="/api/checkout">
            <div className="flex flex-gap-50">
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="City" />
            </div>
          </form>
        </div>
        <div>
          <h2>Shipping Method</h2>
          <ul className="method">
            <li
              className={`flex flex-sp-between ${activeId == 1 ? "active" : ""}`}
              onClick={() => {
                setShipping(0);
                setActiveId(1);
              }}
            >
              <p>Pickup</p>
              <p>$0.00</p>
            </li>
            <li
              className={`flex flex-sp-between ${activeId == 2 ? "active" : ""}`}
              onClick={() => {
                setShipping(4.5);
                setActiveId(2);
              }}
            >
              <p>Flat Shipping</p>
              <p>$4.50</p>
            </li>
            <li
              className={`flex flex-sp-between ${activeId == 3 ? "active" : ""}`}
              onClick={() => {
                setShipping(22);
                setActiveId(3);
              }}
            >
              <p>Express Shipping</p>
              <p>$22.00</p>
            </li>
          </ul>
        </div>
        <div>
          <h2>Payment Method</h2>
          <ul className="method">
            <li className="active">Cash on delivery</li>
          </ul>
        </div>
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
          <p>${shipping.toFixed(2)}</p>
        </div>
        <div className="flex flex-sp-between">
          <h4>Order Total: </h4>
          <h4>${(Number(cartSubTotal) + Number(shipping)).toFixed(2)}</h4>
        </div>
        <button className="theme-btn btn">Place Order</button>
      </div>
    </div>
  );
}
