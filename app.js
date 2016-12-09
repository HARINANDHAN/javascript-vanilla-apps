window.addEventListener('keydown', function(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	console.log(key);
	if (!audio) return;
	audio.currentTime = 0; // rewind to the start
	audio.play();
});