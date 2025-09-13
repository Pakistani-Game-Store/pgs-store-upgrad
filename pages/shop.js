import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Shop() {
  return (
    <>
      <Header />
      <div style={{paddingTop:28}} className="container">
        <h1>Shop</h1>
        <div style={{marginTop:8, marginBottom:12}} className="categories">
          <div className="category">All</div>
          <div className="category">Clothing</div>
          <div className="category">Accessories</div>
          <div className="category">Digital</div>
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </>
  );
}
