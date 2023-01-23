function createEmployee(id, name, birthYear, salary, city, country) {
  return { id, name, birthYear, salary, address: { city, country } };
}

const employees = [
  createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
  createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
  createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
  createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
  createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
  createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
  createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
  createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel"),
  createEmployee(131, "John", 1993, 18000, "London", "UK"),
];

// console.log(employees[0]["address"]["country"]);

//HW #18
// #1
//returns reference to an Employee object with a given id value
function getEmployee(employees, id) {
  return employees.find(function (empl) {
    return empl.id === id;
  });
}
// console.log(getEmployee(employees, 127));

// #2
//returns array of Employee objects that have salary in [salaryFrom, salaryTo]
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
  return employees.filter(
    (employee) => employee.salary >= salaryFrom && employee.salary <= salaryTo
  );
}
// console.log(getEmployeesBySalary(employees, 13000, 16000));

// #3
//returns array of Employee objects from a given city
function getEmployeesByCity(employees, city) {
  return employees.filter((employee) => employee.address.city === city);
}
// console.log(getEmployeesByCity(employees, "Lod"));

// #4
//returns array of all Employee names
function getEmployeeNames(employees) {
  return employees.map((employee) => employee.name);
}
// console.log(getEmployeeNames(employees));

// #5
//returns array of Employee objects sorted by age in ascending order
function sortEmployeesByAge(employees) {
  return employees.sort((a, b) => (a.birthYear < b.birthYear ? 1 : -1));
}
// console.log(sortEmployeesByAge(employees));

// #6
//computes and returns total salary for all Employee objects
function computeSalaryBudget(employees) {
  return employees.reduce(function (acc, obj) {
    return acc + obj.salary;
  }, 0);
}
// console.log(computeSalaryBudget(employees));

// employees[0].department = 'QA';

// console.log(employees[0]['department']);

function computeMinMaxAvgSalary(employees) {
  const res = employees.reduce(
    (res, empl) => {
      if (res.minSalary > empl.salary) {
        res.minSalary = empl.salary;
      } else if (res.maxSalary < empl.salary) {
        res.maxSalary = empl.salary;
      }
      res.avgSalary += empl.salary;
      return res;
    },
    {
      minSalary: employees[0].salary,
      maxSalary: employees[0].salary,
      avgSalary: 0,
    }
  );
  res.avgSalary = res.avgSalary / employees.length;
  return res;
}
function displayValue(minMaxAvg, field) {
  console.log(`value of the field ${field} is ${minMaxAvg[field]}`);
}
const minMaxAvg = computeMinMaxAvgSalary(employees);
// displayValue(minMaxAvg,"avgSalary");
// displayValue(minMaxAvg,"minSalary");
// displayValue(minMaxAvg,"maxSalary");
const strings = ["b", "xyz", "lmn", "xyz", "lmn", "xyz", "a"];
//assumed result:
//xyz -> 3
//lmn -> 2
//a -> 1
//b -> 1
function displayStringOccurrences(strings) {
  const stringOccurrences = getStringOccurrences(strings);
  // console.log(stringOccurrences);
  const arrayOccurrences = Object.entries(stringOccurrences);
  // console.log(arrayOccurrences);
  arrayOccurrences.sort(stringComp);
  // arrayOccurrences.forEach((entry) =>
  //   console.log(`${entry[0]} -> ${entry[1]}`)
  // );
}
function getStringOccurrences(strings) {
  const res = {};
  strings.forEach((str) => {
    if (!res[str]) {
      res[str] = 1;
    } else {
      res[str]++;
    }
  });
  // console.log(res);
  return res;
}
function stringComp(entry1, entry2) {
  let res = entry2[1] - entry1[1];
  if (res == 0) {
    res = entry1[0] < entry2[0] ? -1 : 1;
  }
  return res;
}
displayStringOccurrences(strings);

// ==========================================HW #19===========================

// exercise #1
//returns country with most amount of employees
function getMostPopulatedCountry(employees) {
  const countryOccurences = getArrayOfCountries(employees);
  const arrayOccurrences = Object.entries(countryOccurences);
  arrayOccurrences.sort(stringComp);
  console.log(
    `Country with most amount of employees: ${arrayOccurrences[0][0]}`
  );
}
function getArrayOfCountries(arrayOfObj) {
  const res = {};
  arrayOfObj.forEach((obj) => {
    obj = obj["address"]["country"];
    if (!res[obj]) res[obj] = 1;
    else res[obj]++;
  });
  return res;
}
// getMostPopulatedCountry(employees);

// exercise #2
//returns a given number (conter) of countries with most amount of employees
function getMostPopulatedCountries(employees, counter) {
  const countryOccurences = getArrayOfCountries(employees);
  const arrayOccurrences = Object.entries(countryOccurences);
  arrayOccurrences.sort(stringComp).splice(counter);
  let str = "";
  for (let i = 0; i < arrayOccurrences.length; i++) {
    str += arrayOccurrences[i][0] + ", ";
  }
  console.log(
    `${counter} countries with most amount of employees: ${str.substring(
      0,
      str.length - 2
    )}`
  );
}
getMostPopulatedCountries(employees, 3);

// exercise #3
//   //returns true if a given anagram is indeed an angram of a given word
//   //anagram must have same length as word
//   //anagram must have all letters from word
//   //hello anagram examples: elolh, olleh, ohell, lehol
//   //exampls non-anagrams: eloll (no h), ollehh(different length),
//   // olaeh ("a" doesn't exist in word), oleh(different length)
function isAnagram(word, anagram) {
  return word.toLowerCase().split("").sort().join("") === anagram.toLowerCase().split("").sort().join("");
}
console.log(isAnagram('hello', 'lehol')); 
console.log(isAnagram('hello', 'lollehh')); 
