function reverseWords(str){
  arrayOfStrings = str.split(" ")
  reversed = arrayOfStrings.reverse()
  reversedString = reversed.join(" ")
  return reversedString
}

reverseWords("Hello World!")
