/*
We store our game status element here to allow us to more easily 
use it later on 
*/
//let playCount = 0;

const statusDisplay = document.querySelector('.game--status');
/*
Here we declare some variables that we will use to track the 
game state throught the game. 
*/
/*
We will use gameActive to pause the game in case of an end scenario
*/
let gameActive = true;
/*
We will store our current player here, so we know whos turn 
*/
let currentPlayer = "X";
/*
We will store our current game state here, the form of empty strings in an array
 will allow us to easily track played cells and validate the game state later on
*/
let gameState = ["", "", "", "", "", "", "", "", ""];
/*
Here we have declared some messages we will display to the user during the game.
Since we have some dynamic factors in those messages, namely the current player,
we have declared them as functions, so that the actual message gets created with 
current data every time we need it.
*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;


/*
We set the inital message to let the players know whose turn it is
*/
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed(clickedCell, clickedCellIndex) {
/*
We update our internal game state to reflect the played move, 
as well as update the user interface to reflect the played move
*/
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
function handlePlayerChange() {
	currentPlayer = currentPlayer === "X" ? "O" : "X";
	statusDisplay.innerHTML = currentPlayerTurn();
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleResultValidation() {
	
	
	 var x_xwin = document.getElementById("myAudio_XWin");
	 var x_owin = document.getElementById("myAudio_OWin");
	 var x_draw = document.getElementById("myAudio_Draw");
	
	
	let roundWon = false;
	for (let i = 0; i <= 7; i++) {
		const winCondition = winningConditions[i];
		let a = gameState[winCondition[0]];
		let b = gameState[winCondition[1]];
		let c = gameState[winCondition[2]];
		if (a === '' || b === '' || c === '') {
			continue;
		}
		if (a === b && b === c) {
			roundWon = true;
			break
		}
	}
if (roundWon) {
	 var audios = document.getElementsByTagName('audio');
      for(var i = 0, len = audios.length; i < len;i++){
            audios[i].pause();
    }

	
	    //wait(1000);
		statusDisplay.innerHTML = winningMessage();
		
		if(currentPlayer==="X")
				  x_xwin.play();
		else if(currentPlayer==="O")
				  x_owin.play(); 
		
		gameActive = false;
		return;
	}
/* 
We will check weather there are any values in our game state array 
that are still not populated with a player sign
*/
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
			 var audios = document.getElementsByTagName('audio');
      for(var i = 0, len = audios.length; i < len;i++){
            audios[i].pause();
    }
		//wait(1000);
        statusDisplay.innerHTML = drawMessage();
		x_draw.play();
        gameActive = false;
        return;
    }
/*
If we get to here we know that the no one won the game yet, 
and that there are still moves to be played, so we continue by changing the current player.
*/
    handlePlayerChange();
}
function handleCellClick(clickedCellEvent) {

   
   var x1 = document.getElementById("myAudio_X1");
   var x2 = document.getElementById("myAudio_X2");
   var x3 = document.getElementById("myAudio_X3");
   var x4 = document.getElementById("myAudio_X4");
   var x5 = document.getElementById("myAudio_X5");
   var x6 = document.getElementById("myAudio_X6");
   var x7 = document.getElementById("myAudio_X7");
   var x8 = document.getElementById("myAudio_X8");
   var x9 = document.getElementById("myAudio_X9");
   var o1 = document.getElementById("myAudio_O1");
   var o2 = document.getElementById("myAudio_O2");
   var o3 = document.getElementById("myAudio_O3");
   var o4 = document.getElementById("myAudio_O4");
   var o5 = document.getElementById("myAudio_O5");
   var o6 = document.getElementById("myAudio_O6");
   var o7 = document.getElementById("myAudio_O7");
   var o8 = document.getElementById("myAudio_O8");
   var o9 = document.getElementById("myAudio_O9");

/*
We will save the clicked html element in a variable for easier further use
*/    
    const clickedCell = clickedCellEvent.target;
/*
Here we will grab the 'data-cell-index' attribute from the clicked cell to identify where that cell is in our grid. 
Please note that the getAttribute will return a string value. Since we need an actual number we will parse it to an 
integer(number)
*/
    const clickedCellIndex = parseInt(
      clickedCell.getAttribute('data-cell-index')
    );
/* 
Next up we need to check whether the call has already been played, 
or if the game is paused. If either of those is true we will simply ignore the click.
*/
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
/* 
If everything if in order we will proceed with the game flow
*/    
    handleCellPlayed(clickedCell, clickedCellIndex);
	
	switch(clickedCellIndex)
	{
		case 0:
		      if(currentPlayer==="X")
				  x1.play();
			  else if(currentPlayer==="O")
				  o1.play(); 
		break;
		case 1:
			 if(currentPlayer==="X")
				  x2.play();
			  else if(currentPlayer==="O")
				  o2.play(); 
		break;
		case 2:
		      if(currentPlayer==="X")
				  x3.play();
			  else if(currentPlayer==="O")
				  o3.play(); 
		break;
		case 3:
		      if(currentPlayer==="X")
				  x4.play();
			  else if(currentPlayer==="O")
				  o4.play(); 
		break;
		case 4:
		      if(currentPlayer==="X")
				  x5.play();
			  else if(currentPlayer==="O")
				  o5.play(); 
		break;
		case 5:
		      if(currentPlayer==="X")
				  x6.play();
			  else if(currentPlayer==="O")
				  o6.play(); 
		break;
		case 6:
		       if(currentPlayer==="X")
				  x7.play();
			  else if(currentPlayer==="O")
				  o7.play(); 
		break;
		case 7:
		      if(currentPlayer==="X")
				  x8.play();
			  else if(currentPlayer==="O")
				  o8.play(); 
		break;
		case 8:
		       if(currentPlayer==="X")
				  x9.play();
			  else if(currentPlayer==="O")
				  o9.play(); 
		break;
	}
	
	//wait(2000);
	
    handleResultValidation();
}
function handleRestartGame() {
	gameActive = true;
	currentPlayer = "X";
	gameState = ["", "", "", "", "", "", "", "", ""];
	statusDisplay.innerHTML = currentPlayerTurn();
	document.querySelectorAll('.cell')
				.forEach(cell => cell.innerHTML = "");
}

function play(element){
   var audio = document.getElementById(element);
   audio.play();
             }
/*
And finally we add our event listeners to the actual game cells, as well as our 
restart button
*/
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
