const size = 25;
let inc = 4;
let row = [];
let idx = 0;
const board = [];

// make a function that selects the row id and assigns an ID for each col
for (var i = 0; i < size; i++) {
	row[idx] = i;
	idx++;
	if (i === inc) {
		board.push(row);
		inc += 5;
		row = [];
		idx = 0;
	}	
}

// for (var i = 0; i < size; i++) {	
// 	board.push(row);
// }
$(".col").on("click", function() {
	$(this).text("X");
})


console.log(board)