import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className="container">
      <h2 className={styles.title}>Contact Us</h2>

      <form className={styles.form}>
        <input placeholder="Your Name" className={styles.input} />
        <input placeholder="Your Email" className={styles.input} />
        <textarea rows="4" className={styles.textarea} placeholder="Your message"></textarea>

        <button className={styles.submit}>Send Message</button>
      </form>

      <p className={styles.infoLine}>
        Need help? <Link to="/login">Login</Link> to contact support
      </p>
    </div>
  );
}
