function grabDoll(dolls) {
  var bag = []
  for (var i = 0; i < dolls.length; i++) {
    if (bag.length >= 3) {
      break
    }
    if (dolls[i] != "Hello Kitty" && dolls[i] != "Barbie doll") {
      continue
    }
    bag.push(dolls[i])
  }
  return bag
}

console.log(
  grabDoll([
    "Mickey Mouse",
    "Barbie doll",
    "Hello Kitty",
    "Hello Kitty",
    "Hello Kitty",
    "Snow white"
  ])
)
