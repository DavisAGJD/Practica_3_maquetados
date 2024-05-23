const merCoords = { lat: 20.96709, lng: -89.62371}
const mapDiv = document.getElementById("map");
const input = document.getElementById("place_input")
let map;
let marker;
let autocomplete;


//funciones del mapa
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
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) {
            console.log("Ubicación no válida");
            return;
        }
        map.setCenter(place.geometry.location);
        map.setPosition(place.geometry.location);
        map.setZoom(15);
    })
}


//funciones de guardar datos
function guardarInformacion() {
    var fecha = document.getElementById("fecha").value;
    var nombre = document.getElementsByName("username")[0].value;
    var direccion = document.getElementsByName("direccion")[0].value;

    console.log("Fecha: " + fecha);
    console.log("Nombre: " + nombre);
    console.log("Dirección: " + direccion);

    var mensajeRegistro = document.getElementById("mensajeRegistro");
    mensajeRegistro.style.display = "block";

    setTimeout(function() {
        mensajeRegistro.style.display = "none";
    }, 3000); 
}
