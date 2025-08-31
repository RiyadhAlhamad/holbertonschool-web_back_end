/* A Promise requires an executor function with resolve and reject */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => [resolve, reject]);
}
