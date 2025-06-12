document.addEventListener("DOMContentLoaded", function(event) { 
 var map = L.map('map').setView([28.112930, -97.416987], 13);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

var imageUrl = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1280px-Golden_State_Warriors_logo.svg.png';

var popupContent = 'Click the image for more info:<br>' +
                    '<a href="' + imageUrl + 
                    '" target="_blank"><img style="max-height: 200px; max-width: 200px;" src="' +
                     imageUrl + '"></a>';

var marker = L.marker([28.13, -97.35]).bindPopup(popupContent).addTo(map);


var latPopup = L.popup();

function onMapClick(e) {
    latPopup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

});

