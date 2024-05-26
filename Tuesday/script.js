function countBits(n) {
  return n.toString(2).replace(/0/g, '').length;
}

// Test the function
console.log(countBits(1234));  // Output should be 5
