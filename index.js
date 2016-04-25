$.getJSON('topspots.json', function(result){

		$.each(result,function (i, locations){
		
		var lC = '<a HREF = http://maps.google.com/maps?q=' + locations.location + '> Location </a>';
		
		$('#sDATA').append('<tr> <td>' + locations.name + '</td> <td>' 
		+ locations.description + '</td> <td>' + lC + '</td> </tr>');
	});
});
	function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.7178, lng: -117.1579},
    scrollwheel: false,
    zoom: 11
  });
}
