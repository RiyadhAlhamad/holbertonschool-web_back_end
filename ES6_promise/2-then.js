/* Handles a Promise by:
   - resolving to an object with status 200 and body 'success'
   - rejecting with a generic Error if the Promise fails
   - always logging 'Got a response from the API' */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
