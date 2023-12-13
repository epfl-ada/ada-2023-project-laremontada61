/*
Create the interactive map with Leaflet using geojson countries coordinates and emissions
*/

// Initialize map
let map = L.map('map', {
  zoom: 2,
  minZoom: 1,
  maxZoom: 8,
  scrollWheelZoom: true,
  zoomControl: false,
  noWrap: true,
  zoomAnimation: true,
  markerZoomAnimation: true,
  maxBoundsViscosity: 0.8,
  maxBounds: [
     [89.9, 220.9],
     [-89.9, -220.9]
  ]
}).setView([45, 10]);

// Colors depending on ghg emission importance
const COLORS_GHG = [
  "#ffffff",
  "#17961c",
  "#86d60d",
  "#f2da02",
  "#f76802",
  "#ba0000",
  "#69081c"
];

// Ghg emissions characteristics
const GHG_GRADING = {
  label: "total_ghg",
  grades: [0, 500, 1000, 2000, 4000, 8000],
  unit: "x10<sup>6</sup>",
};

let current_year = 29;

let year_slider = document.getElementById("current_year_slider");

// Update the years
year_slider.addEventListener("input", function() {
  current_year = this.value;
  document.getElementById("current_year").innerHTML =
     "Year " + (1990 + parseInt(this.value));
  reset_geojson();
});

// Color a country based on ghg emissions
function ghg_color(d) {

  const thresh = GHG_GRADING.grades;

  return d < 0.0 ?
     COLORS_GHG[0] : d > thresh[5] ?
     COLORS_GHG[6] : d > thresh[4] ?
     COLORS_GHG[5] : d > thresh[3] ?
     COLORS_GHG[4] : d > thresh[2] ?
     COLORS_GHG[3] : d > thresh[1] ?
     COLORS_GHG[2] : d > thresh[0] ?
     COLORS_GHG[1] : COLORS_GHG[0];
}

const style = (feature) => {
  let property = feature.properties[GHG_GRADING.label];
  let val = property ? property[current_year] : 0;

  return {
     fillColor: ghg_color(val),
     weight: 1,
     opacity: 1,
     color: "black",
     dashArray: "1",
     fillOpacity: 0.6,
  };
};

// Include barplots with country name and current year
function country_infos(feature) {

  let property = feature.properties[GHG_GRADING.label];
  let val = property ? property[current_year] : 0;
  if (!isNaN(val)) {
     if (val > 0.0) {
        $("#modal").modal("show");

        const {
           properties
        } = feature;

        $("#modal-title").html(
           properties.name + " - " + (1990 + parseInt(current_year))
        );
        sectors_barplot(properties.sectors, current_year);

        $("#modal2-title").html(
           properties.name + " - " + (1990 + parseInt(current_year))
        );
        gases_barplot(properties.gases, current_year)
     }
  }

}

let geojson, info, legend;

// Change country border when hover
function hover_country(e) {
  let layer = e.target;

  layer.setStyle({
     weight: 2
  });

  info.update(layer.feature.properties);
}

// Reset country border
function unhover_country(e) {
  geojson.resetStyle(e.target);
  info.update();
}

// Display country barplots when click
function click_country(e) {
  country_infos(e.target.feature);
}

// Groups all event listeners
function onEachFeature(feature, layer) {
  layer.on({
     mouseover: hover_country,
     mouseout: unhover_country,
     click: click_country,
  });
}

// To update the map
function reset_geojson() {
  if (geojson) map.removeLayer(geojson);

  geojson = L.geoJson(data_countries, {
     style,
     onEachFeature
  }).addTo(map);

  if (info) info.update();
  if (legend) legend.addTo(map);
}

// Load and display tile layers on the map given template url
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
}).addTo(map);

reset_geojson();

// Infos with hovered country name and global ghg value
info = L.control();

info.onAdd = function(map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function(props) {
  let value = props && props[GHG_GRADING.label] ?
     Math.round(props[GHG_GRADING.label][current_year]) : 0;

  if (!isNaN(value)) {
     if (value >= 0.0) {
        this._div.innerHTML =
           ` ${props ? `<b>${props.name}</b><br/>${value} ${GHG_GRADING.unit}` : "Wander through the map"} `
     } else this._div.innerHTML = `<b>${props.name}</b>` + "<br>No information available"
  } else {
     this._div.innerHTML = `<b>${props.name}</b>` + "<br>No information available"
  }
};

info.addTo(map);

// Colors and corresponding ghg values legend
legend = L.control({
  position: "bottomright"
});

legend.onAdd = function(map) {
  let div = L.DomUtil.create("div", "info legend");
  let grades = GHG_GRADING.grades;
  for (let i = 0; i < grades.length; i++) {
     div.innerHTML += `
     <div>
       <i style="background: ${ghg_color(grades[i] + 1)}"></i>
       ${grades[i]}${grades[i + 1] ? " &ndash; " + grades[i + 1] + "<br/>" : "+"}
     </div>
   `;
  }
  return div;
};

legend.addTo(map);