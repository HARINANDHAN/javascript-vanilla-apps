const cities = [];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

fetch(endpoint)
	.then(info => info.json())
	.then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
	return cities.filter(location => {
		// figure out if city or state matches what was searched
		const regex = new RegExp(wordToMatch, 'gi');
		return location.city.match(regex) || location.state.match(regex);
	});
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
	const matchArray = findMatches(this.value, cities);
	const html = matchArray.map(location => {
		const regex = new RegExp(this.value, 'gi');
		const cityName = location.city.replace(regex, `<span class="hl">${this.value}</span>`);
		const stateName = location.state.replace(regex, `<span class="hl">${this.value}</span>`);
		return `
			<li>
				<span>${cityName}, ${stateName}</span>
				<span>${numberWithCommas(location.population)}</span>
			</li>
		`;
	}).join('');
	suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);