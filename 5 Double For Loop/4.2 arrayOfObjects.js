let nestingObjects = [
  {
    name: 'Jenny',
    favoriteColors: ['blue', 'green', 'purple'],
    cool: true
  },{
    name: 'Barry',
    favoriteColors: ['green', 'yellow'],
    cool: true
  },{
    name: 'Harry',
    favoriteColors: ['red', 'blue', 'pink'],
    cool: true
  },{
    name: 'Sue',
    favoriteColors: ['pink', 'yellow'],
    cool: true
  }
  ]

// ===>>> You will be using the nestingObjects array above. Your goal is to write a function that will delete the cool property of any object that has a certain color in the favoriteColors array. This function should have two parameters, a string representing the color and an array representing the users (this will be the nestingObjects array). This function should loop over the array parameter and then loop again over the favoriteColors array. When looping over the favoriteColors array, look to see if the string parameter is present in the array. If so, delete the cool property.
// *** For the first time, do not use indexOf.