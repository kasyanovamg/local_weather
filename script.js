  // Only change code below this line.
  var lat, lon;
function geolocator()  {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
  	lat = "lat=" + position.coords.latitude;
  	lon = "lon=" + position.coords.longitude;
    // $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);



var api = "https://fcc-weather-api.glitch.me/api/current?";
var urlString = api + lat + "&" + lon;


$.getJSON(urlString, function(json) {
	console.log(json);
   		$("#city").html(json.name  + ", " + json.sys.country);
   		$("#clouds").html(json.clouds.all);
   		$("#temperature").html(json.main.temp);
	});



  });
}
	
}

geolocator();