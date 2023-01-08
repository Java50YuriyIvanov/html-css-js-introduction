const arr1 = [20, -10, 333, 1000, 552, 7, -7];
function evenOddSort(array) {
  array.sort(function (a, b) {
    return (Math.abs(b) % 2) - (Math.abs(a) % 2);
  });
  return array;
}
console.log(evenOddSort(arr1));

const arr2 = [20, -10, 333, 1000, 552, 7, -7];
function oddEvenSort(array) {
  array.sort(function (a, b) {
    return (Math.abs(a) % 2) - (Math.abs(b) % 2);
  });
  return array;
}
console.log(oddEvenSort(arr2));

const arr3 = [20, -10, 333, 1000, 552, 7, -7];
function evenAscOddDesc(array) {
  array.sort(function (a, b) {
    return (Math.abs(a) % 2) - (Math.abs(b) % 2) || (a % 2 ? b - a : a - b);
  });
  return array;
}
console.log(evenAscOddDesc(arr3));

const arr4 = [20, -10, 333, 1000, 552, 7, -7];
function getMin(array) {
  const result = array.reduce(function (res, curr) {
    return curr < res ? curr : res;
  });
  return result;
}
console.log("************************************");
console.log(getMin(arr4));

const arr5 = [20, -10, 333, 1000, 552, 7, -7];
function getMax(array) {
  const result = array.reduce(function (res, curr) {
    return curr > res ? curr : res;
  });
  return result;
}
console.log(getMax(arr5));

const arr6 = [20, -10, 333, 1000, 552, 7, -7];
function getAverage(array) {
  const result =
    array.reduce(function (res, curr) {
      return res + curr;
    }) / array.length;
  return result;
}
console.log(getAverage(arr6));

const arr7 = [20, -10, 333, 1000, 552, 7, -7];
function getMinMaxAvg(array) {
  const result = array.reduce(
    function (res, curr) {
      if (curr < res[0]) res[0] = curr;
      else if (curr > res[1]) res[1] = curr;
      res[2] += curr / array.length;
      return res;
    },
    [array[0], 0, 0]
  );
  return result;
}
console.log("********************************");
console.log(
  `min value: ${getMinMaxAvg(arr7)[0]} \nmax value: ${
    getMinMaxAvg(arr7)[1]
  } \naverage value: ${getMinMaxAvg(arr7)[2]}`
);
