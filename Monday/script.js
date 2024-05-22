const findOdd = (arr) => {
  let counts = {}; 

  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (let num in counts) {
    if (counts[num] % 2!== 0) {
      return parseInt(num);
    }
  }

  return null;
}

// Test cases
const testCases = [
  [7], 
  [0], 
  [1, 1, 2],
  [0, 1, 0, 1, 0], 
  [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]
];


const header = document.getElementById('result');
header.innerHTML = `<h1>Monday's Challenge</h1>`

testCases.forEach(testCase => {
  const resultElement = document.getElementById('result');
  const result = findOdd(testCase);
  resultElement.innerHTML += `
  Result for ${JSON.stringify(testCase)}: ${result}<br>`;
});
