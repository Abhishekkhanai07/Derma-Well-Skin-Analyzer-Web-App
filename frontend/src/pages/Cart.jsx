// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Cart.css";

// const UPI_ID = "7892840229@upi"; // if you want different format, replace

// export default function Cart() {
//   const [cart, setCart] = useState([]);
//   const nav = useNavigate();

//   useEffect(() => {
//     setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
//   }, []);

//   const update = (id, delta) => {
//     const copy = cart.map((c) => c.id === id ? { ...c, qty: Math.max(1, c.qty + delta) } : c);
//     setCart(copy); localStorage.setItem("cart", JSON.stringify(copy));
//   };

//   const remove = (id) => {
//     const copy = cart.filter((c) => c.id !== id);
//     setCart(copy); localStorage.setItem("cart", JSON.stringify(copy));
//   };

//   const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

//   const checkout = () => {
//     // create UPI deep link: payee@upi with amount and note
//     const amount = total.toFixed(2);
//     const upiText = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=DermaWell&am=${amount}&cu=INR&tn=DermaWell+Payment`;
//     // generate QR via Google Chart API
//     const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=350x350&chl=${encodeURIComponent(upiText)}`;
//     // Save current qr url so checkout page can display
//     localStorage.setItem("dermawell_qr", qrUrl);
//     nav("/checkout");
//   };

//   if (!cart.length) return <div className="cart-empty">Your cart is empty.</div>;

//   return (
//     <div className="cart-wrap">
//       <h2>Your Cart</h2>
//       <div className="cart-list">
//         {cart.map((c) => (
//           <div key={c.id} className="cart-item">
//             <img src={c.image} alt={c.name}/>
//             <div className="ci-info">
//               <h4>{c.name}</h4>
//               <div>₹{c.price} × {c.qty} = <strong>₹{c.price * c.qty}</strong></div>
//               <div className="ci-actions">
//                 <button onClick={() => update(c.id, -1)}>-</button>
//                 <button onClick={() => update(c.id, +1)}>+</button>
//                 <button onClick={() => remove(c.id)}>Remove</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="cart-sum">
//         <div>Total: <strong>₹{total}</strong></div>
//         <button className="checkout-btn" onClick={checkout}>Checkout (Pay via UPI)</button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const { items, removeFromCart, updateQty, clearCart, total } = useCart();
  const navigate = useNavigate();

  if (!items.length) return <div className={styles.empty}>Your cart is empty.</div>;

  return (
    <div className={styles.container}>
      <h2>Your Cart</h2>

      <div className={styles.list}>
        {items.map((it) => (
          <div key={it.id} className={styles.row}>
            <img
              src={
                it.image_url && it.image_url.startsWith("/images")
                  ? `${import.meta.env.BASE_URL}${it.image_url}`
                  : it.image_url
              }
              alt={it.name}
              className={styles.thumb}
              onError={(e) => (e.target.src = "/images/placeholder.png")}
            />

            <div className={styles.info}>
              <div className={styles.name}>{it.name}</div>
              <div className={styles.price}>₹{it.price}</div>

              <div className={styles.qty}>
                Qty:
                <input
                  type="number"
                  min="1"
                  value={it.qty}
                  onChange={(e) => updateQty(it.id, Math.max(1, Number(e.target.value)))}
                />
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.remove} onClick={() => removeFromCart(it.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <div>Total: <strong>₹{total}</strong></div>
        <div className={styles.buttons}>
          <button className={styles.clear} onClick={() => clearCart()}>Clear Cart</button>
          <button className={styles.checkout} onClick={() => navigate("/checkout")}>Checkout</button>
        </div>
      </div>
    </div>
  );
}
