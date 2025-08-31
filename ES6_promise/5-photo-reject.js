/* Returns a rejected Promise with an Error stating that the given filename cannot be processed */

export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
