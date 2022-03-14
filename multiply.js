function multiply(num1, num2) {
  let isSwitched = false;
  let isNegative = num1[0] === "-" ? true : false;
  if (isNegative) {
    num1 = num1.substring(1);
  }
  const isGreater = isGreaterOrEqual(num1, num2);
  if (!isGreater) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
    isSwitched = true;
  }

  let num1Index = num1.length - 1;
  let num2Index = num2.length - 1;

  let result = "0";
  let carry = 0;
  let count = 0;
  while (num2Index >= 0) {
    let current = "";
    while (num1Index >= 0) {
      let temp = parseInt(num1[num1Index]) * parseInt(num2[num2Index]) + carry;

      if (temp > 9) {
        carry = Math.floor(temp / 10);
        temp = temp % 10;
      } else {
        carry = 0;
      }
      current = `${temp}${current}`;
      num1Index--;
    }
    if (carry !== 0) {
      current = `${carry}${current}`;
      carry = 0;
    }
    for (let i = 0; i < count; i++) {
      current = `${current}0`;
    }
    result = add(result, current);
    num1Index = num1.length - 1;
    num2Index--;
    count++;
  }
  if (isNegative) {
    result = `-${result}`;
  }

  return result;
}
