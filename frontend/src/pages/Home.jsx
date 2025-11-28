import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={`container ${styles.hero}`}>
      <h1 className={styles.title}>Know Your Skin. Nourish It Better.</h1>
      <p className={styles.subtitle}>Smart recommendations for you.</p>

      <Link to="/quiz" className={styles.btnStart}>
        Start Analyzer
      </Link>
    </div>
  );
}
