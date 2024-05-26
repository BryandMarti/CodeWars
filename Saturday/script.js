function smash(words) {
  return words.join(' ');
}



/////////////////////////
// Second Challenge, today is two the first was pretty short


function isItLetter(char) {
  // Regular expression to check if the character is a letter
  var letterRegex = /^[a-zA-Z]$/;
  return letterRegex.test(char);
}

// Example usage:
console.log(isItLetter('a')); // Output: true
console.log(isItLetter('5')); // Output: false
console.log(isItLetter('@')); // Output: false
