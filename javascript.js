 //- Get players choice. 
 function getPlayersChoice(){
    let playersChoice;
    let x = true;
        while(x){
            playersChoice = prompt("Choose yours:");
            playersChoice = playersChoice.toLowerCase();
            if(playersChoice === "rock" || playersChoice === "paper" || playersChoice === "scissors"){
                x = false;
            }else{
                console.log("Please choose between PAPER, ROCK or SCISSORS.");
            }
        }
        return playersChoice;
}
//- Generate random computer choice
function getComputersChoice(){
    let choice;
    let x = Math.floor(Math.random() * 3) + 1;
    if(x === 3){
        return "Paper";
    }else if(x === 2){
        return "Rock"
    }else if(x === 1){
        return "Scissors";
    }else{
        return "Error";
    }
}
//- Compare the two choices and determine winner
function play(playersChoice, ComputersChoice){
    const player = playersChoice.toLowerCase();
    const computer = ComputersChoice.toLowerCase();
    if(player === computer){
        return "It's a DRAW nobody get's a point.";
    }else{
        if(player === "rock" && computer === "paper"){
            return "You LOST, PAPER beats ROCK!";
        }else if(player === "rock" && computer === "scissors"){
            return "You WON, ROCK beats SCISSORS!";
        }else if(player === "paper" && computer === "scissors"){
            return "You LOST, SCISSORS beat PAPER!";
        }else if(player === "paper" && computer === "rock"){
            return "You WON, PAPER beats ROCK!";
        }else if(player === "scissors" && computer === "rock"){
            return "You LOST, ROCK beats SCISSORS!";
        }else if(player === "scissors" && computer === "paper"){
            return "You WON, SCISSORS beat PAPER!";
        }else{
            return "ERROR";
        }
    }
}
//- Play 5 rounds
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let playersChoice = getPlayersChoice();
        const computersChoice = getComputersChoice();
        console.log(`Players choice is: ${playersChoice} and computers choice is: ${computersChoice}`)
        const playGame = play(playersChoice, computersChoice);
        if(playGame[4] === "W"){
            playerScore += 1;
        }else if(playGame[4] === "L"){
            computerScore += 1;
        }
        console.log(playGame);
    }
    if(playerScore > computerScore){
        console.log(`You won!!!! The score is ${playerScore}:${computerScore}`);
    }else if(playerScore < computerScore){
        console.log(`You lost ... The score is: ${playerScore}:${computerScore}`);
    }else{
        console.log(`It's a draw! Try again! The score is: ${playerScore}:${computerScore}`);
    }
}
//- Start new game

game();