window.addEventListener('keydown', function(event) {
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
});

const keys = document.querySelectorAll(".key");
