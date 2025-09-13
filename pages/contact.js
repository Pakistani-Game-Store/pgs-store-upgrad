import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Contact() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  function sendMessage(e){ e.preventDefault(); alert("Message sent (demo). We'll contact you soon."); setName(''); setEmail(''); setMessage(''); }

  return (
    <>
      <Header />
      <main className="container" style={{paddingTop:20}}>
        <h1>Contact Us</h1>
        <form onSubmit={sendMessage} style={{maxWidth:560}}>
          <input placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
          <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} />
          <div><button className="btn-primary" type="submit">Send Message</button></div>
        </form>
        <div style={{marginTop:20}} className="small muted">Email: pakistanigamestore@gmail.com • WhatsApp: 03147069848</div>
      </main>
      <Footer />
    </>
  );
}
