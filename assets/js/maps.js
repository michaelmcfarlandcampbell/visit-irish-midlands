let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.404952, lng: -7.5180231491501655 },
    zoom: 8,
  });


/* Credit: Below code helped by tutorial: https://developers.google.com/maps/documentation/javascript/examples/marker-remove */   
    
// Forests and Woodlands Markers array:
    let forestMarkers = [

    {place: {lat: 53.144080720495175, lng: -7.188036507694861},
    content: "<h5>Carrick Wood</h5>" +
    "<p>Well worth exploring, there is a folly, known locally as the Spire...</p>" +
    "<a href=places-to-see.html#carrick-wood-card><p>Find Out More</p></a>"},

    {place: {lat: 53.313594859252476, lng: -7.513404394218419},
    content: "<h5>Durrow Abbey</h5>" +
    "<p>Part of an old woodland estate. Species remaining on site are Scots pine and Norway spruce and some birch and rowan...</p>" +
    "<a href=places-to-see.html#durrow-abbey-card><p>Find Out More</p></a>"},

    {place: {lat: 53.147217518101506, lng: -7.262535800357617},
    content: "<h5>Garryhinch</h5>" +
    "<p>Located in a typical woodland setting, this site is part of the old Warburton Estate....</p>" +
    "<a href=places-to-see.html#garryhinch-card><p>Find Out More</p></a>"},
    ];

// Visitor Centres Markers array:
    let visitorMarkers = [

    {place: {lat: 53.2778840980638, lng: -7.492913029187589},
    content: "<h5>Tullamore D.E.W.</h5>" +
    "<p>Visit the home of Tullamore D.E.W. and join the the immersive sensory journey which brings the stories of Irish Whiskey...</p>" +
    "<a href=places-to-see.html#tullamore-d-e-w-card><p>Find Out More</p></a>"},

    {place: {lat: 53.61265967584482, lng: -7.845306515679966},
    content: "<h5>Corlea Trackway</h5>" +
    "<p>Hidden away in the boglands of Longford, not far from Kenagh village, is an inspiring relic of prehistory a <em>togher</em> – an Iron Age road ...</p>" +
    "<a href=places-to-see.html#corlea-trackway-card><p>Find Out More</p></a>"},

    {place: {lat: 53.423250226124956, lat: -7.942808973359677},
    content: "<h5>Athlone Castle</h5>" +
    "<p>Trace the footprints of the generations who shaped this place. From early settlements and warring chieftains to....</p>" +
    "<a href=places-to-see.html#athlone-castle-card><p>Find Out More</p></a>"},
    ];

    // Historical Sites Markers array:
    let historicalMarkers = [

    {place: {lat: 53.32729968317673, lng: -7.986281259431482},
    content: "<h5>Clonmacnoise</h5>" +
    "<p>St Ciarán founded his monastery on the banks of the River Shannon in the 6th Century. The monastery flourished and became a great seat of learning, a University of its time...</p>" +
    "<a href=places-to-see.html#clonmacnoise-card><p>Find Out More</p></a>"},

    {place: {lat: 53.1076285786053, lng: -7.196807838707986},
    content: "<h5>Emo Court & Gardens</h5>" +
    "<p>Once the seat of the Earls of Portarlington who built it, Emo Court later became the Noviciate of the Irish Province of the Society Jesus...</p>" +
    "<a href=places-to-see.html#emo-court-card><p>Find Out More</p></a>"},

    {place: {lat: 53.423250226124956, lat: -7.942808973359677},
    content: "<h5>Rock of Dunamase</h5>" +
    "<p>The Rock of Dunamase is an imposing and magnificent example of the remains of a Celtic fortification. Through the centuries, warriors have fought to control...</p>" +
    "<a href=places-to-see.html#dunamase-card><p>Find Out More</p></a>"},
    ];

    // Map Markers array:
    let mapMarkers = [];

    // Applying Map Marker function:
    function addMarker(props) {
        let marker = new google.maps.Marker({
        position: props.place,
        // Drops Map Markers onto position with animation:
        animation: google.maps.Animation.DROP,
        map: map,
        });
        // Pushes Markers into mapMarkers array:
        mapMarkers.push(marker);

        // Info Window for Markers:
        let infoWindow = new google.maps.InfoWindow({
            maxWidth: 300,
        });

        // Opens Info Window on click:
        marker.addListener("click", () => {
        infoWindow.open(map, marker);
        infoWindow.setContent(props.content);
        });
    }

        // Shows Markers on the map:
        function showMarkers(marker) {
        for (let i=0; i < marker.length; i++) {
            addMarker(marker[i]);
        }
    }
    
        // Removes Markers:
        function clearMarkers() {
        for (let i=0; i < mapMarkers.length; i++) {
            mapMarkers[i].setMap(null);
        }
        // Puts the removed Markers back into the array: 
            mapMarkers = [];
        }
        // Credit: jQuery help for buttons taken from: https://stackoverflow.com/questions/4323848/how-to-handle-button-click-events-in-jquery
    // Button on click shows three markers for attractions and removes previously clicked markers:
    $(".forests-btn").click(function() {
        clearMarkers(); showMarkers(forestMarkers);
    });
    
    // Button on click shows three markers for museums and removes previously clicked markers:
    $(".visitor-centres-btn").click(function() {
        clearMarkers(); showMarkers(visitorMarkers);
    });
    
    // Button on click shows three markers for sites and removes previously clicked markers:
    $(".sites-btn").click(function() {
        clearMarkers(); showMarkers(historicalMarkers);
    });
}