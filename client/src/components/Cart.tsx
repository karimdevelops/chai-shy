import { Link, useLocation } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";
import CartContext from "../contexts/CartContext";
import UserContext from "../contexts/UserContext";
import useGetCart from "../hooks/useGetCart";
import { getCartSubTotal } from "../utils/calc";

import "../styles/Cart.css";

export default function Cart() {
  const user = useContext(UserContext);
  const location = useLocation();
  const notAllowed = ["/checkout", "/admin"];
  const { cart, setCart } = useContext(CartContext)!;
  const [activeCart, setActiveCart] = useState(false);
  useGetCart();

  useEffect(() => {
    async function updateCart() {
      if (user == "empty") return;
      fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          cart: cart,
        }),
      });
    }
    updateCart();
  }, [cart, user]);

  function incrementCart(id: number) {
    cart.map((x) => {
      if (x.product_id == id) return { ...x, quantity: ++x.quantity };
      return { ...x };
    });
    setCart([...cart]);
  }

  function decrementCart(id: number) {
    cart.map((x) => {
      if (x.product_id == id) return { ...x, quantity: --x.quantity };
      return { ...x };
    });
    const newCart = cart.filter((x) => {
      if (x.quantity == 0) {
        fetch("/api/cart/delete", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: x.product_id,
          }),
        });
      }
      return x.quantity > 0;
    });
    setCart([...newCart]);
  }

  return (
    <>
      {!notAllowed.includes(location.pathname) && user != "empty" ? (
        <div className="cart-toggle" onClick={() => setActiveCart(true)}>
          <span className="cart-count">
            {cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0}
          </span>
          <img src="/icons/cart.svg" alt="cart" className="cart-logo" />
        </div>
      ) : null}
      <div
        className={`container-cart flex-column flex-gap-20 flex ${activeCart ? "show-cart" : "hide-cart"}`}
      >
        <div className="flex-items-center flex p-2">
          <h2 className="font-playfair p-2 text-center text-2xl font-bold">
            Shopping Cart
          </h2>
          <div className="marginl-auto" onClick={() => setActiveCart(false)}>
            <img src="/icons/close.svg" alt="close" />
          </div>
        </div>
        <div className="cart-items">
          {cart
            ? cart.map((item) => (
                <div
                  className="cart-item flex-items-center flex-gap-5 flex"
                  key={item.product_id}
                >
                  <img
                    src={`/api/uploads/${item.name.toLowerCase().replaceAll(" ", "")}.avif`}
                    alt=""
                    height={65}
                    width={"auto"}
                  />
                  <div>
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </div>
                  <div className="marginl-auto">
                    <div className="flex-column flex-sp-between flex">
                      <div className="marginl-auto">
                        <img
                          src="/icons/plus.svg"
                          alt="Increment"
                          onClick={() => {
                            incrementCart(item.product_id);
                          }}
                        />
                        <img
                          src="/icons/minus.svg"
                          alt="Decrement"
                          onClick={() => {
                            decrementCart(item.product_id);
                          }}
                        />
                      </div>
                      <p className="info item-info">Qty: {item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="flex-column flex-gap-20 margint-auto padding-2 flex">
          <h3>Subtotal: ${getCartSubTotal(cart)}</h3>
          <Link
            className="bg-app-primary text-app-background rounded-full px-5 py-2 text-center text-lg font-bold"
            to="/checkout"
            onClick={() => setActiveCart(false)}
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  );
}
