import parse from 'csv-parse/lib/sync'

// import { bearDataChart, bearStatusChart } from './chart.js'

// create array of records from csv data captured from file input
const processFile = (dataFile) => {
	const attackRecords = parse(dataFile, {
		columns: true,
	})

	let wild = 0
	let captive = 0
	let brownCount = 0
	let blackCount = 0
	let polarCount = 0

	attackRecords.forEach((attack) => {
		attack.Type == 'Wild' ? wild++ : captive++
		attack.Grizzly == 1 ? brownCount++ : blackCount++

		console.log(
			`Date: ${attack.Date}, Name: ${attack.Name}, Age: ${attack[' age']}, 
      Status: ${attack.Type}, Species: ${
				attack.Grizzly == 1 ? 'Brown' : 'Black'
			}, Lat: ${attack.lat} Lng: ${attack.lng}`
		)
		console.log(`============================================================`)
	})
	let bearTypeData = [brownCount, blackCount]
	// console.log(bearTypeData)

	// if (bearDataChart.type) {
	// 	console.log(`Chart type is here!`)
	// }

	function addData(chart, bearTypeData) {
		bearTypeData.forEach((dataPoint) => {
			chart.data.datasets.data.push(dataPoint)
			console.log(`From Update ${dataPoint}`)
		})
		// bearDataChart.update()
		chart.update()
	}
	// addData(bearDataChart, bearTypeData)

	console.log(`Wild Bears ${wild}, Captive Bears: ${captive}`)
	console.log(`Grizzly: ${brownCount}, Black: ${blackCount}`)
}

export default processFile
// export attackRecords
