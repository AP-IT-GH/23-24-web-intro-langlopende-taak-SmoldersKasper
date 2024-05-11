(() => {
    'use strict'
  
    // Graphs
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '1 Mei 2024',
          '2 Mei 2024',
          '3 Mei 2024',
          '4 Mei 2024',
          '5 Mei 2024',
          '6 Mei 2024',
          '7 Mei 2024'
        ],
        datasets: [{
          data: [
            18.4,
            13.9,
            11.5,
            10.8,
            12.9,
            13.9,
            14.1
          ],
          lineTension: 0.2,
          backgroundColor: 'transparent',
          borderColor: '#FC3D21',
          borderWidth: 4,
          pointBackgroundColor: '#FC3D21'
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            boxPadding: 3
          }
        }
      }
    })
  })()
