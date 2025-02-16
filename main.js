alert("Piedra, Papel, Tijera!!");

function getComputerChoice() {
  let probability = Math.random();
  let choice;

  if (probability <= 0.33) {
    choice = "rock";
    console.log(probability);
    console.log(choice);
  } else if (probability > 0.33 && probability < 0.66) {
    choice = "scissors";
    console.log(probability);
    console.log(choice);
  } else {
    choice = "paper";
    console.log(probability);
    console.log(choice);
  }

  return choice;
}


let choice = getComputerChoice();

function getHumanChoiche() {
  let humanChoice = prompt("Que eliges?");

  while (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    alert("Opcion Invalida");
    humanChoice = prompt("Que eliges?");
  }

  return humanChoice;
}


let humanChoice = getHumanChoiche();


function result(humanChoice, choice) {
  let resultado;

  if (humanChoice === choice) {
    resultado = "Draw"; 
  } else if (
    (humanChoice === "rock" && choice === "scissors") ||
    (humanChoice === "paper" && choice === "rock") ||
    (humanChoice === "scissors" && choice === "paper")
  ) {
    resultado = "You Win";
  } else {
    resultado = "you lose";
  }

  alert(resultado);
}

result(humanChoice, choice);
