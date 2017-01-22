$(document).ready(function() {
	// cache movie data to improve performance
	var savedMovies = {};
	$('form').on('submit', function(event) {
		var userInput1 = $('.first').val();
		var userInput2 = $('.second').val();

		event.preventDefault();
		$('input:text').val('');
		$('.winner h3').empty();
		$('.movie1').empty();
		$('.movie2').empty();
		console.log(savedMovies);

		if (savedMovies.Title === userInput1 && savedMovies.Title === userInput2) {
			var movie1 = $('.movie2').append(`<div class='title'>${movieData1.Title}</div>`);
			movie1.append(`<div class='plot'>${movieData1.Plot}</div>`);
			movie1.append(`<div class='year'>${movieData1.Year}</div>`);				
			movie1.append(`<img class='poster' src='${movieData1.Poster}' />`);

			var movie2 = $('.movie1').append(`<div class='title'>${movieData2.Title}</div>`);
			movie2.append(`<div class='plot'>${movieData2.Plot}</div>`);
			movie2.append(`<div class='year'>${movieData2.Year}</div>`);				
			movie2.append(`<img class='poster' src='${movieData2.Poster}' />`);
		}

		else {

			$.getJSON(`https://www.omdbapi.com/?t=${userInput1}`).then(function(movieData1) {
					// console.log(movieData1);
					var id = movieData1.imdbID;
					if (!savedMovies[id]) {
						console.log("Able to read savedMovies:");
						savedMovies[id] = movieData1;
					}
					return movieData1;
				}).then(function(movieData1) {
						$.getJSON(`https://www.omdbapi.com/?t=${userInput2}`).then(function(movieData2) {
							// console.log(movieData2);
							var id = movieData2.imdbID;
							if (!savedMovies[id]) {
								savedMovies[id] = movieData2;
							}
							var movie1 = $('.movie2').append(`<div class='title'>${movieData1.Title}</div>`);
							movie1.append(`<div class='plot'>${movieData1.Plot}</div>`);
							movie1.append(`<div class='year'>${movieData1.Year}</div>`);				
							movie1.append(`<img class='poster' src='${movieData1.Poster}' />`);

							var movie2 = $('.movie1').append(`<div class='title'>${movieData2.Title}</div>`);
							movie2.append(`<div class='plot'>${movieData2.Plot}</div>`);
							movie2.append(`<div class='year'>${movieData2.Year}</div>`);				
							movie2.append(`<img class='poster' src='${movieData2.Poster}' />`);

							$('.winner:text').val('');

							if (movieData1.Metascore > movieData2.Metascore) {
								$('.winner').prepend(`<h3>${movieData1.Title} wins with a score of ${movieData1.Metascore} while ${movieData2.Title} scored ${movieData2.Metascore}</h3`);
							} else {
								$('.winner').prepend(`<h3>${movieData2.Title} wins with a score of ${movieData2.Metascore} while ${movieData1.Title} scored ${movieData1.Metascore}</h3`);
							}
						});
				});
		}

	});
});