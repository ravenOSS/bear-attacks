import processFile from './processFile'

const output = document.getElementById('output')

if (window.FileList && window.File) {
	document.getElementById('csv_data').addEventListener('change', (event) => {
		output.innerHTML = ''
		const fileList = event.target.files
		const p = document.createElement('p')
		p.textContent = `FileName: ${fileList[0].name}`
		output.appendChild(p)
		const dataFile = fileList[0]

		const reader = new FileReader()

		reader.readAsText(dataFile)

		reader.onload = (event) => {
			const fileData = reader.result

			processFile(fileData)

			console.log(`Type: ${typeof fileData}`)
		}
	})
}
