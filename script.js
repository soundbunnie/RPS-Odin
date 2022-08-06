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
    //register computerChoice and playerChoice and convert them to lowercase
    computerChoice = getComputerChoice().toLowerCase();
    playerChoice = getPlayerChoice().toLowerCase();
    //create logic gate with winning outcomes
    if (playerChoice === "paper" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper"){
        return `You win, ${playerChoice} beats ${computerChoice}`;
    }
    //create logic gate for ties
    else if (playerChoice === computerChoice){
        return `It's a tie! ${playerChoice} vs ${computerChoice}`;
    }
    //create logic gate for losing outcomes
    else{
        return `No win, ${playerChoice} loses to ${computerChoice}`;
    }
}