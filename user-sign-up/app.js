// DOM
document.getElementById("submitButton").addEventListener("click", function(e) {		
	var identifier = document.getElementById("identifier").value;		
	if(gameModule.valid(identifier)) {
		var answerDiv = document.getElementById("valid");
		var response = document.createTextNode("Yes!");
		answerDiv.appendChild(response);
		console.log('true');
	} else { 
		console.log('false');
		e.preventDefault();
		return false;	
	}
});

