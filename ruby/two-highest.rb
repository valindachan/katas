def two_highest(list)
  two_highest = []
  if list.empty?
    return two_highest
  elsif list.all? {|i| i.is_a?(Integer) }
    first_highest = 0
    second_highest = 0
    for i in list
      if i > first_highest
        first_highest = i
      end
    end

    for i in list
      if i != first_highest && i > second_highest
        second_highest = i
      end
    end

    two_highest = [first_highest, second_highest]

    return two_highest
  else
    return false
  end
end
