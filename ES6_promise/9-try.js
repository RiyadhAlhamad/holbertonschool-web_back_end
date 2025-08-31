/* Executes the given mathFunction and stores the result in a queue.
   - If mathFunction throws an error, pushes the error message instead.
   - Always adds 'Guardrail was processed' at the end.
   - Returns the queue array. */

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
