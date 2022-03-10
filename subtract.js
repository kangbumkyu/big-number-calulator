function subtract(num1, num2) {
  let isSwitched = false;
  let isGreater = isGreaterOrEqual(num1, num2);
  if (isGreater === "equal") {
    return "0";
  }
  if (!isGreater) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
    isSwitched = true;
  }

  let num1Index = num1.length - 1;
  let num2Index = num2.length - 1;
  let result = "";
  let carry = 0;
  while (num1Index >= 0) {
    let temp =
      parseInt(num1[num1Index]) -
      carry -
      parseInt(num2Index >= 0 ? num2[num2Index] : "0");

    if (temp < 0) {
      temp += 10;
      carry = 1;
    } else {
      carry = 0;
    }
    num1Index--;
    num2Index--;
    result = `${temp}${result}`;
  }

  if (result[0] === "0") {
    result = result.substring(1);
  }
  if (isSwitched) {
    result = `-${result}`;
  }

  return result;
}
