const mymap = L.map('mapid').setView([50.5, 30.5], 1 );

//Making the using opennstreet map 
const attribution = "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStrretMap</a> contributors";
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL,{attribution});
tiles.addTo(mymap);
//Making the marker to the mark the location of the ISS
// const pinIcon = L.icon({
//     iconUrl: 'iss1.svg',
//     iconSize: [50,32],
//     iconAnchor: [25, 16],
    
// });

const pinIcon = L.icon({
iconUrl: 'ISSIcon.png',
    iconSize: [50, 30],
    iconAnchor: [25, 16],
    popupAnchor: [0, -30],
    shadowUrl: 'ISSIcon_shadow.png',
    shadowSize: [60, 40],
    shadowAnchor: [30, 15]
});

var pinDrop = L.marker([0, 0], {icon: pinIcon}).addTo(mymap);
var pinDropCircle = L.circle([0,0], 2000e3, {color: "#c22", opacity: 0.3, weight:1, fillColor: "#c22", fillOpacity: 0.1}).addTo(mymap); 

// const URL = "https://api.wheretheiss.at/v1/satellites/25544"
const URL = "http://api.open-notify.org/iss-now.json?callback="
const lat = document.getElementById("lat");
const long = document.getElementById("long");


let load = true;
async function getLOC(){
    const response = await fetch(URL);
    const data = await response.json();

    // console.log(data);
    const {latitude,longitude} = data.iss_position;//data
    pinDrop.setLatLng([latitude,longitude]);
    pinDropCircle.setLatLng([latitude,longitude]);
if(load){
    mymap.setView([latitude,longitude],2);
    load = false;
}
    //console.log(data.latitude);
    //console.log(data.longitude);
    // lat_long.innerText="Latitude:"+(data.iss_position.longitude)+"\n"+"Longitude:"+data.iss_position.latitude;
    lat.innerHTML="Latitude:"+data.iss_position.longitude;
    long.innerHTML = "Longitude:"+data.iss_position.latitude;
}
setInterval(getLOC,1000);

