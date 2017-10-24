var DEFAULT_ZOOM = 15;
var GOOGLE_API_KEY = 'AIzaSyCYql-Z1TY8eY2OTP_TBKfLumnTm-BC8R0';


function initMap() {
  var position = {
    lat: 37.773972,
    lng: -122.43129
  };

  var map = new google.maps.Map($('#map')[0], {
    zoom: DEFAULT_ZOOM,
    center: position
  });
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });

  $.ajax({
    url: '/nearby_search',
    data: {
      'location': position.lat + ',' + position.lng,
      'type': 'restaurant',
      'key': GOOGLE_API_KEY,
      'radius': 500
    },
    success: function(data) {
      debugger;
    },
    failure: function(data) {
      debugger;
    }
  });
}
