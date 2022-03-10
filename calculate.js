function calculate(n1, operator, n2) {
  let result;

  if (operator === "+") {
    result = add(n1, n2);
  } else if (operator === "-") {
    result = subtract(n1, n2);
  } else if (operator === "*") {
    result = multiply(n1, n2);
  } else if (operator === "/") {
    if (Number(n2) === 0) {
      result = NaN;
    } else {
      result = (Number(n1) / Number(n2)).toString();
    }
  }

  return result;
}
