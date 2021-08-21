// fuunctiopn types

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

// let combineValues;
// let combineValues: Function;
let combineValues: (n1: number, n2: number) => number;

combineValues = add;
// combineValues = printResult;

printResult(combineValues(5, 12));
