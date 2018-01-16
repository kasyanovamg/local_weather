function geolocator()  {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {

  	var lat = "lat=" + position.coords.latitude;
  	var lon = "lon=" + position.coords.longitude;

	var api = "https://fcc-weather-api.glitch.me/api/current?";
	var urlString = api + lat + "&" + lon;


$.getJSON(urlString, function(json) {
	console.log(json);
   		$("#city").html(json.name  + ", " + json.sys.country);
   		$("#status").html(json.weather["0"].description);
   		$("#temperature").html(json.main.temp);
   		var icon = "<img src=" + json.weather["0"].icon + ">"; 
   		$("#icon").html(icon);

   		$("#c-f").on("click", function() {
   			$(this).text($(this).text() == 'F' ? 'C' : 'F');
  			});
	});



  });
	} else {
		$("body").html("Geolocation is turned off in your browesr");
	}
}
	


geolocator();