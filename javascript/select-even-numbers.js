// function selectEvenNumbers(arrayofNumbers) {
//   let evenNumbers = []
//
//   console.log(arrayofNumbers)
//
//   for (var i = 0; i < arrayofNumbers.length; i++) {
//     if (arrayofNumbers[i] % 2 === 0) {
//       console.log(arrayofNumbers[i])
//       evenNumbers.push(arrayofNumbers[i])
//       console.log(evenNumbers)
//     } else {
//       // do nothing
//     }
//   }
//
//   if (evenNumbers.length > 0) {
//     console.log(evenNumbers)
//     return evenNumbers
//   } else {
//     console.log("There are no even numbers")
//     return "There are no even numbers"
//   }
// }

//

// function selectEvenNumbers(arrayofNumbers) {
//   let evenNumbers = []
//
//   for (var i = 0; i < arrayofNumbers.length; i++) {
//     if (arrayofNumbers[i] % 2 === 0) {
//       evenNumbers.push(arrayofNumbers[i])
//     }
//   }
//
//   if (evenNumbers.length > 0) {
//     return evenNumbers
//   } else {
//     return "There are no even numbers"
//   }
// }

// function selectEvenNumbers(arrayofNumbers) {
//
//   filtering out items from an array by returning a new array.
//
//   for (var i = 0; i < arrayofNumbers.length; i++) {
//     if (arrayofNumbers[i] % 2 === 0) {
//       evenNumbers.push(arrayofNumbers[i])
//     }
//   }
//
//   if (evenNumbers.length > 0) {
//     return evenNumbers
//   } else {
//     return "There are no even numbers"
//   }
// }

function selectEvenNumbers(arrayofNumbers) {
  var evenNumbers = []

  arrayofNumbers.filter(n => n % 2 === 0)
  console.log(evenNumbers)
}
//
// function selectEvenNumbers(arrayofNumbers) {
//   var evenNumbers = arrayofNumbers.filter(n => n % 2 === 0)
//   console.log(evenNumbers)
// }

// selectEvenNumbers([1])
// selectEvenNumbers([1, 2])
// selectEvenNumbers([1, 2, 3, 4, 5, 6])
// selectEvenNumbers([-200.25])
selectEvenNumbers([-800.1, 2000, 3.1, -1000.25, 42, 600])
