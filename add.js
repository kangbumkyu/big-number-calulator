function add(num1, num2) {
  if (num1[0] === "-") {
    return subtract(num2, num1.substring(1));
  }
  let num1Index = num1.length - 1;
  let num2Index = num2.length - 1;
  let carry = 0;
  let result = "";
  while (num1Index >= 0 || num2Index >= 0) {
    let sum =
      parseInt(num1Index >= 0 ? num1[num1Index] : "0") +
      parseInt(num2Index >= 0 ? num2[num2Index] : "0") +
      carry;

    if (sum > 9) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    num1Index--;
    num2Index--;
    result = `${sum.toString()}${result}`;
  }

  if (carry === 1) {
    result = `1${result}`;
    carry = 0;
  }

  return result;
}
