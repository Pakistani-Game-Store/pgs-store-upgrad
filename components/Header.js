import Link from "next/link";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

export default function Header() {
  const [q, setQ] = useState("");
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="inner">
        <div className="brand-wrap">
          <img src="/logo.png" className="logo" alt="PGS logo" />
          <div className="brand-title">Pakistan Game Store</div>
          <div className="tagline">Play • Wear • Own</div>
        </div>

        <nav className="nav">
          <Link href="/"><a>Home</a></Link>
          <Link href="/shop"><a>Shop</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </nav>

        <div style={{display:"flex",alignItems:"center",gap:10,marginLeft:12}}>
          <div className="search">
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search products..." />
          </div>
          <Link href="/cart"><a className="cart-btn">Cart ({cart.length})</a></Link>
        </div>
      </div>
    </header>
  );
}
