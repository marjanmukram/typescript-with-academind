let userInput: unknown;
// let userInput: any; // I give up!. Do whatever you wantr
let username: string;

userInput = 5;
userInput = "Max";
// username = userInput;

if (typeof userInput === "string") {
  username = userInput;
}
