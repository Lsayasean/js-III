// // Pulls properties off of an object.

// // EXAMPLE ---
// let toDestructure = {
//   name: 'Jake',
//   age: 54,
//   height: "5 ft and 11 3/4 inches"
// }

// let { name, age, height } = toDestructure
// console.log(name)

// // -------------------------------------------------

// let objToDestructure = {
//   name: 'Aaron',
//   age: 41,
//   height: '6 ft and 5 inches'
// }
// // let { n, a, h } = objToDestructure;

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

var { name, favoritePhrase } = yessa
console.log(name)

// -------------------------------------------------

// ===>>> Now write a function that will destructure the name and favoritePhrase from an object passed in. When complete, invoke the function and pass in the object yessa.

function gungan({race, planet}) {
  console.log(race, planet)
}

gungan(yessa)