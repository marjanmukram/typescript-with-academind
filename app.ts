// Enums
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// const person = {
//   name: "Marjan",
//   age: 22,
//   hobbies: ["Sports", "Cooking"],
//   role: ADMIN,
// };

// console.log(person.role);

//

// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

// const person = {
//   name: "Marjan",
//   age: 22,
//   hobbies: ["Sports", "Cooking"],
//   role: Role.ADMIN,
// };

// console.log(person.role);

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Marjan",
  age: 22,
  hobbies: ["Sports", "Cooking"],
  role: Role.READ_ONLY,
};

console.log(person.role);
