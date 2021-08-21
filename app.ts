type Combinable = string | number;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  // if (resultConversion === "as-number") {
  //   return +result;
  // }
  return result;
}

const combinedAges = combine(26, 30, "as-number");
const combinedNames = combine("Amal", "Nimal", "as-text");
const combinedStringAges = combine("26", "30", "as-number");

console.log(combinedAges);
console.log(combinedNames);
console.log(combinedStringAges);
