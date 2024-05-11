fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.23021000898169&lon=4.416149207175785&units=metric&appid=6ddd690925f3528383e8464ae5ab3b7e') // 404 Error
    .then(function(response) {
      if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response.status);
        }
    })
    .then(json => {
    console.log(json);
    const weerdata = json

      html = `<table class="table caption-bottom text-center">
      <thead class="text-center">
          <tr>
              <th colspan="4"><h2 id="titel4">Weer op de campus Ellermanstraat</h2></th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <th colspan="4" scope="col">Temperatuur</th>
          </tr>
          <tr>
              <th scope="col">Temperatuur nu</td>
              <th scope="col">Temperatuur gevoel</td>
              <th scope="col">Min Temperatuur</td>
              <th scope="col">Max Temperatuur</td>
          </tr>
          <tr>
              <td rowspan="2">
                  <i class="bi bi-thermometer-half"></i><br>
                  ${weerdata.main.temp}°C
              </td>
              <td rowspan="2">
                  <i class="bi bi-thermometer-half"></i><br>
                  ${weerdata.main.feels_like}°C
              </td>
              <td rowspan="2">
                  <i class="bi bi-thermometer"></i><br>
                  ${weerdata.main.temp_min}°C
              </td>
              <td rowspan="2">
                  <i class="bi bi-thermometer-high"></i><br>
                  ${weerdata.main.temp_max}°C
              </td>
          </tr>
          <tr>
              
          </tr>
          <tr>
              <th colspan="2">Luchtdruk</th>
              <th colspan="2">Luchtvochtigheid</th>
          </tr>
          <tr>
              <td rowspan="2" colspan="2">
                  <i class="bi bi-arrow-bar-down"></i><br>
                  ${weerdata.main.pressure} HPa
              </td>
              <td rowspan="2" colspan="2">
                  <i class="bi bi-droplet-half"></i><br>
                  ${weerdata.main.humidity} %
              </td>
          </tr>
          <caption>Temperatuur op de campus Ellermanstraat van de AP hogeschool met data van <a href="https://openweathermap.org/" target="_blank">openweathermap</a></caption>
      </tbody>
  </table>`;
    document.getElementById("weerdata").innerHTML = html;
    });