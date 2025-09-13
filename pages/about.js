import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <main className="container" style={{paddingTop:20}}>
        <h1>About Pakistan Game Store</h1>
        <p className="muted">PGS is a small brand focused on gaming lifestyle — printed clothes, accessories and digital products for gamers across Pakistan. We believe in quality, fast delivery and great customer support.</p>
        <h3 style={{marginTop:18}}>Our mission</h3>
        <p className="muted">Deliver curated gaming merch that players love to wear and use.</p>
      </main>
      <Footer />
    </>
  );
}
