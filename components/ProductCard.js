import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="meta">{product.category}</div>
      <div className="price">PKR {product.price} • ${product.priceUSD}</div>
      <div className="actions">
        <button className="btn-small btn-add" onClick={() => addToCart(product)}>Add</button>
        <a href="/checkout" className="btn-small btn-buy">Buy Now</a>
      </div>
    </div>
  );
}
