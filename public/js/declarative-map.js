function initMap () {

    // // imperative:
    // const map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 4,
    //     center: myLatLng,
    // })
    //
    // const marker = new google.maps.Marker({
    //     position: myLatLng,
    //     title: 'Hello Dude!',
    // })
    //
    // marker.setMap(map)
    //
    // // declarative:

    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    })

}
