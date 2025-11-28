import styles from "./ProductCard.module.css";

export default function ProductCard({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb}>{item.brand[0]}</div>
      <div className={styles.info}>
        <h3>{item.name}</h3>
        <p>{item.category} • {item.brand}</p>
      </div>
    </div>
  );
}
