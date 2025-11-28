import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import styles from "./Quiz.module.css";

export default function Quiz() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({
    skinFeel: "",
    oilyMidday: "",
    redness: "",
  });

  const handleSelect = (question, value) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const handleSubmit = async () => {
    if (!answers.skinFeel || !answers.oilyMidday || !answers.redness) {
      alert("Please answer all questions!");
      return;
    }

    try {
      const res = await API.post("/quiz/result", answers);

      // ⭐ FIX → always convert skinType to lowercase
      const skin = res.data.skinType.toLowerCase();

      navigate(`/products/${skin}`);
    } catch (err) {
      console.error(err);
      alert("Error submitting quiz");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skin Analyzer Quiz</h1>

      {/* Question 1 */}
      <div className={styles.card}>
        <h3>How does your skin feel after washing?</h3>
        <div className={styles.options}>
          {["Dry", "Normal", "Oily"].map((option) => (
            <button
              key={option}
              className={
                answers.skinFeel === option ? styles.selected : styles.optionBtn
              }
              onClick={() => handleSelect("skinFeel", option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Question 2 */}
      <div className={styles.card}>
        <h3>Do you get oily midday?</h3>
        <div className={styles.options}>
          {["No", "Sometimes", "Yes"].map((option) => (
            <button
              key={option}
              className={
                answers.oilyMidday === option ? styles.selected : styles.optionBtn
              }
              onClick={() => handleSelect("oilyMidday", option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Question 3 */}
      <div className={styles.card}>
        <h3>Do you face redness often?</h3>
        <div className={styles.options}>
          {["Rarely", "Sometimes", "Always"].map((option) => (
            <button
              key={option}
              className={
                answers.redness === option ? styles.selected : styles.optionBtn
              }
              onClick={() => handleSelect("redness", option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button className={styles.submitBtn} onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
}



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";
// import styles from "./Quiz.module.css";

// export default function Quiz() {
//   const navigate = useNavigate();

//   const [answers, setAnswers] = useState({
//     skinFeel: "",
//     oilyMidday: "",
//     redness: "",
//   });

//   const handleSelect = (question, value) => {
//     setAnswers((prev) => ({ ...prev, [question]: value }));
//   };

//   const handleSubmit = async () => {
//     if (!answers.skinFeel || !answers.oilyMidday || !answers.redness) {
//       alert("Please answer all questions!");
//       return;
//     }

//     try {
//       const res = await API.post("/quiz/result", answers);
//       navigate(`/products/${res.data.skinType}`);
//     } catch (err) {
//       console.error(err);
//       alert("Error submitting quiz");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Skin Analyzer Quiz</h1>

//       {/* Question 1 */}
//       <div className={styles.card}>
//         <h3>How does your skin feel after washing?</h3>
//         <div className={styles.options}>
//           {["Dry", "Normal", "Oily"].map((option) => (
//             <button
//               key={option}
//               className={
//                 answers.skinFeel === option
//                   ? styles.selected
//                   : styles.optionBtn
//               }
//               onClick={() => handleSelect("skinFeel", option)}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Question 2 */}
//       <div className={styles.card}>
//         <h3>Do you get oily midday?</h3>
//         <div className={styles.options}>
//           {["No", "Sometimes", "Yes"].map((option) => (
//             <button
//               key={option}
//               className={
//                 answers.oilyMidday === option
//                   ? styles.selected
//                   : styles.optionBtn
//               }
//               onClick={() => handleSelect("oilyMidday", option)}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Question 3 */}
//       <div className={styles.card}>
//         <h3>Do you face redness often?</h3>
//         <div className={styles.options}>
//           {["Rarely", "Sometimes", "Always"].map((option) => (
//             <button
//               key={option}
//               className={
//                 answers.redness === option
//                   ? styles.selected
//                   : styles.optionBtn
//               }
//               onClick={() => handleSelect("redness", option)}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Submit */}
//       <button className={styles.submitBtn} onClick={handleSubmit}>
//         Submit Quiz
//       </button>
//     </div>
//   );
// }
