function computerPlay(){
    let randomNumber = Math.floor(Math.random()*100) + 1;

    if(randomNumber <= 33){
        return "Rock";
    }else if(randomNumber >= 67){
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(computerPlay());