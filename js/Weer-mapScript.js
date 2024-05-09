
let map = L.map('Weermap').setView([51.23017061854421, 4.416160918898138], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.addLayer(new L.TileLayer("https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=6ddd690925f3528383e8464ae5ab3b7e"));

map.addLayer(new L.TileLayer("https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=6ddd690925f3528383e8464ae5ab3b7e"));