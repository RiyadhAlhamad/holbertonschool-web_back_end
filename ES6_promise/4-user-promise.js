/* Returns a resolved Promise containing an object 
   with the provided firstName and lastName */

export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
