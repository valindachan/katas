function validatePIN (pin) {
  if(Number.isInteger(+pin) && !isNaN(+pin) && pin.length === 4 || Number.isInteger(+pin)  && !isNaN(+pin) && pin.length === 6) {
    return true
  } else {
    return false
  }
}
