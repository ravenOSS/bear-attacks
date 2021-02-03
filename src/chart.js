import Chart from 'chart.js'

var ctx = document.getElementById('bearPopulation').getContext('2d')

var bearData = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: ['Grizzly', 'Black'],
		datasets: [
			{
				label: 'Bear Types',
				data: [27, 139],
				backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
				borderColor: ['rgba(255, 0, 0, 0)'],
				borderWidth: 2,
			},
		],
	},
	// options: {
	// 	scales: {
	// 		yAxes: [
	// 			{
	// 				ticks: {
	// 					beginAtZero: true,
	// 				},
	// 			},
	// 		],
	// 	},
	// },
})
