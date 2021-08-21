// fuunctiopn types

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(3, 5, (x) => {
  console.log(x);
});
addAndHandle(3, 5, (x) => x);
