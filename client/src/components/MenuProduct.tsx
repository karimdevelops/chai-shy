import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "@tanstack/react-router";

export default function MenuProduct({ product }) {
  const user = useContext(UserContext);
  const [isFlip, setIsFlip] = useState(false);
  const navigate = useNavigate();

  function addToCart(
    e: React.MouseEvent<HTMLButtonElement>,
    productId: number,
  ) {
    e.stopPropagation();
    if (user != "empty") {
      fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          productId: productId,
        }),
      });
    } else navigate({ to: "/login" });
  }

  return (
    <div
      className={
        isFlip
          ? "flip flex flex-column flex-center flex-gap-5 flip-container"
          : "flex flex-column flex-center flex-gap-5 flip-container"
      }
      key={product.id}
      onClick={() => (isFlip ? setIsFlip(false) : setIsFlip(true))}
    >
      <div className="card flip-card">
        <div className="flex flex-column flex-center front">
          <img
            src={`/api/uploads/${product.name.toLowerCase()}.avif`}
            alt=""
            height={165}
            width={"auto"}
          />
          <p className="product-price">${product.price}</p>
        </div>
        <div className="flex flex-column flex-center flex-gap-20 back">
          <p className="info product-info">{product.description}</p>
          <button
            className="btn-add-cart"
            onClick={(e) => {
              addToCart(e, product.id);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <p className="product-name">{product.name}</p>
    </div>
  );
}
