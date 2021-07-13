document.getElementById("Rock").onclick = user;
document.getElementById('Paper').onclick = user;
document.getElementById('Scissors').onclick = user;

function user() {
  var userChoice = this.id;
  console.log("User: " + userChoice);
  compare(userChoice, computerChoice);
}

// create computer's guess
let choices = ["Rock", "Paper", "Scissors"]
let computerChoice = choices[Math.floor(Math.random() * 3)];
console.log(computerChoice);

function compare(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    document.querySelector(".result-text").innerHTML = "It's a Tie!";
  }
  else if (userChoice === "Rock") {
    if (computerChoice === "Scissors") {
      document.querySelector(".result-text").innerHTML = "You win!";
    } else if (computerChoice === "Paper") {
      document.querySelector(".result-text").innerHTML = "The computer wins!";
    }
  }
  if (userChoice === "Paper") {
    if (computerChoice === "Rock") {
      document.querySelector(".result-text").innerHTML = "You win!";
    } else if (computerChoice === "Scissors") {
      document.querySelector(".result-text").innerHTML = "The computer wins!";
    }
  }
  if (userChoice === "Scissors") {
    if (computerChoice === "Paper") {
      document.querySelector(".result-text").innerHTML = "You win!";
    } else if(computerChoice === "Rock") {
      document.querySelector(".result-text").innerHTML = "The computer wins!";
    }
  }
}
