function generateShape(int){
  square = ""
  for (var i = 0; i < int; i++) {
    for (var j = 0; j < int; j++) {
      square += "+"
    }
    square += "\n"
  }
  return square.slice(0,-1)
}

generateShape(5)
