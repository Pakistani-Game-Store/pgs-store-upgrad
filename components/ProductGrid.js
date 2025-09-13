import ProductCard from "./ProductCard";

const demoProducts = [
  { id: 't1', name: "PGS T-Shirt White", price: 2499, priceUSD: 8.5, category: "Clothing", image: "https://via.placeholder.com/600x400?text=T-Shirt" },
  { id: 'h1', name: "PGS Hoodie Black", price: 3999, priceUSD: 13.5, category: "Clothing", image: "https://via.placeholder.com/600x400?text=Hoodie" },
  { id: 'b1', name: "PGS Tote Bag", price: 799, priceUSD: 2.7, category: "Accessories", image: "https://via.placeholder.com/600x400?text=Bag" },
  { id: 's1', name: "Sticker Pack", price: 199, priceUSD: 0.7, category: "Accessories", image: "https://via.placeholder.com/600x400?text=Sticker" },
  { id: 'cap1', name: "PGS Cap", price: 599, priceUSD: 2.0, category: "Accessories", image: "https://via.placeholder.com/600x400?text=Cap" },
  { id: 'bottle1', name: "Water Bottle", price: 899, priceUSD: 3.0, category: "Accessories", image: "https://via.placeholder.com/600x400?text=Bottle" },
  { id: 'l1', name: "Laptop Skin", price: 699, priceUSD: 2.4, category: "Accessories", image: "https://via.placeholder.com/600x400?text=Laptop+Skin" },
  { id: 'g1', name: "Gift Card 1000 PKR", price: 1000, priceUSD: 3.4, category: "Digital", image: "https://via.placeholder.com/600x400?text=Gift+Card" }
];

export default function ProductGrid({ filterCategory='' }) {
  const products = filterCategory ? demoProducts.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase()) : demoProducts;
  return (
    <div className="grid">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
