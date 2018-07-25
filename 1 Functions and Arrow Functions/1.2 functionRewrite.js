function lotsOfParameters(one, two, three) {
  if(one > 1) {
    return one + two
  } else {
    return two + three
  }
}

// -------------------------------------------------

function oneParameter(string) {
  let newString = string.slice(3)
  return string + string.slice(3)
}

// -------------------------------------------------

function noParameters() {
  let num = 1 + 2 + 3
  return num + num
}

// -------------------------------------------------

function oneLine() {
  return 'hello!'
}

// -------------------------------------------------

function oneLineWithParameter(str) {
  if(str === 'Hello') {
    return 'Why thank you!'
  } else {
    return 'Rude... '
  }
}