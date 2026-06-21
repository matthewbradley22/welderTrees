//TODO: Add other relevant info? Add secondary photos for some trees
//Crop photos square to stop distortion, add tree cavity height

var welderText = document.getElementById("textInfo");
var treeInfo = document.getElementById("infoBox");

 //Define colored markers for cavity types
  var redIcon = L.icon({
    iconUrl: "images/redSymbol.png",
    iconSize: [20, 32],
  });

  var blueIcon = L.icon({
    iconUrl: "images/blueSymbol.png",
    iconSize: [20, 32],
  });

  var greenIcon = L.icon({
    iconUrl: "images/greenSymbol.png",
    iconSize: [20, 32],
  });

  var orangeIcon = L.icon({
    iconUrl: "images/orangeSymbol.png",
    iconSize: [20, 32],
  });

  //Order of lists: id, lat, long, cavity type, associated image, icon type, front knock agg score
  //main entrance height, nosema levels, num visible entrances, avg entrance area, viruses detected 2021,
  //2021 mitotype, 2022 mitotype, number visible entrances
  //add overall pic for 721 with square for colonies
var locations = [
    [
      "60",
      28.11105,
      -97.42103,
      "Tree knot",
      "60.jpg",
      redIcon,
      "242",
      "209",
      "0",
      "1",
      "170.29",
      'none',
      '29a',
      'NA'
    ],

    [
      "76.2",
      28.11099326,
      -97.42010907,
      "Tree knot with Maze",
      "76.2-2.jpg",
      orangeIcon,
      "23",
      "285.5",
      "NA",
      "1",
      "91.70",
      'DWV, BQCV, & LSV',
      'A4p',
      'NA'
    ],

    [
      "301",
      28.1114,
      -97.42122,
      "Tree knot",
      "301-2.jpg",
      redIcon,
      "12",
      "195",
      "	15,000 ± 10,672",
      "1",
      "376.84",
      'none',
      'A1',
      'A1'
    ],

    [
      "357",
      28.1126,
      -97.4153,
      "Tree knot",
      "357-2nd entrance.jpg",
      redIcon,
      "167",
      "273",
      "15,000 ± 10,672",
      "2",
      "150.9 (main), 21.4 (second)",
      'none',
      'A4p',
      'A26a'
    ],

    [
      "366/704",
      28.10177,
      -97.42433,
      "Tree knot",
      "366.jpg",
      redIcon,
      "12",
      "91",
      "0",
      "1",
      "23.89",
      'NA',
      'A26',
      'NA'
    ],

    [
      "381",
      28.11473,
      -97.4177,
      "Broken off branch",
      "381-3.jpg",
      greenIcon,
      "14",
      "206.2",
      "0",
      "1",
      "339.89",
      'none',
      'A4p',
      'NA'
    ],

    [
      "383",
      28.11538,
      -97.41903,
      "Tree knot (old), broken off branch (new)",
      "383-3.jpg",
      greenIcon,
      "71",
      "211.5",
      "0",
      "2",
      "35.5 (old), 1078.5 (new)",
      'DWV & BQCV',
      'O5',
      'NA'
    ],

    [
      "394",
      28.10633,
      -97.41887,
      "Tree knot with Maze",
      "394.JPG",
      orangeIcon,
      "684 (649)",
      "111",
      "	10,000",
      "1",
      "327.48",
      'none',
      'A4p',
      'A26a'
    ],

    [
      "404",
      28.1021,
      -97.42485,
      "Long tree crack",
      "404.jpg",
      blueIcon,
      "11",
      "105",
      "0",
      "1",
      "521.01",
      'DWV & BQCV',
      '29a',
      'NA'
    ],

    [
      "421",
      28.1137,
      -97.41495,
      "Tree knot",
      "421.jpg",
      redIcon,
      "216",
      "233",
      "NA",
      "1",
      "55.1",
      'NA',
      'NA',
      'NA'
    ],

    [
      "425",
      28.1123,
      -97.4207,
      "Tree knot",
      "425-2.jpg",
      redIcon,
      "754",
      "45",
      "0",
      "2",
      "96.8",
      'none',
      'A4p',
      'NA'
    ],

    [
      "427",
      28.10892,
      -97.41455,
      "Long tree crack with holes",
      "427.jpg",
      blueIcon,
      "14",
      "207",
      "0",
      "2",
      "452.1",
      'none',
      'A1e',
      'NA'
    ],

    [
      "435",
      28.10273,
      -97.42397,
      "Tree knot",
      "435.jpg",
      redIcon,
      "9",
      "232",
      "0",
      "1",
      "23.1",
      'none',
      'A1e',
      'NA'
    ],

    [
      "701",
      28.11414645,
      -97.41589835,
      "Tree knot with Maze",
      "701-1.jpg",
      redIcon,
      "299",
      "444",
      "NA",
      "1",
      "42.4",
      'NA',
      'NA',
      'NA'
    ],

    [
      "703",
      28.10218265,
      -97.42255324,
      "Tree knot",
      "703.jpg",
      redIcon,
      "10 (150)",
      "264.2",
      "0",
      "1",
      "31.9",
      'BQCV',
      'O5',
      'NA'
    ],

    [
      "705",
      28.10923173,
      -97.42393793,
      "Tree knot",
      "705.jpg",
      redIcon,
      "49 (50)",
      "351",
      "NA",
      "1",
      "230.5",
      'NA',
      'NA',
      'NA'
    ],

    [
      "708",
      28.11459385,
      -97.41655697,
      "Broken off branch",
      "708-2.jpg",
      greenIcon,
      "434",
      "472",
      "NA",
      "1",
      "492.6",
      'NA',
      'NA',
      'NA'
    ],

    [
      "709",
      28.11331871,
      -97.41580119,
      "Long tree crack with holes and broken off branch",
      "709-3.jpg",
      blueIcon,
      "707",
      "151",
      "NA",
      "6",
      "580.1",
      'NA',
      'NA',
      'NA'
    ],

    [
      "721",
      28.11524395,
      -97.41560055,
      "Long tree crack with holes",
      "721-2.jpg",
      redIcon,
      "162 (504)",
      "383.7",
      "0",
      "1",
      "843.36",
      'none',
      'A1e',
      'NA'
    ],

    [
      "721.2",
      28.11524395,
      -97.41560055,
      "Tree knot",
      "721.2-2.jpg",
      redIcon,
      "177 (723)",
      "",
      "",
      "",
      "",
      'none',
      '',
      ''
    ],
  ];


