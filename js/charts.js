var options = {
  series: [
    {
      name: 'completed tasks',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'personal growth',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: 'goals achieved',
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  colors: ['#88b1da', '#dceaf9', '#18315e'],

  chart: {
    type: 'bar',
    height: 350,

  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end',
    },
  },
  dataLabels: {
    legend: {
      labels: {
        colors: '#ffff'
      },
    },

    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    labels: {
      style: {
        colors: '#ffff'
      }

    },
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    labels: {
      style: {
        colors: '#ffff'
      }
    },
    title: {
      text: ''
    },
  },
  legend: {
    show: true,
    labels: {
        colors: '#ffffff'
    },
 
},

foreColor: '#ffffff',
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function () {
        return '';
      },
    },
  },
}
var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()

var options = {
  series: [42, 23, 15, 12, 8],
  chart: {
    width: '100%',
    height: 400,
    type: 'pie',
  },
  labels: ['Work', 'Learning', 'Fitness', 'Relaxation', 'Personal Goals'],
  colors: ['#18315e    ', '#b6ddf3', '#2f74a5', '#09588a', '#3677a2'],
  title: {
    text: '',
    align: 'center',
  },
  legend: {
    labels: {
      colors: '#ffff'
    },
    show: true,
    position: 'bottom',
    horizontalAlign: 'center',
    offsetX: 0,
    offsetY: 0,
    itemMargin: {
      horizontal: 5,
      vertical: 5,
    }

  },
  plotOptions: {
    pie: {
      customScale: 1,
      offsetX: 0,
      offsetY: 0,
      dataLabels: {
        labels: {
          colors: '#ffff'
        },
        offsetY: 0,
        // external: {
        //   show: true,
        // },
      },
    },
  },
  responsive: [
    {
      breakpoint: 767,
      options: {
        chart: {
          width: '100%',
          height: 380,
        },
      },
    },
  ],
}

var chart = new ApexCharts(document.querySelector('#chart1'), options)
chart.render()