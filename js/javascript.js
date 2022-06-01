
//this function determines computer choice 
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

//this function determines who won and returns message

function playRound(playerSelection, computerSelection){
    if( computerSelection === "ROCK" && playerSelection === "SCISSORS"){
        return "You Lose! Rock beats Scissors";
    }
    if( computerSelection === "ROCK" && playerSelection === "ROCK"){
        return "It's a draw! Rock ties Rock";
    }
    if( computerSelection === "ROCK" && playerSelection === "PAPER"){
        return "You Win! Paper beats Rock";
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

//this functions checks if either the play or computer has 5 points and announces the winner
function checkIfOver(player, computer, resultscontainer, result, winorlose, winlose){
    

    if(player < 5 && computer < 5){

        resultscontainer.appendChild(result);
        winlose.textContent = '';
        winorlose.appendChild(winlose);
        
       

     }else{
       
        if(player > computer){

        winlose.textContent = ' Game Over.You Won!';
        winorlose.appendChild(winlose);
       
         
        }else{
        winlose.textContent = 'Game Over. You Lost!';
        winorlose.appendChild(winlose);
       
     
}
}

}

//main function

function game(){

    let playerScore = 0;
    let computerScore = 0;

   

 
    const btnrock = document.querySelector('#rock');
    const btnpaper = document.querySelector('#paper');
    const btnscissors = document.querySelector('#scissors');
    const resultscontainer = document.querySelector('#resultscontainer');
    const scorecontainer = document.querySelector('#scorecontainer');
    const winorlose = document.querySelector('#winorlose');
    const winlose = document.createElement('div');
    const score = document.createElement('div');
    score.textContent = ` Player Score: ${ playerScore } Computer  Score: ${ computerScore } `;
    scorecontainer.appendChild(score);
    
    
    const results = document.createElement('div');
    results.classList.add('results');

    //button for player to choose rock
    btnrock.addEventListener('click', function() { 
        let whoWon = playRound('ROCK', computerPlay());
        results.textContent = ` ${ whoWon } `;
              
        //Determines who won the round by checking if the word 'Win!' or 'Lose!' is in the string returned from the playRound function. 
        //Increments the appropiate players score based on that information and displays it  
        if(whoWon.search("Win!") != -1){
            playerScore++;
            score.textContent = ` Player Score: ${ playerScore }  Computer  Score: ${ computerScore } `;
            scorecontainer.appendChild(score);

        }else if(whoWon.search("Lose!") != -1){
            computerScore++;
            score.textContent = ` Player Score: ${ playerScore }  Computer  Score: ${ computerScore } `;
            scorecontainer.appendChild(score);

        }else{
            score.textContent = ` Player Score: ${ playerScore }  Computer  Score: ${ computerScore } `;
            scorecontainer.appendChild(score);

        }

        checkIfOver(playerScore, computerScore, resultscontainer, results, winorlose, winlose );

        if(playerScore >= 5 || computerScore >= 5){
            playerScore = 0;
            computerScore = 0;
        }
     
        
   
    });
   
    //button for player to choose paper
    btnpaper.addEventListener('click', function() {     
        let whoWon = playRound('PAPER', computerPlay());
        results.textContent = ` ${ whoWon } `;


        if(whoWon.search("Win!") != -1){
            playerScore++;
            score.textContent = ` Player Score: ${ playerScore }  Computer  Score: ${ computerScore } `;
            scorecontainer.appendChild(score);

        }else if(whoWon.search("Lose!") != -1){
            computerScore++;
            score.textContent = ` Player Score: ${ playerScore }  Computer  Score: ${ computerScore } `;
            scorecontainer.appendChild(score);

        }else{
            score.textContent = ` Player Score: ${ playerScore }  Computer  Score: ${ computerScore } `;
            scorecontainer.appendChild(score);

        }

        checkIfOver(playerScore, computerScore, resultscontainer, results, winorlose, winlose );
        if(playerScore >= 5 || computerScore >= 5){
            playerScore = 0;
            computerScore = 0;
        }


        
     });


    
    //button for player to choose scissors

    btnscissors.addEventListener('click', function() {
        let whoWon = playRound('SCISSORS', computerPlay());
        results.textContent = ` ${ whoWon } `;


        if(whoWon.search("Win!") != -1){
            playerScore++;
            score.textContent = ` Player Score: ${ playerScore }  Computer  Score: ${ computerScore } `;
            scorecontainer.appendChild(score);

        }else if(whoWon.search("Lose!") != -1){
            computerScore++;
            score.textContent = ` Player Score: ${ playerScore }  Computer  Score: ${ computerScore }`;
            scorecontainer.appendChild(score);

        }else{
            score.textContent = ` Player Score is ${ playerScore }  Computer  Score: ${ computerScore } `;
            scorecontainer.appendChild(score);

        }
        
        checkIfOver(playerScore, computerScore, resultscontainer, results, winorlose, winlose );
        if(playerScore >= 5 || computerScore >= 5){
            playerScore = 0;
            computerScore = 0;
        }
        

    });

  


}

game();