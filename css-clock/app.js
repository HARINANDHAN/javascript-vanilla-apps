const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();
	// convert seconds to degrees to rotate the second hand
	// 0 seconds === 0 degrees, 60 seconds === 360 degrees
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hourDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	console.log(now);
}


setInterval(setDate, 1000);