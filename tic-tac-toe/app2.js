// players turn
const player = 'X';
const computer = 'O';
// store the values to check for a winner
let turns = Array(25).fill('');
// is the game over?
let gameOver = false;
// keep track of computers turn to prevent infinite loop
let count = 0;
// init win conditions in playerTurn function
let winConditions;
let whosTurn = player;

// handle user click action
$('.box').on('click', function() {
	// get the id value from divs
	let cellId = $(this).attr('id');	
	// prevent player from playing out of turn
	if (whosTurn === player) {
		playerTurn(whosTurn, cellId)
	} else {
		console.log("Hold up, it's not your turn")
	}
});

function computersMove(turns) {	
	// computer can only move on an unmarked cell
	let availableCells = [];
	for (var i = 0; i < turns.length; i++) {
		if (turns[i] !== 'X' && turns[i] !== 'O') {
			availableCells.push(i);
		}
	}	
	let randomIndex = Math.floor(Math.random() * availableCells.length);
	let randomID = availableCells[randomIndex];
	
	turns[randomID] = whosTurn;
	$('#'+randomID).text(computer);

	whosTurn = player;
	// need to account for when the computer wins
}

function playerTurn(whosTurn, id) {
	let cell = $('#'+id).text();

	// check if spot is valid
	if (cell === '') {
		count++;
		// assign turns array at index id to value of turn
		turns[id] = whosTurn;
		// mark X on the screen
		$('#'+id).text(whosTurn);		
		// make winConditions(turns, turn)
		makeWinConditions(turns, whosTurn);
	}
	
	if (isWinner(turns, whosTurn) ) {
		console.log('End Game');
	} else {
		whosTurn = computer;
		computersMove(turns);
	}
}

function makeWinConditions(turns, turn) {
	winConditions = {
		rows: {
			a: turns[0] === turn && turns[1] === turn && turns[2] === turn && turns[3] === turn && turns[4] === turn,
			b: turns[5] === turn && turns[6] === turn && turns[7] === turn && turns[8] === turn && turns[9] === turn,
			c: turns[10] === turn && turns[11] === turn && turns[12] === turn && turns[13] === turn && turns[14] === turn,
			d: turns[15] === turn && turns[16] === turn && turns[17] === turn && turns[18] === turn && turns[19] === turn,
			e: turns[20] === turn && turns[21] === turn && turns[22] === turn && turns[23] === turn && turns[24] === turn
		},
		columns: {
			a: turns[0] === turn && turns[5] === turn && turns[10] === turn && turns[15] === turn && turns[20] === turn,
			b: turns[1] === turn && turns[6] === turn && turns[11] === turn && turns[16] === turn && turns[21] === turn,
			c: turns[2] === turn && turns[7] === turn && turns[12] === turn && turns[17] === turn && turns[22] === turn,
			d: turns[3] === turn && turns[8] === turn && turns[13] === turn && turns[18] === turn && turns[23] === turn,
			e: turns[4] === turn && turns[9] === turn && turns[14] === turn && turns[19] === turn && turns[24] === turn
		},
		diagonals: {
			a: turns[0] === turn && turns[6] === turn && turns[12] === turn && turns[18] === turn && turns[24] === turn,
			b: turns[4] === turn && turns[8] === turn && turns[12] === turn && turns[16] === turn && turns[20] === turn
		}
	}
}

function resetBoard() {
	turns = Array(25).fill('');
	$('.box').text('');
	gameOver = true;
}

function isWinner(turns, turn) {	
	// rows
	if (winConditions.rows.a) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
	} else if (winConditions.rows.b) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
	} else if (winConditions.rows.c) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
	} else if (winConditions.rows.d) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
	} else if (winConditions.rows.e) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
		// columns
	} else if (winConditions.columns.a) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
	} else if (winConditions.columns.b) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
	} else if (winConditions.columns.c) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
	} else if (winConditions.columns.d) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
	} else if (winConditions.columns.e) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
		// diagonals
	} else if (winConditions.diagonals.a) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
	} else if (winConditions.diagonals.b) {
		console.log("We've got a winner!")
		setTimeout(function() {
			resetBoard();
		}, 800);
	} 
}


