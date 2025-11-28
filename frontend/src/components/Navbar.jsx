import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>DermaWell</Link>

      <div className={styles.links}>
        <Link to="/quiz">Quiz</Link>
        <Link to="/products/Oily">Products</Link>
        <Link to="/supplements">Supplements</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login" className={styles.btnPrimary}>Login</Link>
      </div>
    </nav>
  );
}
