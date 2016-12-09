function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	// handle errors
	if (!audio) return;
	// configure audio 
		// to rewind to the start on every key press
	audio.currentTime = 0; 
	audio.play();
		// add a .playing class on key press
	key.classList.add("playing");	
}

function removeTransition(event) {	
	if (event.propertyName !== "transform") return;
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener('keydown', playSound);
