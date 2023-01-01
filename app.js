function getDigitsSum(number) {
  if (number < 0) number *= -1;
  let res = 0;
  number = Math.trunc(number);
  while (number) {
    res = res + (number % 10);
    number = Math.trunc(number / 10);
  }
  return res;
}
console.log(getDigitsSum(123.45));
console.log(getDigitsSum(-280.123));
console.log(getDigitsSum(123));

function computeExpression(expxrStr) {
  return eval(expxrStr);
}
function printAnanas() {
  let res = "A" + "A" / "B" + "A" + "S";

  console.log(res.toLowerCase());
}
printAnanas();

console.log(computeExpression("9000 / ((10 + 20) ** 2)"));
console.log(computeExpression("9 + 100 / 2"));
function reverse(number) {
  let res = "";
  if (number < 0) {
    number *= -1;
    res += "-";
  }
  number = Math.trunc(number);
  while (number) {
    res = res + (number % 10);
    number = Math.trunc(number / 10);
  }
  return res;
}
console.log(reverse(123.45));
console.log(reverse(-280.123));
console.log(reverse(123));
console.log(reverse(-123));
