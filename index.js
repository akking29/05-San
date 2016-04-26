//attach json info
$.getJSON('topspots.json', function(result){
//iterate through each item
		$.each(result,function (i, locations){
		//create link to google map
		var lC = '<a HREF = http://maps.google.com/maps?q=' 
		+ locations.location + '> Location </a>';
		//create table and append each item to the table
		$('#sDATA').append('<tr> <td>' + locations.name + '</td> <td>' 
		+ locations.description + '</td> <td>' + lC + '</td> </tr>');

	});
});

//get google maps api and create map
function initMap() {
  
  var myLatLng = {lat: 32.70648, lng: -117.16614};
//create map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom:12,
    center: myLatLng
 
 });
//populate markers on map using loop
$.getJSON('topspots.json', function(result){

	for (var i = 0, length = result.length; i < length; i++) {
			var name = result[i].name;
			var lat = result[i].location[0];
			var lng = result[i].location[1];
			var spot = {lat: lat, lng: lng};

			//creation of marker on map
			var marker = new google.maps.Marker({
				position: spot,
				map: map,
				title: name
			
			});
		}
	});
}