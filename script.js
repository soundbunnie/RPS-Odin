var options = ["rock", "paper", "scissors"]

//create empty variables to use later
var computerChoice
var playerChoice
var roundResult
var playerScore = 0
var computerScore = 0

var choiceButtons = document.querySelectorAll('button'); //assign all buttons to variable
var playerChoiceDisplay = document.getElementById('player-choice');

choiceButtons.forEach((button) => { //add event listener for each buttons
    button.addEventListener('click', () => {
        playerChoice = button.id;
        playerChoiceDisplay.textContent = button.id;
        playRound(playerChoice);
        disableSelections();
        enableSelections();
    });
}); 

//create function that randomly chooses from options
function getComputerChoice(){
    //create random number within range of options.length, create variable referring to item index of the result
    computerChoice = options[Math.floor(Math.random() * options.length)]
    return computerChoice
}

function disableSelections(){
    choiceButtons.forEach((button) =>{
        button.disabled = true;
    })
}

function enableSelections(){
    choiceButtons.forEach((button) =>{
        button.disabled = false;
    })
}


//write function to play round
function playRound(playerChoice, computerChoice){
    computerChoice = getComputerChoice(); //register computerChoice and playerChoice and convert them to lowercase
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
}

