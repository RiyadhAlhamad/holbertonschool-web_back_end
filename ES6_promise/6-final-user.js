/* Handles profile signup by running signUpUser and uploadPhoto in parallel.
   - Uses Promise.allSettled to capture both resolved and rejected results.
   - If a Promise is rejected, replaces the 'reason' with a string error message.
   - Returns an array of results (each with status and value). */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
      for (const x of res) {
        if (x.status === 'rejected') {
          x.value = `Error: ${x.reason.message}`;
          delete x.reason;
        }
      }
      return res;
    });
}
