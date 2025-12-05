function getComputerChoice() {
    Choice=Math.floor(Math.random()*3);
    if (Choice==0){
        return "Rock";
    } else if (Choice==1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice(){
    return prompt("What is your choice?");
}

let humanScore = 0;
let computerScore = 0;

// Make humanChoice parameter case-insensitive-> First letter always capital, the rest not
function capitalize(humanChoice){
    var b=humanChoice[0];
    var rest=humanChoice.slice(1);
    var b =b.toUpperCase();
    var rest=rest.toLowerCase();
    return b+rest;
}

function playRound(humanChoice, computerChoice){
    //var humanChoice = capitalize(humanChoice);
    if (humanChoice == "Rock") {
        if (computerChoice == "Rock") {
            console.log("Play again");
        } else if (computerChoice=="Paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    } else if (humanChoice == "Paper"){
        if (computerChoice == "Rock"){
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (computerChoice == "Paper"){
            console.log("Play again!");
        } else {
            console.log("You lose! Scissors beat Paper");
            computerScore++;
        }
    } else {
        if (computerChoice == "Rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (computerChoice == "Paper"){
            console.log("You win! Scissors beats Rock");
            humanScore++;
        } else {
            console.log("Play again!");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);