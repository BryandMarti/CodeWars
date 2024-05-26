function playersChoice(player1, player2) {
  const rules = {
      'rock': ['scissors', 'lizard'],
      'paper': ['rock', 'spock'],
      'scissors': ['paper', 'lizard'],
      'lizard': ['spock', 'paper'],
      'spock': ['scissors', 'rock']
  };

  if (player1 === player2) {
      return "Draw!";
  } else if (rules[player1].includes(player2)) {
      return "Player 1 Won!";
  } else {
      return "Player 2 Won!";
  }
}

// Example usage:
console.log(playersChoice('rock', 'scissors')); // Output: "Player 1 Won!"
console.log(playersChoice('paper', 'lizard')); // Output: "Player 2 Won!"
console.log(playersChoice('spock', 'spock'));  // Output: "Draw!"
