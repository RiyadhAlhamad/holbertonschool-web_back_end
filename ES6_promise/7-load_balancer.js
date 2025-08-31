/* Returns a Promise that resolves or rejects as soon as 
   either chinaDownload or USDownload settles (Promise.race) */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
