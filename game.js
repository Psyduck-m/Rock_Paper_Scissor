
let result = '';
let computerMove = '';
let player = '';
let score = JSON.parse(localStorage.getItem('score'))|| {win : 0,losses: 0,tie: 0};

updateScore();

let Num = 0;




let imageUrls = [
    "<img src = 'images/rock-emoji.png'>",
    "<img src ='images/paper-emoji.png'>",
    "<img src = 'images/scissors-emoji.png'>",
    "None"
]



const computer_moves = document.querySelector('.computer-moves');
const player_moves = document.querySelector('.player-moves');
computer_moves.innerHTML = "None";
player_moves.innerHTML = "None";

function updateScore() {
    document.querySelector('.js-score').innerText = `Win :  ${score.win}  Loose :  ${score.losses}  Tie :  ${score.tie}`;
}


function updateResult(){
    document.querySelector('.js-result').innerHTML = result === "Tie" ? result : `you ${result}`;

}


function whenResetIsPressed(){
    score.win = 0;
    score.tie = 0;
    score.losses = 0;
    result = '';
    computerMove = 'None';
    player = 'None';
    localStorage.removeItem('score'); 
    updateScore();
    updateResult()
    computer_moves.innerHTML = imageUrls[3];
    player_moves.innerHTML = imageUrls[3];
    document.querySelector('.js-result').innerHTML = result;
    
}

function whoWon(playerMove, randomNumber){


    if(randomNumber >=0 && randomNumber < 1/3)
    {
        computerMove = 'Rock';
        computer_moves.innerHTML = imageUrls[0];
        console.log("Computer chose rock!");
        switch(playerMove) 
        {
            case 1:{
                player = 'Rock';
                player_moves.innerHTML = imageUrls[0];
                result = 'Tie';
                break;
            }
            
            case 2:{
                player = 'Paper';
                player_moves.innerHTML = imageUrls[1];
                result = 'win';
                break;}
            case 3:
                {player = 'scissor';
                player_moves.innerHTML = imageUrls[2];
                result = 'loose';
                break;
                }
            default:
                console.log("Kindly select something");
        }
    }

    else if(randomNumber >=1/3 && randomNumber < 2/3)
    {   computerMove = 'Paper';
        computer_moves.innerHTML = imageUrls[1];
        console.log("Computer chose Paper!");
        switch(playerMove) 
        {
            case 1:{
                player = 'Rock';
                player_moves.innerHTML = imageUrls[0];
                result = 'loose';
                break;
            }
            
            case 2:{
                player = 'Paper';
                player_moves.innerHTML = imageUrls[1];
                result = 'Tie';
                break;}
            case 3:
                {player = 'scissor';
                player_moves.innerHTML = imageUrls[2];
                result = 'win';
                break;
                }
            default:
                console.log("Kindly select something");
        }
    }

    else if(randomNumber >= 2/3 && randomNumber < 1)
    {   computerMove = 'Scissor';
        computer_moves.innerHTML = imageUrls[2];
        console.log("Computer chose Scissor!");
        switch(playerMove) 
        {
            case 1:{
                player = 'Rock';
                player_moves.innerHTML = imageUrls[0];
                result = 'win';
                break;
            }
            
            case 2:{
                player = 'Paper';
                player_moves.innerHTML = imageUrls[1];
                result = 'loose';
                break;}
            case 3:
                {player = 'scissor';
                player_moves.innerHTML = imageUrls[2];
                result = 'Tie';
                break;
                }
            default:
                console.log("Kindly select something");
        }
    }
    if(result === 'win')
        score.win++;
    else if(result === 'loose')
        score.losses++;
    else 
        score.tie++;
    // alert(`Player choose ${player}, Computer choose ${computerMove}, You ${result}
    // Win : ${score.win} Loose: ${score.losses} Tie: ${score.tie}`);
    updateScore();

    updateResult()
    




    localStorage.setItem('score', JSON.stringify(score));
}