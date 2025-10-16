"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8080/products")
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
