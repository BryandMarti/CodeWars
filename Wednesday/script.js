function findSmallestInt(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
          smallest = arr[i];
      }
  }
  return smallest;
}

// Test cases:
console.log(findSmallestInt([34, 15, 88, 2]));    // Output: 2
console.log(findSmallestInt([34, -345, -1, 100])); // Output: -345
