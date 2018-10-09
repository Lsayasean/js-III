// Pulls properties off of an object.

// EXAMPLE ---
let toDestructure = {
  name: 'Jake',
  age: undefined,
  height: "5 ft and 11 3/4 inches"
}
let { name, age, height } = toDestructure
// console.log(name, age, height)
  
// -------------------------------------------------
  
let objToDestructure = {
  name: 'Aaron',
  age: undefined,
  height: '6 ft and 5 inches'
}
// let { n, a, h } = objToDestructure;

// ===>>> When you uncomment the code above, will it work?

// -------------------------------------------------

let yessa = {
    name: "Yessa Helpa",
    race: "Gungan",
    favoritePhrase: "Yessa",
    skills: ["Jumping", "talking", "talking more", "'helping'"],
    planet: "Binksia",
    friends: ["Obi Han", "Princess Leiadalla", "Chewywok"]
}
// ===>>> Using object destructuring and the yessa object above, save yessa's name and favoritePhrase into new variables.

// -------------------------------------------------

// ===>>> Now write a function that will destructure the name and favoritePhrase from an object passed in. When complete, invoke the function and pass in the object yessa.

// -------------------------------------------------

// ===>>> With that same function you just wrote, destructure the name and favoritePhrase as parameters and return the parameters.

// -------------------------------------------------