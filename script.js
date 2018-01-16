$(document).ready(function() {

function geolocator()  {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {

  	var lat = "lat=" + position.coords.latitude;
  	var lon = "lon=" + position.coords.longitude;

	var api = "https://fcc-weather-api.glitch.me/api/current?";
	var urlString = api + lat + "&" + lon;


$.getJSON(urlString, function(json) {
	console.log(json);
	var temperature = $("#temperature");
   		$("#city").html(json.name  + ", " + json.sys.country);
   		$("#status").html(json.weather["0"].description);
   		temperature.html(json.main.temp);
   		var icon = "<img src=" + json.weather["0"].icon + ">"; 
   		$("#icon").html(icon);
   		celToFar();
	});




  });
	} else {
		$("body").html("Geolocation is turned off in your browesr");
	}
}
	


geolocator();

function celToFar() {
	var unitTemp = $("#c-f-button");
	var temperature = $("#temperature");
	temperature.text(temperature.text() + " " + String.fromCharCode(176));
	unitTemp.text("C");

	unitTemp.on("click", function() {
		unitTemp.text($(this).text() == "F" ? "C" : "F");
		if (unitTemp.text() == 'F' ) {
			var fahrenheit = Math.round(parseInt(temperature.text()) * 9/5 + 32);
			temperature.text(fahrenheit  + " " + String.fromCharCode(176));
		} else {
			var celsius = Math.round((parseInt(temperature.text()) - 32) * 5/9);
			temperature.text(celsius  + " " + String.fromCharCode(176));
		}
  			});
}







});