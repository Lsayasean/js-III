let mapArray = [1, 2, 3, 4]
// ===>>> Using the map array method and the mapArray array above, create a new array with values that are doubled.

var doubled = mapArray.map(number => number * 2)

doubled

// -------------------------------------------------

let employees = [
  { last_name: "aron", first_name: "a", pay: 12 },
  { last_name: "bron", first_name: "b", pay: 18 },
  { last_name: "ron", first_name: "c", pay: 20 },
  { last_name: "bron", first_name: "le", pay: 21 }
]

let raisedEmployees = employees.map((employee) => {
  employee.pay += 3;
  return employee
})

raisedEmployees



// ===>>>  Using the map array method and the employees array above, map over employees and give each employee a pay increase by 3.
// ****** DESIRED RESULT =
/*
var employees = [
  { last_name: "aron", first_name: "a", pay: 15 },
  { last_name: "bron", first_name: "b", pay: 21 },
  { last_name: "ron", first_name: "c", pay: 23 },
  { last_name: "bron", first_name: "le", pay: 24 }
]
*/

// -------------------------------------------------

let toMap = [1, 2, 3, 4, 5, 6]
let itsBeenMapped = toMap.map(element => element > 3 ? element * 2 : element)

itsBeenMapped //?
// ===>>> What is wrong with this map method example above? Why does this happen and how can we fix it?