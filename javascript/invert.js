function invert(array) {
  let inversed = []

  for (var i = 0; i < array.length; i++) {
    let invertedNum = 0
    if (array[i] != 0) {
      invertedNum = -1 * array[i]
    } else {
      invertedNum = 0
    }
    inversed.push(invertedNum)
  }
  return inversed
}

console.log(invert([0, 80, -600]))
