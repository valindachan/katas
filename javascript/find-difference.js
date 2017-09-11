function find_difference(a, b) {
  // a.reduce(function(product, value) {
  //   return product * value
  // }, 15)

  a = a.reduce(function(product, value) {
    return product * value
  }, 15)

  console.log(a)

  // b.forEach(function(element) {
  //   console.log(element)
  // })
}

console.log(find_difference([15, 20, 25], [10, 30, 25]))
// console.log(find_difference())
