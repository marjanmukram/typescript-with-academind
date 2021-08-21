// Generally not recommended.

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Marjan",
//   age: 22,
// };

// console.log(person.name);

// Lets allow TS to infer types
const person2 = {
  name: "Marjan",
  age: 22,
};

console.log(person2.name);
