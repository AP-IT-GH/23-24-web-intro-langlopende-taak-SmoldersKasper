
let map = L.map('VRTmap').setView([50.852987269693905, 4.402675884632736], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon = L.polygon([
    [50.85309336068119, 4.40196685511105],
    [50.85329054978506, 4.40285314627124],
    [50.852765531950965, 4.403157686846106],
    [50.8525806651096, 4.402263586953229]
]).addTo(map).bindPopup('Het gebouw van de VRT');

L.polygon(bounds, {color: "#e60005", weight: 1}).addTo(map);