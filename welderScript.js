//TODO: Color marker by entrance type, add latitude and longitude on clicks

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

//var treeIcon = L.icon({
  //  iconUrl: 'treeSymbol.png',
  //  iconSize:     [30, 30], // size of the icon
  //  iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
   // popupAnchor:  [10, 0] // point from which the popup should open relative to the iconAnchor
//});

var locations = [
  ["60", 28.11105, -97.42103, 'Tree knot'],
  ["76.2", 28.11099326, -97.42010907, 'Tree knot with Maze'],
  ["301", 28.1114, -97.42122, 'Tree knot'],
  ["357", 28.1126, -97.4153, 'Tree knot'],
  ["366", 28.10177, -97.42433, 'Tree knot'],
  ["381", 28.11473, -97.4177, 'Broken off branch'],
  ["383", 28.11538, -97.41903, 'Broken off branch'],
  ["394", 28.10633, -97.41887, 'Tree knot with Maze'],
  ["404", 28.1021, -97.42485, 'Long tree crack'],
  ["421", 28.1137, -97.41495, 'Tree knot'],
  ["425", 28.1123, -97.4207, 'Tree knot'],
  ["427", 28.10892, -97.41455, 'Long tree crack'],
  ["435", 28.10273, -97.42397, 'Tree knot'],
  ["701", 28.11414645, -97.41589835, 'Tree knot with Maze'],
  ["703", 28.10218265, -97.42255324, 'Tree knot'],
  ["705", 28.10923173, -97.42393793, 'Tree knot'],
  ["708",28.11459385, -97.41655697, 'Broken off branch'],
  ["709", 28.11331871, -97.41580119, 'Tree knot'],
  ["721", 28.11524395, -97.41560055,' Tree knot']

];

var popupContent = ['60', '76.2', '301', '357', '366', '381', 
    '383','394', '404', '421', '425', '427', '435', '701', '703', '705', '708',
    '709', '721'];

var colors = {
    orange: '#ffa500',
    blue: '#0000ff',
    green: '#008000',
    pink: '#ffc0cb',
};

//Change icon colors with this github https://github.com/pointhi/leaflet-color-markers
for (var i = 0; i < locations.length; i++) {
    marker = new L.marker([locations[i][1], locations[i][2]])
    .bindPopup(popupContent[i] + 
        ': <img src="TreeFillIn.jpg" height="150px" width="150px"/>')
    .addTo(map);

}

for(var i = 0; i < locations.length; i++){
    const summary = document.createElement("summary");
    const summaryText = document.createTextNode(popupContent[i]);
    summary.appendChild(summaryText);
    const detail = document.createElement("details");
    const detailText = document.createTextNode("Entrance type: " + locations[i][3]);
    detail.appendChild(detailText);
    detail.appendChild(summary)
    const listItem = document.createElement("li");
    listItem.appendChild(detail)
    treeList.appendChild(listItem)
}
})