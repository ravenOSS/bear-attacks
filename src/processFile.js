import parse from 'csv-parse/lib/sync'
// const parse = require('csv-parse/lib/sync')

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
			}`
		)
		console.log(`============================================================`)
	})
	console.log(`Wild Bears ${wild}, Captive Bears: ${captive}`)
	console.log(`Grizzly: ${brownCount}, Black: ${blackCount}`)
}

export default processFile
