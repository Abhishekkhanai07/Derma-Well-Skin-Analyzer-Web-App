export function calculateSkinType(answers) {
  const score = answers.reduce((a, b) => a + b, 0);

  if (score >= 15) return "Oily";
  if (score >= 10) return "Combination";
  if (score >= 6) return "Dry";
  return "Sensitive";
}
