/* Divides numerator by denominator.
   - Throws an Error if denominator is 0.
   - Otherwise returns the division result. */

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
