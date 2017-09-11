// Greater than 9

function rgb(r, g, b) {
  // complete this function
  assignNext(r)
  assignMod(r)

  assignNext(g)
  assignMod(g)

  if (b < 0) {
    b = 0
  }

  assignNext(b)
  assignMod(b)

  console.log(hex)
  return hex
}

let hex = ""
const basesGreaterThanNine = ["A", "B", "C", "D", "E", "F"]

function assignNext(value) {
  value = parseInt(value / 16)
  if (value > 9) {
    value -= 10
    value = basesGreaterThanNine[value]
  }
  console.log(value)
  hex += value
  // console.log(hex)
  return hex
}

function assignMod(value) {
  value = value % 16
  if (value > 9) {
    value -= 10
    value = basesGreaterThanNine[value]
    console.log(value)
  }
  hex += value
  // console.log(hex)
  return hex
}

// rgb(182, 0, 35) // Return B60023
// rgb(0, 0, -20) // Return 000000
rgb(300, 255, 255) // Return ADFF2F
// rgb(173, 255, 47) // Return ADFF2F