document.addEventListener("DOMContentLoaded", function (event) {
  var map = L.map("map", {
    center: [28.107266, -97.41972],
    zoom: 15,
    fullscreenControl: true,
  });

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    },
  ).addTo(map);

  var colors = {
    orange: "#ffa500",
    blue: "#0000ff",
    green: "#008000",
    pink: "#ffc0cb",
  };

  //Change icon colors with this github https://github.com/pointhi/leaflet-color-markers
  for (var i = 0; i < locations.length; i++) {
    marker = new L.marker([locations[i][1], locations[i][2]], {
      icon: locations[i][5],
      id: locations[i][0],
      cav_type: locations[i][3],
      photo: locations[i][4],
      front_agg: locations[i][6],
      main_height: locations[i][7],
      nosema_scores: locations[i][8],
      num_vis_ent: locations[i][9],
      ent_area: locations[i][10],
      viruses: locations[i][11],
      mitotype_2021: locations[i][12],
      mitotype_2022: locations[i][13]
    })
      .on("click", showTreeInfo)
      .addTo(map);
  }
});

//The separation between normal trees and trees with 2 cavities (721 for example)
//is done quite poorly and is not scalable whatsoever. This should be changed asap

function showTreeInfo(e) {
  var opts = e.target.options;

  //Only map normally if there is on cavity on current tree
  if ((opts.id != "721") & (opts.id != "721.2")) {
    treeInfo.innerHTML =
      "<strong> Tree ID: </strong>" +
      opts.id +
      "<br/>" +
      "<br/>" +
      "<strong> Cavity type: </strong>" +
      opts.cav_type +
      "<br/>" +
      "<br/>" +
      "<strong> Defensiveness score: </strong>" +
      opts.front_agg +
      "<br/>" +
      "<br/>" +
      "<strong> Main entrance height: </strong>" +
      opts.main_height +
      " cm <br/>" +
      "<br/>" +
      "<strong> Average Nosema spores:  </strong>" +
      opts.nosema_scores +
      "<br/>" +
      "<br/>" +
      "<strong> Number visible entrances:  </strong>" +
      opts.num_vis_ent +
      "<br/>" +
      "<br/>" +
      "<strong> Entrance area:  </strong>" +
      opts.ent_area +
      "<br/>" +
      "<br/>" +
      "<strong> Viruses detected 2021: </strong>" +
      opts.viruses +
      "<br/>" +
      "<br/>" +
      "<strong> Mitotype 2021: </strong>" +
      opts.mitotype_2021+
      "<br/>" +
      "<br/>" +
      "<strong> Mitotype 2022: </strong>" +
      opts.mitotype_2022+
      "<br/>" +
      "<br/>" +
      '<img src="images/' +
      opts.photo +
      '"' +
      ' onclick="this.requestFullscreen()" height="auto" width="100%"/> <br/>';
    ("(Click image for full screen)");

  } else {

    treeInfo.innerHTML = ''

    //Define buttons to choose between 721 and 721.2
    const button_721 = document.createElement("button");
    button_721.id = "button_721";
    button_721.className = "tree_select_butt";
    button_721.textContent = "721";
    treeInfo.appendChild(button_721);

    const button_721_2 = document.createElement("button");
    button_721_2.id = "button_721.2";
    button_721_2.className = "tree_select_butt";
    button_721_2.textContent = "721.2";
    treeInfo.appendChild(button_721_2);

    //Add appropriate html for trees
    button_721.addEventListener("click", showTreeInfoMultipleCav);
    button_721_2.addEventListener("click", showTreeInfoMultipleCav);

    var full_tree_721 = document.createElement("img");
    full_tree_721.setAttribute("height", "auto");
    full_tree_721.setAttribute("width", "100%");
    full_tree_721.setAttribute("onclick", "requestFullscreen()");
    full_tree_721.src = "./images/721_full_tree.jpg";
    treeInfo.appendChild(full_tree_721);
  }
}

