import { useState } from "react";

export default function MenuProduct({ product }) {
  const [isFlip, setIsFlip] = useState(false);

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
          <button className="btn-add-cart">Add to Cart</button>
        </div>
      </div>
      <p className="product-name">{product.name}</p>
    </div>
  );
}
