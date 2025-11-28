import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api/api";
import { useCart } from "../context/CartContext";
import styles from "./ProductDetails.module.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/products/details/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error("Product details error:", err);
        setProduct(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (!product) return <div className={styles.empty}>Product not found</div>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url ?? product.imageUrl,
    }, qty);
    navigate("/cart");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src={
            product.image_url && product.image_url.startsWith("/images")
              ? `${import.meta.env.BASE_URL}${product.image_url}`
              : product.image_url || product.imageUrl
          }
          alt={product.name}
          className={styles.image}
          onError={(e) => (e.target.src = "/images/placeholder.png")}
        />
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.price}>₹{product.price}</div>

        <div className={styles.controls}>
          <label>
            Qty:
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
            />
          </label>

          <button className={styles.addBtn} onClick={handleAddToCart}>
            Add to Cart
          </button>

          <button className={styles.buyBtn} onClick={() => { handleAddToCart(); navigate("/checkout"); }}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}





// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../api/api";
// import styles from "./ProductDetails.module.css";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const nav = useNavigate();
//   const [p, setP] = useState(null);

//   useEffect(() => {
//     API.get(`/products/details/${id}`)
//       .then((res) => setP(res.data))
//       .catch(() => setP(null));
//   }, [id]);

//   const add = () => {
//     const cart = JSON.parse(localStorage.getItem("cart") || "[]");
//     const item = cart.find(c => c.id === p.id);
//     if (item) item.qty++;
//     else cart.push({ id: p.id, name: p.name, price: p.price, image: p.image_url, qty: 1 });

//     localStorage.setItem("cart", JSON.stringify(cart));
//     nav("/cart");
//   };

//   if (!p) return <div className={styles.loading}>Loading...</div>;

//   return (
//     <div className={styles.container}>
//       <div className={styles.left}>
//         <img src={p.image_url} alt={p.name} />
//       </div>

//       <div className={styles.right}>
//         <h1>{p.name}</h1>
//         <p className={styles.desc}>{p.description}</p>

//         <div className={styles.price}>₹{p.price}</div>

//         <button className={styles.buy} onClick={add}>
//           Buy Now
//         </button>

//         <div className={styles.info}>
//           Best For: {p.skin_type}
//         </div>
//       </div>
//     </div>
//   );
// }

