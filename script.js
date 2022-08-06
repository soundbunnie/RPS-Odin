//create array that holds rps choices
var options = ["rock", "paper", "scissors"]

//create empty variable to store computer choice
var computerChoice

//create function that randomly chooses from options
function getComputerChoice(){
    //create random number within range of options.length, create variable referring to item index of the result
    computerChoice = options[Math.floor(Math.random() * options.length)]
    return(computerChoice)
}

//ask user to input their choice then convert to lower case
var playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase()