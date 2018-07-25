var lotsOfParameters = (one, two, three) => one > 1 ? one + two : two + three

console.log(lotsOfParameters(1,2,3))

// -------------------------------------------------

var oneParameter = string => {
  let newString = string.slice(3)
  return string + string.slice(3)
}

console.log(oneParameter('bob ross'))

// -------------------------------------------------

var noParameters = () => {
  let num = 1 + 2 + 3
  return num + num
}

// -------------------------------------------------

var oneLine = () => 'hello!'

// -------------------------------------------------

var oneLineWithParameter = str => str === 'Hello' ? 'Why thank you!' : 'Rude... '

console.log(oneLineWithParameter('no'))