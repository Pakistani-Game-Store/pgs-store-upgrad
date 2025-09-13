import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, subtotal } = useCart();

  return (
    <>
      <Header />
      <main className="container" style={{paddingTop:20}}>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty — <Link href="/shop">Go shopping</Link></p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} style={{display:'flex',gap:12,alignItems:'center',marginBottom:12,background:'rgba(255,255,255,0.01)',padding:12,borderRadius:10}}>
                <img src={item.image} style={{width:100,height:80,objectFit:'cover',borderRadius:8}}/>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700}}>{item.name}</div>
                  <div className="small muted">PKR {item.price} • ${item.priceUSD}</div>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6}}>
                  <input type="number" value={item.qty} onChange={(e)=>updateQty(item.id, Number(e.target.value))} style={{width:70,padding:6}} />
                  <button className="btn-small btn-add" onClick={()=>removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div style={{marginTop:18,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div className="small muted">Subtotal</div>
              <div style={{fontWeight:800}}>PKR {subtotal}</div>
            </div>
            <div style={{marginTop:14}}>
              <Link href="/checkout"><a className="btn-primary">Proceed to Checkout</a></Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
