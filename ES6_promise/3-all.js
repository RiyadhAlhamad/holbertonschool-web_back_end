/* Attempts to sign up a user by uploading a photo and creating the user.
   - Uses Promise.all to run both operations in parallel.
   - On success, logs the photo body and user full name.
   - On failure, logs 'Signup system offline'. */
   
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((values) => {
    console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
