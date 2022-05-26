function computerPlay(){
    let randomNumber = Math.floor(Math.random()*100) + 1;

    if(randomNumber <= 33){
        return "ROCK";
    }else if(randomNumber >= 67){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

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
    for(let i = 0; i < 5; i++){
        let selection = prompt("Enter Rock, Paper or Scissors");
        const playerSelection = selection.toUpperCase();
        
        console.log("Player chose " + playerSelection);
        const computerSelection = computerPlay();
        console.log("Computer played " + computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}
game();