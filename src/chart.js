import Chart from 'chart.js'

const ctx1 = document.getElementById('bearPopulation')

const bearDataChart = new Chart(ctx1, {
	type: 'pie',
	data: {
		labels: ['Grizzly', 'Black'],
		datasets: [
			{
				label: 'Bear Types',
				data: [27, 139],
				backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
				// borderColor: ['rgba(255, 0, 0, 0)'],
				// borderWidth: 2,
			},
		],
	},
	options: {
		layout: {},
		title: {
			display: true,
			position: 'top',
			fontSize: 24,
			text: 'Bear Species',
		},
	},
})
const ctx2 = document.getElementById('wildCaptive')

const bearStatusChart = new Chart(ctx2, {
	type: 'pie',
	data: {
		labels: ['Wild', 'Captive'],
		datasets: [
			{
				label: 'Bear Types',
				data: [138, 28],
				backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
				// borderColor: ['rgba(255, 0, 0, 0)'],
				// borderWidth: 2,
			},
		],
	},
	options: {
		layout: {},
		title: {
			display: true,
			position: 'top',
			fontSize: 24,
			text: 'Status',
		},
	},
})
export { bearDataChart, bearStatusChart }
