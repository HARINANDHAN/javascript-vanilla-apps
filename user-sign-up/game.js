var gameModule = (function() {
		/* Identifiers must begin with capital letter.
	Identifiers must be two or more characters long.
	Spaces are allowed, but no punctuation.
	Identifiers can’t include certain “naughty” words. */
	var badWords =["fuck","shit","motherfucker", "asshole","ass","fucker"];

	// check for bad words
	function hasBadWords(str) {
		for (var i = 0; i < badWords.length; i++) {
			if (str.indexOf(badWords[i]) >= 0) return true;
		}
		return false;
	}

	function validIdentifier(str) {
		// is the input value blank?
		if (str === "") return false;
		// must be at least 2 characters
		if (str.length < 2) return false;
		// must begin with a capital letter
		if (str.charAt(0) !== str.charAt(0).toUpperCase()) return false;
		// must not have any punctuation
		// if (/[^a-z ]/i.test(str) === false) return false;
		// must not contain naughty words
		if (hasBadWords(str)) return false;
		return true;
	}

	return {
		valid: validIdentifier
	}

}());