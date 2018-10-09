// ===>>> Object iteration! Let's write a for in loop!
// SYNTAX --- for( VARIABLE in OBJECT ) {...}

let toLoop = {
  one: 1,
  two: 2,
  three: 3
}

// -------------------------------------------------

// ===>>> What will print with each portion of code when you uncomment it?

// for(let prop in toLoop) {
//   console.log(prop)
// }

// -------------------------------------------------

// for(let key in toLoop) {
//   console.log(key)
// }

// -------------------------------------------------

// for(let prop in toLoop) {
//   console.log(toLoop)
// }

// -------------------------------------------------

// for(let prop in toLoop) {
//   console.log(toLoop[prop])
// }

// -------------------------------------------------

let noFalseyAllowed = {
  name: 'Harry',
  age: 45,
  spouse: null,
  children: 0,
  coder: true,
  awesomenessLevel: 500
}

// ===>>> Loop over the object above and delete all properties with a falsey value.

// -------------------------------------------------