//TODO: Add other relevant info? Add secondary photos for some trees
//Click images for full screen

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

//Define colored markers for cavity types
var redIcon = L.icon({
    iconUrl: 'images/redSymbol.png',
    iconSize:     [20, 40]
})

var blueIcon = L.icon({
    iconUrl: 'images/blueSymbol.png',
    iconSize:     [20, 40]
})

var greenIcon = L.icon({
    iconUrl: 'images/greenSymbol.png',
    iconSize:     [20, 40]
})

var orangeIcon = L.icon({
    iconUrl: 'images/orangeSymbol.png',
    iconSize:     [20, 40]
})

//Maybe compress images to load faster
var locations = [
  ["60", 28.11105, -97.42103, 'Tree knot', '60.jpg', redIcon],
  ["76.2", 28.11099326, -97.42010907, 'Tree knot with Maze', '76.2-2.jpg', orangeIcon],
  ["301", 28.1114, -97.42122, 'Tree knot', '301-2.jpg', redIcon],
  ["357", 28.1126, -97.4153, 'Tree knot', '357-2nd entrance.jpg', redIcon],
  ["366", 28.10177, -97.42433, 'Tree knot', '366.jpg', redIcon],
  ["381", 28.11473, -97.4177, 'Broken off branch', '381-3.jpg', greenIcon],
  ["383", 28.11538, -97.41903, 'Broken off branch', '383-3.jpg', greenIcon],
  ["394", 28.10633, -97.41887, 'Tree knot with Maze', '394.JPG', orangeIcon],
  ["404", 28.1021, -97.42485, 'Long tree crack', '404.jpg', blueIcon],
  ["421", 28.1137, -97.41495, 'Tree knot', '421.jpg', redIcon],
  ["425", 28.1123, -97.4207, 'Tree knot', '425-2.jpg', redIcon],
  ["427", 28.10892, -97.41455, 'Long tree crack', '427.jpg', blueIcon],
  ["435", 28.10273, -97.42397, 'Tree knot', '435.jpg', redIcon],
  ["701", 28.11414645, -97.41589835, 'Tree knot with Maze', '701-1.jpg', redIcon],
  ["703", 28.10218265, -97.42255324, 'Tree knot', '703.jpg', redIcon],
  ["705", 28.10923173, -97.42393793, 'Tree knot', '705.jpg', redIcon],
  ["708",28.11459385, -97.41655697, 'Broken off branch', '708-2.jpg', greenIcon],
  ["709", 28.11331871, -97.41580119, 'Tree knot', '709-3.jpg', redIcon],
  ["721", 28.11524395, -97.41560055,' Tree knot', '721-2.jpg', redIcon]

];

var colors = {
    orange: '#ffa500',
    blue: '#0000ff',
    green: '#008000',
    pink: '#ffc0cb',
};

//Change icon colors with this github https://github.com/pointhi/leaflet-color-markers
for (var i = 0; i < locations.length; i++) {
    marker = new L.marker([locations[i][1], locations[i][2]], {icon: locations[i][5]})
    .bindPopup('<strong>' + locations[i][0] + '</strong> <br>' +
        '<img src="images/' + locations[i][4] + '"' +' onclick="this.requestFullscreen()" height="150px" width="150px"/>' +
        '<br> lat/long: ' + locations[i][1] + ' ' + locations[i][2])
    .addTo(map);

}

for(var i = 0; i < locations.length; i++){
    const summary = document.createElement("summary");
    const summaryText = document.createTextNode(locations[i][0]);
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