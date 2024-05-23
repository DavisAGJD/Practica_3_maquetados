const merCoords = { lat: 20.96709, lng: -89.62371}
const mapDiv = document.getElementById("map");
const input = document.getElementById("place_input")
let map;
let marker;
let autocomplete;



function initMap () {
    map = new google.maps.Map(mapDiv, {
        center: merCoords, 
        zoom: 12,
    });

    marker= new google.maps.Marker({
        position: merCoords,
        map: map, 
    })
    initAutocomplete();
}

function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(input)
    autocomplete.addListener('place_changed', function (){
        const place = autocomplete.getplace();
        console.log(place)
        map.setCenter(place.geometry.location);
        map.setPosition(place.geometry.location)
    })
        
}
