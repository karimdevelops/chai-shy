import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "@tanstack/react-router";
import CartContext from "../contexts/CartContext";
import { type Product } from "../hooks/useMenu";
import Button from "./ThemeButton";

interface Props {
  product: Product;
}

export default function MenuProduct({ product }: Props) {
  const user = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext)!;
  const [isFlip, setIsFlip] = useState(false);
  const navigate = useNavigate();

  function addToCart(e: React.MouseEvent<HTMLButtonElement>, product: Product) {
    e.stopPropagation();
    if (user != "empty") {
      const oldProduct = cart.find((x) => x.product_id == product.id);
      if (oldProduct) {
        cart.map((x) => {
          if (x.product_id == oldProduct.product_id) {
            return { ...x, quantity: ++x.quantity };
          }
          return { ...x };
        });
        setCart([...cart]);
      } else {
        const newProduct = {
          product_id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        };
        setCart([...cart, newProduct]);
      }
    } else navigate({ to: "/login" });
  }

  return (
    <div
      className={
        isFlip
          ? "flip flip-container flex flex-col items-center justify-center gap-2"
          : "flip-container flex flex-col items-center justify-center gap-2"
      }
      key={product.id}
      onClick={() => (isFlip ? setIsFlip(false) : setIsFlip(true))}
    >
      <div className="card flip-card">
        <div className="flex-column flex-center front flex">
          <img
            src={`/api/uploads/${product.name.toLowerCase().replaceAll(" ", "")}.avif`}
            alt=""
            className="h-44 w-auto"
          />
          <p className="product-price">${product.price}</p>
        </div>
        <div className="flex-column flex-center flex-gap-20 back flex">
          <p className="info product-info">{product.description}</p>
          <Button
            text="Add to Cart"
            onClick={(e) => {
              addToCart(e, product);
            }}
          ></Button>
        </div>
      </div>
      <p className="product-name">{product.name}</p>
    </div>
  );
}
