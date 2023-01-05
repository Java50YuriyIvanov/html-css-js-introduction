let str1 = "pappy";
let str2 = "apple";
function coloringString(str1, str2) {
  if (str1.length !== str2.length)
    throw Error("ERROR! Not equal length of strings");
  const arr1 = Array.from(str1.toLowerCase());
  const arr2 = Array.from(str2.toLowerCase());
  const res = arr2.map(myFunction);
  function myFunction(item, index) {
    if (arr1.includes(item) && item !== arr1[index]) item = "yellow";
    else if (item == arr1[index]) item = "green";
    else item = "red";
    return item;
  }
  return res;
}
console.log(coloringString(str1, str2));
console.log(coloringString(str1, str1));

const arr1 = [1, 100, -100, 25, 1000];

function getNumbersWithDigitsAmount(digitsAmount, array) {
  if (digitsAmount < 1) throw Error("ERROR! Not acceptable amount of digits");
  const min = 10 ** (digitsAmount - 1);
  const max = 10 ** digitsAmount - 1;
  const res = array.filter(function (number) {
    number = Math.abs(number);
    return number >= min && number <= max;
  });
  return res;
}
console.log(getNumbersWithDigitsAmount(3, arr1));
