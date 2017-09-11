function getMiddle(s)
{
  var indices = [];
  var letters = [];

  let index = s.length / 2; // find index of word

  // check if the index is a whole number
  // if it is, then you just return the middle letter

  // return 2 letters (even # of letters)
  if (index % 1 === 0) {
    indices.push(index-1);
    indices.push(index);
    letters.push(s[indices[0]]);
    letters.push(s[indices[1]]);
    return letters.join('');

  // return 1 letter (odd # of letters)
  } else {
    indices.push(Math.ceil(index));
    return s[indices-1];
  }

}

console.log(getMiddle('Heyoo'));
