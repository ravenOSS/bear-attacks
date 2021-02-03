// import parse from 'csv-parse/lib/sync'
// import fs from 'fs'

// const bearGeo_csv = fs.readFileSync('../data/Bear_Geo.csv')

// const bear_json = parse(bearGeo_csv, {
// 	columns: true,
// 	skip_empty_lines: true,
// })
function initMap() {
	const mapCenter = { lat: 45.0, lng: -98.5795 }

	const mapOptions = {
		zoom: 4,
		center: mapCenter,
	}

	const map = new google.maps.Map(document.getElementById('map'), mapOptions)

	const attackMarker = new google.maps.Marker({
		position: { lat: 40.163428, lng: -105.03054 },
		// position: { lat: attack.lat, lng: attack.lng },
		// position: { lat: attack[1], lng: attack[2] },
		map,
		title: 'attack.Date',
	})
}

// export { createMap }
