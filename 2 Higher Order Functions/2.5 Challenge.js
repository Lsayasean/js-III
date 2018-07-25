// *** CHALLENGE

let challengeArray = [1, 2, 3, 4, 5, 6]
// ===>>> Using map, filter, and reduce; modify the array above using chaining... map through the above array and multiply each value by 5, then filter through the array returning only odd numbers, then reduce all the values to get a total.

var endResult = challengeArray
                .map(number => number * 5)
                .filter(number => number % 2)
                .reduce((total, number) => total + number, 0)

endResult

// ===>>> Now pat yourself on the back because that's cool.