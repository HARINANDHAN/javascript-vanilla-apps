function darkSkyWeatherApp() {
	const location = $(".location");
	const API_KEY = "a180a648b4da947dcb96ad1e26d617dd";
	const url = "https://api.darksky.net/forecast/";

	navigator.geolocation.getCurrentPosition(success, error);

	function success(position) {
	  let latitude = position.coords.latitude;
	  let longitude = position.coords.longitude;
	  location.html("Latitude is " + latitude + ", and longitude is " + longitude);

	  $.getJSON(url + API_KEY + "/" + latitude + "," + longitude + "?callback=?", function(data) {
	  	$(".temperature").html(data.currently.temperature + "°");	  	
	  	$(".minutely").html(data.currently.summary);
	  	$(".icon").html(data.currently.icon);
	  });	  	
	}

	function error() {
		location.html("We couldn't read your position");
	}

	location.html("Locating ...");  
}

darkSkyWeatherApp();