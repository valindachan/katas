function generateShape(int){
  square = ""
  for (var i = 0; i < int-1; i++) {
    for (var j = 0; j < int; j++) {
      square += "+"
    }
    square += "\n"
  }
  for (var i = 0; i < 1; i++) {
    for (var j = 0; j < int; j++) {
      square += "+"
    }
  }
  console.log(square);
}

generateShape(5)
