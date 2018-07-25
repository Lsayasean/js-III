// ===>>> What will be the result of the code below when you uncomment it?
let arr = [1, 2, 3]
let arrCopy = [...arr]
// arr === arrCopy

arrCopy[0] = 1000

arr

// -------------------------------------------------

// ===>>> How do we fix this?

// -------------------------------------------------

// ===>>> What will be the result of the code below when you uncomment it?
let obj = {one: 1, two: 2, three: 3}
let objCopy = Object.assign({}, obj)
// obj === objCopy

objCopy.one = 1000

obj

// -------------------------------------------------

// ===>>> Let's learn how to fix this...
// SYNTAX --- Object.assign(target, ...sources)

let objToCopy = {
  cats: 4,
  dogs: 2,
  birds: 0
}

let newObject = {} // change this code to use Object.assign

// -------------------------------------------------

// ===>>> When you uncomment the code below, what will it equate to?
// newObject === objToCopy

// -------------------------------------------------

let oldObject = {
  one: 1,
  two: 2,
  three: 3
}
// ===>>> Using the object above and Object.assign(), create a new object with the same properties.

// -------------------------------------------------

// ===>>> Now create another new object with the property four. Do this by adding an object literal in the Object.assign invocation.

// -------------------------------------------------

// ===>>> What will be the resulting object of the code below when you uncomment it?

let user1 = {
  emotion: 'happy'
}

let user2 = {
  emotion: 'super happy',
  age: 23
}

let user3 = {
  favoriteColor: 'blue',
  age: 23
}

let superUser = Object.assign({}, user1, user2, user3, {age: 24})

superUser

// -------------------------------------------------

// ===>>> What about now?

let superUser2 = Object.assign({}, {age: 24}, user1, user2, user3)

superUser2

// -------------------------------------------------


function thing(obj) {
  var trueCopy = Object.assign({dog: 'the best'}, obj)
  trueCopy.name = 'Bob ross'
  console.log(trueCopy)
}

var person = {name: 'richard simmons', age: 90};

thing(person)

console.log(person)
