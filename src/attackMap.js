// import attackRecords from './processFile'
let map

function attackMap() {
	// function attackMap() {
	const mapCenter = { lat: 45.0, lng: -98.5795 }

	const mapOptions = {
		zoom: 4,
		center: mapCenter,
		mapTypeId: 'terrain',
	}

	map = new google.maps.Map(document.getElementById('map'), mapOptions)

	const attackMarker = new google.maps.Marker({
		position: { lat: 39.163428, lng: -108.03054 },
		// position: { lat: attack.lat, lng: attack.lng },
		// position: { lat: attack[1], lng: attack[2] },
		map: map,
	})
	const infowindow = new google.maps.InfoWindow({
		content: '<p>Marker Location:' + attackMarker.getPosition() + '</p>',
	})
	google.maps.event.addListener(attackMarker, 'click', () => {
		infowindow.open(map, attackMarker)
	})
}

// export default attackMap
