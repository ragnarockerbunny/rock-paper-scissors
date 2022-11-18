const getComputerChoice = ()=> {
    let choice = "undefined";

    switch(Math.floor(Math.random() * 3)){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper"
            break;
        case 2:
            choice = "scissors"
            break;

    }
    return choice;
}

const playRound = (playerChoice, computerChoice = getComputerChoice())=> {
    let pc = playerChoice.toLowerCase(), cc = computerChoice.toLowerCase();
    let playerWin = false;

    switch(pc){
        case "rock":
            if(cc == "scissors") playerWin = true;
            break;
        case "paper":
            if(cc == "rock") playerWin = true;
            break;
        case "scissors":
            if(cc == "paper") playerWin = true;
            break;
    }
    console.log("Player chose " + pc)
    console.log("The computer chose " + cc);
    console.log("Player has won? " + playerWin);

    let divref = document.getElementById("game-results")
    let result =  "\nPlayer chose " + pc + "\nThe computer chose " + cc + "\nPlayer has won round? " + playerWin;
    divref.innerText = result;

    return playerWin;
}

const game = () => {
    for(i = 0; i< 5; i++){
        let pc = prompt("Type rock, paper or scissors");
        playRound(pc);
    }
}