import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('');
  const [payment,setPayment] = useState('');

  async function placeOrder() {
    if (!name || !phone || !payment) return alert("Fill name, phone and select payment method.");
    // For now we just show success and clear cart — later we can wire API/email/db
    alert("Order placed! We'll contact you to confirm payment. (Demo)");
    clearCart();
  }

  return (
    <>
      <Header />
      <main className="container" style={{paddingTop:20}}>
        <h1>Checkout</h1>
        <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:16}}>
          <div>
            <label>Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            <label>Phone</label>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <label>Address</label>
            <textarea value={address} onChange={(e)=>setAddress(e.target.value)} />
            <label>Payment method</label>
            <select value={payment} onChange={(e)=>setPayment(e.target.value)}>
              <option value="">Select</option>
              <option value="Easypaisa">Easypaisa - 03147069848 (Gulam Hasnain)</option>
              <option value="JazzCash">JazzCash - 03147069848 (Gulam Hasnain)</option>
              <option value="Sadapay">Sadapay - 03147069848</option>
              <option value="FirstPay">FirstPay - 03127748268 (Muhammad Ibrar)</option>
              <option value="Opay">Opay - 03127746268 (Muhammad Ibrar)</option>
              <option value="ABHI">ABHI - 03127748268 (Muhammad Ibrar)</option>
              <option value="COD">Cash on Delivery</option>
            </select>
            <div style={{marginTop:12}}>
              <button onClick={placeOrder} className="btn-primary">Place Order</button>
            </div>
          </div>

          <aside style={{background:'#061018',padding:14,borderRadius:10}}>
            <h3>Order summary</h3>
            {cart.map(it => <div key={it.id} style={{display:'flex',justifyContent:'space-between',padding:'8px 0'}}>{it.name}<span>PKR {it.price * it.qty}</span></div>)}
            <hr style={{borderColor:'rgba(255,255,255,0.04)'}}/>
            <div style={{display:'flex',justifyContent:'space-between',fontWeight:800}}>Total <span>PKR {subtotal}</span></div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
