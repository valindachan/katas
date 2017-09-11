function tickets(peopleInLine) {
  let hasChange = "YES"

  let oneHundred = 0
  let fifty = 0
  let twentyFive = 0

  for (var i = 0; i < peopleInLine.length; i++) {
    console.log(cashRegister)
    if (peopleInLine[i] > 25) {
      // console.log(cashRegister)
      hasChange = "NO"
    }
    console.log(cashRegister, peopleInLine[i], hasChange)
    c
  }
  console.log(`========================`)
  return hasChange
}

tickets([25, 100])
tickets([25, 50, 100])
// tickets([25, 25, 50, 50])
// tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 100, 100])
