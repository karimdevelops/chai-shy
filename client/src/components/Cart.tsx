import { useContext, useEffect, useState } from "react";
import useGetCart from "../hooks/useGetCart";
import "../styles/Cart.css";
import CartContext from "../contexts/CartContext";
import UserContext from "../contexts/UserContext";

export default function Cart() {
  const user = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const [activeCart, setActiveCart] = useState(false);
  const dbCart = useGetCart();
  setCart(dbCart);

  useEffect(() => {
    async function updateCart() {
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
  }, [cart]);

  function incrementCart(id) {
    cart.map((x) => {
      if (x.product_id == id) return { ...x, quantity: ++x.quantity };
      return { ...x };
    });
    setCart([...cart]);
  }

  function decrementCart(id) {
    cart.map((x) => {
      if (x.product_id == id) return { ...x, quantity: --x.quantity };
      return { ...x };
    });
    console.log(cart);
    const newCart = cart.filter((x) => x.quantity > 0);
    setCart([...newCart]);
  }

  return (
    <>
      <div className="cart-toggle" onClick={() => setActiveCart(true)}>
        <span className="cart-count">
          {cart ? cart.reduce((total, item) => total + item.quantity, 0) : 0}
        </span>
        <img src="/icons/cart.svg" alt="cart" className="cart-logo" />
      </div>
      <div
        className={`container-cart flex flex-column flex-gap-20 ${activeCart ? "show-cart" : "hide-cart"}`}
      >
        <div className="flex flex-items-center">
          <h2 className="center-text cart-heading">Shopping Cart</h2>
          <div className="marginl-auto" onClick={() => setActiveCart(false)}>
            <img src="/icons/close.svg" alt="close" />
          </div>
        </div>
        <div className="cart-items">
          {cart
            ? cart.map((item) => (
                <div
                  className="cart-item flex flex-items-center flex-gap-5"
                  key={item.productId}
                >
                  <img
                    src={`/api/uploads/${item.name.toLowerCase()}.avif`}
                    alt=""
                    height={65}
                    width={"auto"}
                  />
                  <div>
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </div>
                  <div className="marginl-auto">
                    <div className="marginl-auto flex flex-end flex-gap-5">
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
                    <p className="info item-info">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className="flex flex-column flex-gap-20 margint-auto padding-2">
          <h3>
            Subtotal: $
            {cart
              ? cart
                  .reduce(
                    (total, item) => total + Number(item.price) * item.quantity,
                    0,
                  )
                  .toFixed(2)
              : 0}
          </h3>
          <button className="theme-btn btn">Checkout</button>
        </div>
      </div>
    </>
  );
}
