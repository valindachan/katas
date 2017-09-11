function findEvenIndex(arr) {
  let sumLeft = 0
  let sumRight = 0
  let evenIndex = -1
  // Find total sum of elements right of array
  for (var i = 0; i < arr.length; i++) {
    sumRight += arr[i]
    // console.log(sumRight)
  }
  for (var i = 0; i < arr.length; i++) {
    sumRight = sumRight - arr[i]
    if (sumLeft === sumRight) {
      evenIndex = i
    }
    sumLeft += arr[i]
  }
  return evenIndex
}

findEvenIndex([1, 2, 3, 2, 1])
