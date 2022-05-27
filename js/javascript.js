
//function determines computer choice 
function computerPlay(){

    //random number between 0 and 100
    let randomNumber = Math.floor(Math.random()*100) + 1;

    //return rock paper or scissors 1/3 of the time
    if(randomNumber <= 33){
        return "ROCK";
    }else if(randomNumber >= 67){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

//function determines who won

function playRound(playerSelection, computerSelection){
    if( computerSelection === "ROCK" && playerSelection === "SCISSORS"){
        return "You Lose! Rock beats Scissors";
    }
    if( computerSelection === "ROCK" && playerSelection === "ROCK"){
        return "It's a draw! Rock ties Rock";
    }
    if( computerSelection === "ROCK" && playerSelection === "PAPER"){
        return "You Win! Rock beats Paper";
    }

    if( computerSelection === "SCISSORS" && playerSelection === "PAPER"){
        return "You Lose! Scissors beats Paper";
    }
    if( computerSelection === "SCISSORS" && playerSelection === "SCISSORS"){
        return "It's a draw! Scissors ties Scissors";
    }
    if( computerSelection === "SCISSORS" && playerSelection === "ROCK"){
        return "You Win! Rock beats Scissors";
    }

    if( computerSelection === "PAPER" && playerSelection === "ROCK"){
        return "You Lose! Paper beats Rock";
    }
    if( computerSelection === "PAPER" && playerSelection === "PAPER"){
        return "It's a draw! Paper ties Paper";
    }
    if( computerSelection == "PAPER" && playerSelection === "SCISSORS"){
        return "You Win! Scissors beats Paper";
    }

}


function game(){

    //5 rounds of rock paper scissors
    for(let i = 0; i < 5; i++){
        
        //input variable to store before making case insesitive
        let userInput;
        //case insesitive user input variable
        let playerSelection;
        
        let keepGoing = true;

        //check if user input is rock paper or scissors. force them to enter correct input
        while(keepGoing){
        userInput = prompt("Enter Rock, Paper or Scissors");
        playerSelection = userInput.toUpperCase();

            if(playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection ==="SCISSORS" ){
                keepGoing = false;

            }else{
                console.log("Invalid entry")
            }

    }
        
        console.log("Player chose " + playerSelection);
        const computerSelection = computerPlay();
        console.log("Computer chose " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}
game();