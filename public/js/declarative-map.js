function initMap () {

    // imperative:
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: -34.397, lng: 150.644},
    })

    const marker = new google.maps.Marker({
        position: {lat: -34.397, lng: 150.644},
        title: 'Hello Dude!',
    })

    marker.setMap(map)

    // declarative:
    // https://www.npmjs.com/package/react-gmaps

}
