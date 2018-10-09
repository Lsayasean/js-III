var lotsOfParameters = function (one, two, three) { 
  if(one > 1) {
    return one + two 
  } else {
    return two + three
  }
}

// -------------------------------------------------

var oneParameter = function(string) {
  let newString = string.slice(3)
  return string + string.slice(3)
}

// -------------------------------------------------

var noParameters = function() {
  let num = 1 + 2 + 3
  return num + num
}

// -------------------------------------------------

var oneLine = function() {
  return 'hello!'
}
// -------------------------------------------------

var oneLineWithParameter = function (str) {
  if(str === 'Hello') {
    'Why thank you!'
  } else {
    'Rude... '
  }
}
