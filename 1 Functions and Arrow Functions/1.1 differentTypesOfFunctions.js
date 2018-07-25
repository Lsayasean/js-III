// This function:
function notArrowFunction(str) {
  return str
}
// is the same as this arrow function:
let arrowFunction1 = (str) => {
  return str
}
// which is also the same as this arrow function:
let arrowFunction2 = str => {
  return str
}
// which is also the same as this arrow function:
let arrowFunction3 = str => str

// ===>>> So what are the differences?