var guessedNumber;
var guess;
var chances = 10;

function guessTheNumber() {
  guessedNumber = parseInt(Math.random() * 100);
  document.getElementById("play-btn").style.display = "none";
  document.getElementById("form1").style.display = "block";
  document.getElementById("chances").style.display = "block";
}

function checkGuessNumber() {
  guess = document.getElementById("guess-input").value;

  if (guess < 1 || guess > 100) {
    alert('Guessed Number between 1 & 100');  
    return
  }

  chances -= 1;
  document.getElementById('chances-value').innerHTML = chances;
  if (!chances) {
    alert("Game End!! You Lose");
    return;
  }

  
  
  if (guess == guessedNumber) {
    alert("You guessed correctly!");
  } else if (guess < guessedNumber) {
    alert("Your number is too low");
  } else {
    alert("Your number is too high");
  }
}
