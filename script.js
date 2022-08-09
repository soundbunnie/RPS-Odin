var options = ["rock", "paper", "scissors"]

//create empty variables to use later
var computerChoice
var playerChoice
var roundResult
var playerScore = 0
var computerScore = 0

var choiceButtons = document.querySelectorAll('button'); //assign all buttons to variable
var playerChoiceDisplay = document.getElementById('player-choice');
var computerChoiceDisplay = document.getElementById('computer-choice');
var roundResultDisplay = document.getElementById('round-result');

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
    playerChoiceDisplay.style.color = "black";
    computerChoiceDisplay.style.color = "black";
    computerChoice = getComputerChoice(); //register computerChoice and playerChoice and convert them to lowercase
    computerChoiceDisplay.textContent = computerChoice;
    //create logic gate with winning outcomes
    if (playerChoice === "paper" && computerChoice === "rock" || playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper"){
        roundResult = "win"
        playerChoiceDisplay.style.color = "#77DD77";
        computerChoiceDisplay.style.color = "#FF6961";
        roundResultDisplay.textContent = "win";
    }
    //create logic gate for losing outcomes
    else if (playerChoice === "paper" && computerChoice === "scissors" || playerChoice === "rock" && computerChoice === "paper" || playerChoice === "scissors" && computerChoice === "rock"){
        roundResult = "loss"
        playerChoiceDisplay.style.color = "#FF6961";
        computerChoiceDisplay.style.color = "#77DD77"
        roundResultDisplay.textContent = "loss";
    }
    //create logic gate for ties
    else if (playerChoice === computerChoice){
        roundResult = "tie"
        roundResultDisplay.textContent = "tie";
    }
}
