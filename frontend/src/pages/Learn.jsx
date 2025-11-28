import styles from "./Learn.module.css";

export default function Learn() {
  const articles = [
    {
      title: "How to Build a Basic Skincare Routine",
      desc: "A good routine includes 3 steps: Cleanser → Moisturizer → Sunscreen. This protects and nourishes your skin daily.",
    },
    {
      title: "Myths About Oily Skin",
      desc: "Oily skin still needs moisturizer. Skipping it makes skin produce more oil. Use lightweight gel-based moisturizers.",
    },
    {
      title: "Understanding Dry Skin",
      desc: "Dry skin lacks moisture. Use hydrating cleansers and thick moisturizers with ceramides and hyaluronic acid.",
    },
    {
      title: "Why Sunscreen Is Important",
      desc: "80% of skin aging is caused by sun damage. Apply sunscreen every morning—even indoors.",
    },
  ];

  return (
    <div className="container">
      <h2 className={styles.title}>Learn About Skincare</h2>

      <div className={styles.grid}>
        {articles.map((item, i) => (
          <div key={i} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className={styles.videoTitle}>Watch & Learn</h2>

      <div className={styles.videoSection}>
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/5h0Uqb1h8fA"
          title="Skincare Education Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}
