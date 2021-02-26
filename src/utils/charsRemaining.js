export default function charsRemaining(strIn, strId) {
  if (!strIn) {
    return 0;
  }
  const requiredCharLimits = { startDate: 3, cost: 2, notes: 0 };
  return requiredCharLimits[strId] - strIn.length;
}
