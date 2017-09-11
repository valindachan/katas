function maxPossibleScore(obj, arr) {
  let maxScore = 0
  for (key in obj) {
    maxScore += parseFloat(obj[key])
    for (var i = 0; i < arr.length; i++) {
      if (key === arr[i]) {
        maxScore += parseFloat(obj[key])
      }
    }
  }
  console.log(maxScore)
  return maxScore
}

// maxPossibleScore({ a: 1, b: 14 }, ["b"]) // 29
maxPossibleScore({ a: 1, b: 23333333.47, c: 4, d: 10.5 }, ["a", "b", "c"]) // 24
