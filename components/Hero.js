export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-left">
          <h1>Welcome to Pakistan Game Store</h1>
          <p>Official merchandise, accessories and digital products — delivered across Pakistan. Pay with Easypaisa, JazzCash, or COD.</p>
          <div className="cta">
            <a href="/shop" className="btn-primary">Shop Now</a>
            <a href="/about" className="btn-ghost">Learn More</a>
          </div>
        </div>
        <div style={{maxWidth:360}}>
          <img src="/logo.png" alt="logo" style={{width:"100%",filter:"drop-shadow(0 8px 24px rgba(0,0,0,0.6))"}}/>
        </div>
      </div>
    </section>
  );
}
