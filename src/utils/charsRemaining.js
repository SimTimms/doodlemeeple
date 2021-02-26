export default function charsRemaining(strIn, strId) {
  const requiredCharLimits = { startDate: 3, cost: 2 };
  return requiredCharLimits[strId] - strIn.length;
}
