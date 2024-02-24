let player_score = 0;
let computer_score = 0;

function rps(player) {

  const hands = ["rock", "paper", "scissors"];
  let comp = hands[Math.floor(Math.random() * 3)];

  if ((player == "rock" && comp == 'paper') || 
      (player == 'paper' && comp == "scissors") || 
      (player == "scissors" && comp == "rock")) {
    document.getElementById('rps_result').innerText = 'You lose! Your ' + player + " loses to the computer's " + comp + '.';
    computer_score++
  }
  else if ((player == "rock" && comp == "rock") || 
             (player == 'paper' && comp == 'paper') || 
             (player == "scissors" && comp == "scissors")) {
    document.getElementById('rps_result').innerText = "It's a tie! You both chose " + comp + ".";
    player_score++
  }
  else {
    document.getElementById('rps_result').innerText = 'You win! Your ' + player + " beats the computer's " + comp + '.';
  }

  document.getElementById('rps_score').innerText = "Your score: " + player_score + " // Computer score: " + computer_score;
}