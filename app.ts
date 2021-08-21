let userInput: unknown;
// let userInput: any; // I give up!. Do whatever you wantr
let username: string;

userInput = 5;
userInput = "Max";
// username = userInput;

if (typeof userInput === "string") {
  username = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, code };
  // while (true) {}
}
//  never returns anything

const result = generateError("An error occured", 500);
console.log(result);