function showTreeInfoMultipleCav(button){
  if(button.currentTarget.id == 'button_721'){
    treeInfo.innerHTML =
      "<strong> Tree ID: </strong>" +
      locations[18][0] +
      "<br/>" +
      "<br/>" +
      "<strong> Cavity type: </strong>" +
     locations[18][3] +
      "<br/>" +
      "<br/>" +
      "<strong> Defensiveness score: </strong>" +
      locations[18][6] +
      "<br/>" +
      "<br/>" +
      "<strong> Main entrance height: </strong>" +
      locations[18][7] +
      " cm <br/>" +
      "<br/>" +
      "<strong> Average Nosema spores:  </strong>" +
      locations[18][8] +
      "<br/>" +
      "<br/>" +
      "<strong> Number visible entrances:  </strong>" +
      locations[18][9] +
      "<br/>" +
      "<br/>" +
      "<strong> Entrance area:  </strong>" +
      locations[18][10] +
      "<br/>" +
      "<br/>" +
      "<strong> Viruses detected 2021: </strong>" +
      locations[18][11] +
      "<br/>" +
      "<br/>" +
      "<strong> Mitotype 2021: </strong>" +
      locations[18][12] +
      "<br/>" +
      "<br/>" +
      "<strong> Mitotype 2022: </strong>" +
      locations[18][13]+
      "<br/>" +
      "<br/>" +
      '<img src="images/' +
      locations[18][4] +
      '"' +
      ' onclick="this.requestFullscreen()" height="auto" width="100%"/> <br/>';
    ("(Click image for full screen)");

    const button_721_2 = document.createElement("button");
    button_721_2.id = "button_721.2";
    button_721_2.className = "tree_select_butt";
    button_721_2.textContent = "721.2";
    treeInfo.appendChild(button_721_2);
    button_721_2.addEventListener("click", showTreeInfoMultipleCav);

  } else if(button.currentTarget.id == 'button_721.2'){
    treeInfo.innerHTML =
      "<strong> Tree ID: </strong>" +
      locations[19][0] +
      "<br/>" +
      "<br/>" +
      "<strong> Cavity type: </strong>" +
     locations[19][3] +
      "<br/>" +
      "<br/>" +
      "<strong> Defensiveness score: </strong>" +
      locations[19][6] +
      "<br/>" +
      "<br/>" +
      "<strong> Main entrance height: </strong>" +
      locations[19][7] +
      " cm <br/>" +
      "<br/>" +
      "<strong> Average Nosema spores:  </strong>" +
      locations[19][8] +
      "<br/>" +
      "<br/>" +
      "<strong> Number visible entrances:  </strong>" +
      locations[19][9] +
      "<br/>" +
      "<br/>" +
      "<strong> Entrance area:  </strong>" +
      locations[19][10] +
      "<br/>" +
      "<br/>" +
      "<strong> Viruses detected 2021: </strong>" +
      locations[19][11] +
      "<br/>" +
      "<br/>" +
      "<strong> Mitotype 2021: </strong>" +
      locations[19][12] +
      "<br/>" +
      "<br/>" +
      "<strong> Mitotype 2022: </strong>" +
      locations[19][13]+
      "<br/>" +
      "<br/>" +
      '<img src="images/' +
      locations[19][4] +
      '"' +
      ' onclick="this.requestFullscreen()" height="auto" width="100%"/> <br/>';
    ("(Click image for full screen)");

    const button_721 = document.createElement("button");
    button_721.id = "button_721";
    button_721.className = "tree_select_butt";
    button_721.textContent = "721";
    treeInfo.appendChild(button_721);
    button_721.addEventListener("click", showTreeInfoMultipleCav);
  }
    

}