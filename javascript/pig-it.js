function pigIt(str) {
  //Code here
  // str = str.split(" ")
  // let words
  //
  // // console.log(str)
  // for (var i = 0; i < str.length; i++) {
  //   words = str[i].split("")
  // }
  // words.push(words[0])
  // console.log(words)
  // // for (var j = 0; j < words.length; j++) {
  // //   words[words.length] = words[0]
  // //   console.log(words)
  // // }
  // console.log("hi")

  str = str.split(" ")
  // words = str.split("")

  let firstLetter = ""

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str[i].length; j++) {
      firstLetter = str[i][0]
      str[i][0] = ""
    }
    str[i] = `${str[i]}${firstLetter}ay`
    console.log(str[i])
    // console.log(i, firstLetter, str)
    // console.log(firstLetter)
    // = `${str[i]}ay`
  }
  // console.log(str)
}

pigIt("Pig latin is cool")
