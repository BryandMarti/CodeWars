function countSheep(num) {
  let murmur = '';
  for (let i = 1; i <= num; i++) {
      murmur += i + " sheep...";
  }
  return murmur;
}

// Test the function
console.log(countSheep(3)); // Output: "1 sheep...2 sheep...3 sheep..."
