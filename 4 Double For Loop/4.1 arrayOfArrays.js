let nestingThing = [[1, 2, 3, 4], [3, 4, 5, 6, 7], [7, 8, 9]]

// ===>>> Above we have an array called nestingThing. If you notice, this array has other arrays nested within itself.
// Write a function that will take in an array parameter (the argument will be the nestingThing array above) and a number parameter. The goal of this function is to remove any value that matches the number parameter from the array parameter. Do this by iterating over the array parameter to look at each nested array individually. You can then iterate over the nested array to search for and remove any value matching the number parameter.
// Return the array parameter when completed.
// Note: Don't use indexOf!

function numberRemover(array, numberToRemove) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++) {
      if(array[i][j] === numberToRemove) {
        array[i].splice(j, 1)
      }
    }
  }
  return array
}

var x = numberRemover(nestingThing, 5)

console.log(x)




let nestingThing = [[1, 2, 3, 4], [3, 4, 5, 6, 7], [7, 8, 9]]


for(var i = 0; i < nestingThing.length; i++) {
  for(var j = 0; j < nestingThing[i].length; j++ ) {
    if( nestingThing[i][j] === 5) {
      nestingThing[i].splice(j, 1)
    }
  }
}

nestingThing