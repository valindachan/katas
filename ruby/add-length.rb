def add_length(str)
  words = str.split(" ")
  str_length = []
  for i in words
    str_length.push("#{i} #{i.length}")
  end
  str_length
end
