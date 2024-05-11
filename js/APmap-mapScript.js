let map = L.map('APmap').setView([51.23020355294857, 4.416120851376624], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon = L.polygon([
    [51.2306036790705, 4.41553411041197],
    [51.23043003985997, 4.416743761304851],
    [51.229911634840704, 4.416743761304851],
    [51.229911634840704, 4.41553411041197]],
    {color: "#FC3D21"}
).addTo(map)

var APicon = L.icon({
    iconUrl: 'assets/ap-logo.png',

    iconSize:     [75], // size of the icon
    iconAnchor:   [55,5], // point of the icon which will correspond to marker's location
});

L.marker([51.230186318323874, 4.416138217791462], {icon: APicon}).addTo(map);