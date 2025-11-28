// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Checkout.css";

// export default function Checkout() {
//   const nav = useNavigate();
//   const qr = localStorage.getItem("dermawell_qr");

//   const done = () => {
//     localStorage.removeItem("cart");
//     localStorage.removeItem("dermawell_qr");
//     nav("/products");
//   };

//   return (
//     <div className="co-wrap">
//       <h2>Checkout — Scan to Pay (UPI)</h2>
//       <div className="co-box">
//         {qr ? <img src={qr} alt="QR" /> : <div className="co-empty">No payment QR available</div>}
//         <p>UPI: <strong>7892840229</strong></p>
//         <button onClick={done} className="co-done">I've paid (Simulate)</button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();

  if (!items.length) return <div className={styles.empty}>Your cart is empty.</div>;

  // UPI payee - using phone@upi format; replace if you use a VPA
  const upiPayee = "7892840229@upi";
  const amount = total;
  const note = encodeURIComponent("DermaWell purchase");
  const upiString = `upi://pay?pa=${upiPayee}&pn=DermaWell&am=${amount}&tn=${note}&cu=INR`;

  // public qr generator (for demo)
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiString)}`;

  const placeOrder = () => {
    // In production you'd POST an order to backend here.
    alert("Order placed. Please scan QR and pay using your UPI app.");
    clearCart();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h2>Checkout</h2>

      <div className={styles.grid}>
        <div className={styles.left}>
          <h3>Order Summary</h3>
          <ul className={styles.items}>
            {items.map(it => (
              <li key={it.id}>
                <span>{it.name} x {it.qty}</span>
                <strong>₹{(it.price || 0) * it.qty}</strong>
              </li>
            ))}
          </ul>

          <div className={styles.total}>Total: ₹{total}</div>
          <button className={styles.place} onClick={placeOrder}>Place Order</button>
        </div>

        <div className={styles.right}>
          <h3>Pay with UPI</h3>
          <img src={qrUrl} alt="UPI QR" className={styles.qr} />
          <p>Scan the QR using any UPI app and pay ₹{total}</p>
          <p className={styles.note}><strong>UPI ID:</strong> 7892840229</p>
        </div>
      </div>
    </div>
  );
}
