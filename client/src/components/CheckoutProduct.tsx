import { type CartItem } from "../contexts/CartContext";

interface Props {
  product: CartItem;
}

export default function CheckoutProduct({ product }: Props) {
  return (
    <div
      className="checkout-product flex items-center justify-between gap-5"
      key={product.product_id}
    >
      <div className="flex flex-col items-center">
        <img
          src={`/api/uploads/${product.name.toLowerCase().replaceAll(" ", "")}.avif`}
          alt="product"
          className="h-18 w-auto"
        />
        <h4 className="product-name">{product.name}</h4>
      </div>
      <div className="flex flex-col gap-2 text-right">
        <p className="product-price">${product.price}</p>
        <p className="product-price">Qty: {product.quantity}</p>
      </div>
    </div>
  );
}
