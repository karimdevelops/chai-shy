import { type CartItem } from "../contexts/CartContext";

interface Props {
  product: CartItem;
}

export default function CheckoutProduct({ product }: Props) {
  return (
    <div className="checkout-product flex flex-gap-20" key={product.product_id}>
      <img
        src={`/api/uploads/${product.name.toLowerCase().replaceAll(" ", "")}.avif`}
        alt="product"
        height={85}
        width={"auto"}
      />
      <div className="flex flex-column flex-gap-5">
        <h4 className="product-name">{product.name}</h4>
        <p className="product-price">Qty: {product.quantity}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
}
