mapboxgl.accessToken = 'pk.eyJ1IjoiaHV5Z2luIiwiYSI6ImNrNnMybXN4bTAyNHgzbXFqYTluejdlMW8ifQ._Dh4dq1a9dgYnZjX-rjv7g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
	center: [106.628560,10.777709], // starting position
    zoom: 18 // starting zoom
});
		
// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    '148, Thạch Lam, Tân Phú, TP Hồ Chí Minh'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
    .setLngLat([106.628560,10.777709])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');



