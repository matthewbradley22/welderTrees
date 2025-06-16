var welderText = document.getElementById("textInfo");
var treeList = document.getElementById("TreeInfoList")

document.addEventListener("DOMContentLoaded", function(event) { 
 var map =  L.map('map', {
    center: [28.107266, -97.41972],
    zoom: 15,
     fullscreenControl: true
});


L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

var imageUrl = 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1280px-Golden_State_Warriors_logo.svg.png';

//var treeIcon = L.icon({
  //  iconUrl: 'treeSymbol.png',
  //  iconSize:     [30, 30], // size of the icon
  //  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
   // popupAnchor:  [10, 0] // point from which the popup should open relative to the iconAnchor
//});

var locations = [
  ["60", 28.11105, -97.42103],
  ["76.2", 28.11099326, -97.42010907],
  ["301", 28.1114, -97.42122],
  ["357", 28.1126, -97.4153],
  ["366", 28.10177, -97.42433],
  ["381", 28.11473, -97.4177],
  ["383", 28.11538, -97.41903],
  ["394", 28.10633, -97.41887],
  ["404", 28.1021, -97.42485],
  ["421", 28.1137, -97.41495],
  ["425", 28.1123, -97.4207],
  ["427", 28.10892, -97.41455],
  ["435", 28.10273, -97.42397],
  ["701", 28.11414645, -97.41589835],
  ["703", 28.10218265, -97.42255324],
  ["705", 28.10923173, -97.42393793],
  ["708",28.11459385, -97.41655697],
  ["709", 28.11331871, -97.41580119],
  ["721", 28.11524395, -97.41560055]

];

var popupContent = ['60', '76.2', '301', '357', '366', '381', 
    '383','394', '404', '421', '425', '427', '435', '701', '703', '705', '708',
    '709', '721'];

for (var i = 0; i < locations.length; i++) {
    marker = new L.marker([locations[i][1], locations[i][2]])
    .bindPopup(popupContent[i] + 
        ': <img src="TreeFillIn.jpg" height="150px" width="150px"/>')
    .addTo(map)
    .openPopup();
}

var latPopup = L.popup();

function onMapClick(e) {
    latPopup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

for(var i = 0; i < locations.length; i++){
    const summary = document.createElement("summary");
    const summaryText = document.createTextNode(popupContent[i]);
    summary.appendChild(summaryText);
    const detail = document.createElement("details");
    const detailText = document.createTextNode("This is tree " +popupContent[i] );
    detail.appendChild(detailText);
    detail.appendChild(summary)
    const listItem = document.createElement("li");
    listItem.appendChild(detail)
    treeList.appendChild(listItem)
}
})