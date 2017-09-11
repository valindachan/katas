function giveMeFive(obj) {
  let array = []
  for (var key in obj) {
    if (key.length === 5) {
      array.push(key)
    }
    if (obj[key].length === 5) {
      array.push(obj[key])
    }
  }
  console.log(array)
  return array
}

// giveMeFive({ Our: "earth", is: "a", beautyful: "world", Ihave: "enoug" })
giveMeFive({ Pears: "than", apple: "sweet" })
