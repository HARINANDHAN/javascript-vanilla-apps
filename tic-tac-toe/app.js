function initBoard() {
	let size = 5;
	let inc = 4;
	let row = [];
	let idx = 0;
	let board = [];

	for (var i = 0; i < size; i++) {
		var $row = $('#row' + i);

		for (var j = 0; j < size; j++) {
			$row
				.append(`<div>${null}</div>`)
				.addClass('col')
				.attr('id', `row${j}`)
				.attr('onclick', this.Board.playATurn)
		}
		console.log($row);
		row[idx] = i;
		idx++;
		if (i === inc) {
			board.push($row);
			inc += 5;
			idx = 0;
		}
	}
	return board;
}

initBoard();
console.log(board);

function Board () {
	this.playerMoves = 0;
	this.computerMoves = 0;
	this.board = initBoard();
}

Board.prototype.reset = () => {
	return initBoard();
}

Board.prototype.isValid = (row, col) => {
	return board[row][col] !== 'X' || board[row][col] !== 'O' ? true : false;
}

Board.prototype.whosTurn = () => {
	return this.playerMoves > this.computerMoves ? 'computer' : 'player';
}

Board.prototype.playATurn = () => {
	
}

Board.prototype.computersTurn = () => {
	
}

Board.prototype.isWinner = () => {
	
}

const startGame = new Board();