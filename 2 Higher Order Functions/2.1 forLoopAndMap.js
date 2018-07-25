let answers = ['yes', 'no', 'no', 'yes', 'no']

function answerSwapper(answer) {
  if(answer === 'yes') {
    return 'no'
  } else {
    return 'yes'
  }
}

function maybeizer(answer) {
  if(answer === 'yes') {
    return 'maybe'
  } else {
    return 'no'
  }
}

function map(cb) {
  var newArray = []

  for(var i = 0; i < answers.length; i++) {
    newArray.push(cb(answers[i]))
  }

  return newArray
}

var swapped = map(answerSwapper);

swapped //?

var maybes = map(maybeizer)

maybes //?

