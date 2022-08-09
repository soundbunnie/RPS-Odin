//create array with RPS options

var options = ["rock", "paper", "scissors"]

//create empty variables to store computer and player choice
var computerChoice

var playerChoice

//create empty variable to store round result
var roundResult

//create empty variable to store score in

var playerScore = 0
var computerScore = 0


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
        roundResult = "win"
        console.log(`You win, ${playerChoice} beats ${computerChoice}`);
    }
    //create logic gate for losing outcomes
    else if (playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "rock" && computerChoice === "paper" || playerChoice === "scissors" && computerChoice === "rock"){
        roundResult = "tie"
        console.log(`No win, ${playerChoice} loses to ${computerChoice}`);
    }
    //create logic gate for ties
    else if (playerChoice === computerChoice){
        roundResult = "loss"
        console.log(`It's a tie! ${playerChoice} vs ${computerChoice}`);
    }
    //restart function if user inputs unrecognized option
    else{
        playRound()
    }
}
