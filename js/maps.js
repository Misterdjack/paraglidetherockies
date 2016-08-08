/////////////////////
// Google Maps API //
/////////////////////

var lz;
var bellyache;
var wolcott;
var map;
var marker;


function initialize() {
    lz = new google.maps.LatLng(39.667552, -106.645043);

    bellyache = new google.maps.LatLng(39.659984, -106.657728);

    gore = new google.maps.LatLng(39.640446, -106.207475);

    // wolcott = new google.maps.LatLng(39.700322, -106.633504);

    var mapOptions = {
        zoom: 9,
        center: gore,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        scrollwheel: false,
        draggable: true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var contentString = '<p>Landing Zone for Bellyache Morning Flying site and Meeting Location</p>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var contentString2 = '<p>Launch site and best place for friends and family to watch</p>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
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

    google.maps.event.addListener(marker2, 'click', function () {
        infowindow2.open(map, marker2);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
