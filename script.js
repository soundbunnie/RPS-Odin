//create array that holds rps choices
var options = ["rock", "paper", "scissors"]

//create empty variable to store computer choice
var computerChoice

var playerChoice


//create function that randomly chooses from options
function getComputerChoice(){
    //create random number within range of options.length, create variable referring to item index of the result
    computerChoice = options[Math.floor(Math.random() * options.length)]
    return(computerChoice)
}

//ask user to input their choice then convert to lower case
function getPlayerChoice(){
    playerChoice = prompt("Rock, Paper, or Scissors?");
    return(playerChoice)
}

//write function to play round
function playRound(playerChoice, computerChoice){
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    //create logic gate with winning outcomes
    if (playerChoice === "paper" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper"){
        return "You win";
    }
    else{
        return "No win";
    }
}