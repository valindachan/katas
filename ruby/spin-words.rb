def spinWords(string)
  words = string.split(" ")
  num_Words = words.length
  num_Words.times do |index|
    if words[index].length >= 5
      words[index] = words[index].reverse
    end
  end

  words.join(" ")
end
