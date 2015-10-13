/////////////////////
// Google Maps API //
/////////////////////

var lz;
var bellyache;
var wolcott;
var map;
var marker;
var marker2;
var marker3;

function initialize() {
    lz = new google.maps.LatLng(39.667552, -106.645043);

    bellyache = new google.maps.LatLng(39.659984, -106.657728);

    loveland = new google.maps.LatLng(39.663705, -105.879221);

    // wolcott = new google.maps.LatLng(39.700322, -106.633504);

    var mapOptions = {
        zoom: 9,
        center: loveland,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        scrollwheel: false,
        draggable: true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var contentString = '<p>Landing Zone for Bellyache Morning Flying site and Meeting Location</p>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker = new google.maps.Marker({
        position: lz,
        map: map,
        title: 'Landing Zone and Meeting Location'
    });

    marker2 = new google.maps.Marker({
        position: bellyache,
        map: map,
        title: 'Bellyache launch'
    });

    // marker3 = new google.maps.Marker({
    //     position: wolcott,
    //     map: map,
    //     title: 'Wolcott launch'
    // });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);