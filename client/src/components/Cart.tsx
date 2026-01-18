import useGetCart from "../hooks/useGetCart";
import "../styles/Cart.css";

export default function Cart() {
  const cart = useGetCart();
  console.log(cart);
  return (
    <>
      <div className="cart-toggle">
        <img src="/icons/cart.svg" alt="cart" className="logo-cart" />
      </div>
      <div className="container-cart flex flex-column flex-gap-20">
        <h2 className="center-text cart-heading">Shopping Cart</h2>
        <div className="cart-items">
          {cart
            ? cart.map((item) => (
                <div className="cart-item flex flex-gap-5">
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
                    <button>+</button>
                    <p className="info item-info">Quantity: </p>
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
                  .reduce((total, item) => total + Number(item.price), 0)
                  .toFixed(2)
              : 0}
          </h3>
          <button className="theme-btn btn">Checkout</button>
        </div>
      </div>
    </>
  );
}
