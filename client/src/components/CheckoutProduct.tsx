export default function CheckoutProduct({ product }) {
  return (
    <div className="checkout-product flex flex-gap-20" key={product.id}>
      <img
        src={`/api/uploads/${product.name.toLowerCase()}.avif`}
        alt=""
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
