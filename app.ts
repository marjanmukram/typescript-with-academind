// Lets allow TS to infer types
const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Marjan",
  age: 22,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person2.role.push("admin");
// person2.role[1] = 2;
// person2.role = [0, "adimin", 2];

let favoriteActivities: any[];
favoriteActivities = ["Sports"];

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
}
