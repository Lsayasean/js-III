// ==============
// === REDUCE ===
// ==============

function sum(total, num) {
  console.log(total, num)
  return total + num
}

let totalScores = [36, 39, 44, 49, 45, 48, 52]
// ===>>> Using the reduce array method and the array above, reduce to get a total sum.

var total = totalScores.reduce(sum, 0)

total

// -------------------------------------------------

let lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]
/// ===>>> Using the reduce array method and the array above, go through the lyricWords and concatenate them together.

let song = lyricWords.reduce((total, word) => total + word, '')

song

// -------------------------------------------------

// *** CHALLENGE