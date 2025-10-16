"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://a7f9dd86-be2d-4675-b58a-58ea418426a5-00-35ui0v0r62kqa.sisko.replit.dev/")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "orange" }}>PGS Store 🛒</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        {products.map((p, idx) => (
          <div key={idx} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "10px" }}>
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <strong>${p.price}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
