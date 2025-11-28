// import React, { useEffect, useState } from "react";
// import API from "../api/api";
// import { useParams, Link } from "react-router-dom";
// import styles from "./Products.module.css";

// export default function Products() {
//   const { skinType } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Convert any incoming skin type to lowercase to match database values
//     const normalized = skinType ? skinType.toLowerCase() : null;

//     // Correct backend URL
//     const url = normalized ? `/products/skin/${normalized}` : "/products";

//     API.get(url)
//       .then((res) => setProducts(res.data))
//       .catch(() => setProducts([]))
//       .finally(() => setLoading(false));
//   }, [skinType]);

//   if (loading) return <div className={styles.loading}>Loading products...</div>;
//   if (!products.length) return <div className={styles.empty}>No products found.</div>;

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>
//         {skinType ? `Products — ${skinType}` : "All Products"}
//       </h1>

//       <div className={styles.grid}>
//         {products.map((p) => (
//           <div className={styles.card} key={p.id}>
//             <div className={styles.imgWrap}>
//               <img
//                 src={p.image_url.startsWith("/images")
//                   ? `${import.meta.env.BASE_URL}${p.image_url}`
//                   : p.image_url}
//                 alt={p.name}
//                 className={styles.img}
//               />
//             </div>

//             <div className={styles.meta}>
//               <h3 className={styles.name}>{p.name}</h3>
//               <p className={styles.desc}>{p.description}</p>

//               <div className={styles.bottom}>
//                 <div className={styles.price}>₹{p.price}</div>
//                 <Link className={styles.btn} to={`/products/details/${p.id}`}>
//                   View
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useParams, Link } from "react-router-dom";
import styles from "./Products.module.css";

export default function Products() {
  const { skinType } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = skinType ? `/products/${skinType}` : "/products";

    API.get(url)
      .then((res) => setProducts(res.data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [skinType]);

  if (loading) return <div className={styles.loading}>Loading products...</div>;
  if (!products.length) return <div className={styles.empty}>No products found.</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {skinType ? `Products — ${skinType}` : "All Products"}
      </h1>

      <div className={styles.grid}>
        {products.map((p) => (
          <div className={styles.card} key={p.id}>
            <div className={styles.imgWrap}>
              <img src={p.image_url} className={styles.img} alt={p.name} />
            </div>

            <div className={styles.meta}>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.description}</p>

              <div className={styles.bottom}>
                <div className={styles.price}>₹{p.price}</div>
                <Link className={styles.btn} to={`/products/details/${p.id}`}>
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

