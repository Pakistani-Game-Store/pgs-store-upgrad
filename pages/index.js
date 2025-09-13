import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <h2 style={{marginBottom:8}}>Featured</h2>
        <ProductGrid />
      </div>
      <Footer />
    </>
  );
}
