
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
    score.textContent = ` Player score is ${ playerScore }. Computer  score is ${ computerScore }. `;
    scorecontainer.appendChild(score);

    btnrock.addEventListener('click', function() { 
        const results = document.createElement('div');
        results.classList.add('results');
        let whoWon = playRound('ROCK', computerPlay());
        results.textContent = ` ${ whoWon } `;

       

        if(whoWon.search("Win!") != -1){
            playerScore++;
            score.textContent = ` Player score is ${ playerScore }. Computer  score is ${ computerScore }. `;
            scorecontainer.appendChild(score);

        }else if(whoWon.search("Lose!") != -1){
            computerScore++;
            score.textContent = ` Player score is ${ playerScore }. Computer  score is ${ computerScore }. `;
            scorecontainer.appendChild(score);

        }else{
            score.textContent = ` Player score is ${ playerScore }. Computer  score is ${ computerScore }. `;
            scorecontainer.appendChild(score);

        }
        
        if(playerScore < 5 && computerScore < 5){

            resultscontainer.appendChild(results);

         }else{
           
            if(playerScore > computerScore){

             winlose.textContent = ' Game Over.You Won!';
             winorlose.appendChild(winlose);
             
            }else{
            winlose.textContent = 'Game Over. You Lost!';
            winorlose.appendChild(winlose);
         
    }
    }
   
    });
   
    btnpaper.addEventListener('click', function() { 
        const results = document.createElement('div');
        results.classList.add('results');
        let whoWon = playRound('PAPER', computerPlay());
        results.textContent = ` ${ whoWon } `;


        if(whoWon.search("Win!") != -1){
            playerScore++;
            score.textContent = ` Player score is ${ playerScore }. Computer  score is ${ computerScore }. `;
            scorecontainer.appendChild(score);

        }else if(whoWon.search("Lose!") != -1){
            computerScore++;
            score.textContent = ` Player score is ${ playerScore }. Computer  score is ${ computerScore }. `;
            scorecontainer.appendChild(score);

        }else{
            score.textContent = ` Player score is ${ playerScore }. Computer  score is ${ computerScore }. `;
            scorecontainer.appendChild(score);

        }

        if(playerScore < 5 && computerScore < 5){

            resultscontainer.appendChild(results);

         }else{
           
            if(playerScore > computerScore){

             winlose.textContent = ' Game Over.You Won!';
             winorlose.appendChild(winlose);
            }else{
            winlose.textContent = 'Game Over. You Lost!';
            winorlose.appendChild(winlose);
    }
   }


        
     });

    btnscissors.addEventListener('click', function() {
        const results = document.createElement('div');
        results.classList.add('results');
        let whoWon = playRound('SCISSORS', computerPlay());
        results.textContent = ` ${ whoWon } `;


        if(whoWon.search("Win!") != -1){
            playerScore++;
            score.textContent = ` Player score is ${ playerScore }. Computer  score is ${ computerScore }. `;
            scorecontainer.appendChild(score);

        }else if(whoWon.search("Lose!") != -1){
            computerScore++;
            score.textContent = ` Player score is ${ playerScore }. Computer  score is ${ computerScore }. `;
            scorecontainer.appendChild(score);

        }else{
            score.textContent = ` Player score is ${ playerScore }. Computer  score is ${ computerScore }. `;
            scorecontainer.appendChild(score);

        }
        if(playerScore < 5 && computerScore < 5){

            resultscontainer.appendChild(results);

         }else{
           
            if(playerScore > computerScore){

             winlose.textContent = ' Game Over.You Won!';
             winorlose.appendChild(winlose);
            }else{
            winlose.textContent = 'Game Over. You Lost!';
            winorlose.appendChild(winlose);
    }
       }

        

    });

  


}

game();