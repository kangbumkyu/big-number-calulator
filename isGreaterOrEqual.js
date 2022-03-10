function isGreaterOrEqual(num1, num2) {
  if (num1.length > num2.length) {
    return true;
  } else if (num1.length < num2.length) {
    return false;
  } else {
    if (num1 > num2) {
      return true;
    } else if (num1 < num2) {
      return false;
    } else {
      return "equal";
    }
  }
}
