import { useContext, useEffect, useState } from "react";
import CartContext from "../contexts/CartContext";
import CheckoutProduct from "../components/CheckoutProduct";
import OrderConfirm from "../components/OrderConfirm";
import { getCartSubTotal } from "../utils/calc";

import "../styles/Checkout.css";
import UserContext from "../contexts/UserContext";
import FormInput from "../components/FormInput";
import Button from "../components/ThemeButton";

export default function Checkout() {
  const { cart, setCart } = useContext(CartContext)!;
  const [shipping, setShipping] = useState(0);
  const [activeId, setActiveId] = useState(1);
  const user = useContext(UserContext);
  const [orderConfirm, setOrderConfirm] = useState(false);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    async function fetchCartTotal() {
      setCartSubTotal(Number(getCartSubTotal(cart)));
    }
    fetchCartTotal();
  }, [user]);

  useEffect(() => {
    if (orderId) {
      async function setCartEmpty() {
        if (user == "empty") return;
        fetch("/api/cart/deleteAll", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            orderId,
          }),
        });
        setCart([]);
      }
      setCartEmpty();
    }
  }, [orderId]);

  async function getAddOrderId() {
    if (user == "empty" || cart.length == 0) return;

    setOrderConfirm(true);
    const res = await fetch("/api/order/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
      }),
    });
    const data = await res.json();
    setOrderId(data[0].id);
  }

  async function checkout() {
    getAddOrderId();
  }
  return (
    <>
      <div
        className={`checkout grid grid-cols-1 gap-5 md:grid-cols-[2fr_1fr] ${orderConfirm ? "blur" : ""}`}
      >
        <div className="details flex-column flex-gap-50 flex">
          <div className="flex-column flex-gap-20 flex">
            <h2>Address</h2>
            <form id="checkoutForm" action="/api/checkout">
              <div className="flex gap-10">
                <FormInput
                  name="address"
                  id="address"
                  type="text"
                  placeholder="Address"
                  required={true}
                />
                <FormInput
                  name="city"
                  id="city"
                  type="text"
                  placeholder="City"
                  required={true}
                />
              </div>
            </form>
          </div>
          <div className="flex-column flex-gap-20 flex">
            <h2>Shipping Method</h2>
            <ul className="method">
              <li
                className={`flex-sp-between flex ${activeId == 1 ? "active" : ""}`}
                onClick={() => {
                  setShipping(0);
                  setActiveId(1);
                }}
              >
                <p>Pickup</p>
                <p>$0.00</p>
              </li>
              <li
                className={`flex-sp-between flex ${activeId == 2 ? "active" : ""}`}
                onClick={() => {
                  setShipping(4.5);
                  setActiveId(2);
                }}
              >
                <p>Flat Shipping</p>
                <p>$4.50</p>
              </li>
              <li
                className={`flex-sp-between flex ${activeId == 3 ? "active" : ""}`}
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
          <div className="flex-column flex-gap-20 flex">
            <h2>Payment Method</h2>
            <ul className="method">
              <li className="active">Cash on delivery</li>
            </ul>
          </div>
        </div>
        <div className="summary flex flex-col gap-5">
          <h2 className="center-text cart-heading">Order Summary</h2>
          <div className="checkout-products">
            {cart != null
              ? cart.map((product) => (
                  <CheckoutProduct key={product.product_id} product={product} />
                ))
              : null}
          </div>
          <div className="flex-sp-between flex">
            <p>Cart Subtotal:</p>
            <p>${cartSubTotal}</p>
          </div>
          <div className="flex-sp-between flex">
            <p>Shipping:</p>
            <p>${shipping.toFixed(2)}</p>
          </div>
          <div className="flex-sp-between flex">
            <h4>Order Total: </h4>
            <h4>${(Number(cartSubTotal) + Number(shipping)).toFixed(2)}</h4>
          </div>
          <Button
            text="Place Order"
            onClick={() => {
              checkout();
            }}
          />
        </div>
      </div>
      {orderConfirm && orderId ? <OrderConfirm id={orderId} /> : null}
    </>
  );
}
