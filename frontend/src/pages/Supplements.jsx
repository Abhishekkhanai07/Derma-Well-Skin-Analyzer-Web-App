import React from "react";
import supplements from "../data/supplements";
import { useCart } from "../context/CartContext";
import styles from "./Supplements.module.css";

export default function Supplements() {
  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Supplements</h1>

      <div className={styles.grid}>
        {supplements.map((s) => (
          <div className={styles.card} key={s.id}>

            <div className={styles.imgWrap}>
              <img src={s.image_url} className={styles.img} alt={s.name} />
            </div>

            <h3 className={styles.name}>{s.name}</h3>
            <p className={styles.desc}>{s.description}</p>
            <div className={styles.price}>₹{s.price}</div>

            {/* ⭐ Reactive Button */}
            <button
              className={`${styles.btn} ${s.added ? styles.added : ""}`}
              onClick={() => {
                addToCart(s);

                s.added = true;   // show success
                setTimeout(() => (s.added = false), 1200); // remove after 1.2 sec
              }}
            >
              {s.added ? "Added ✓" : "Add to Cart"}
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import API from "../api/api";
// import styles from "./Supplements.module.css";

// export default function Supplements() {
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     API.get("/supplements")
//       .then((r) => setItems(r.data))
//       .catch(() => setItems([]));
//   }, []);
//   return (
//     <div className={styles.container}>
//       <h2>Supplements</h2>
//       <div className={styles.grid}>
//         {items.map((s) => (
//           <div key={s.id} className={styles.card}>
//             <img src={s.image_url} alt={s.name} />
//             <h4>{s.name}</h4>
//             <p>{s.description}</p>
//             <div className={styles.price}>₹{s.price}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

