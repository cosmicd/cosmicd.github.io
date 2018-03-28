(function(o, e, n) {
  function t(o, e) {
    var n = new google.maps.Map(document.getElementById(e), {
      zoom: 8,
      center: o,
      zoomControl: !0,
      scaleControl: !0,
      fullscreenControl: !0
    });
    new google.maps.Marker({ position: o, map: n });
  }
  (o.geocoder = new google.maps.Geocoder()),
    (o.mapAddressToLatLng = function(e, n, a) {
      o.geocoder.geocode({ address: e }, function(o, e) {
        if (e == google.maps.GeocoderStatus.OK) {
          var g = o[0].geometry.location,
            l = { lat: g.lat(), lng: g.lng() };
          a(l), t(l, n);
        } else window.alert("Request failed.");
      });
    }),
    (o.mapLatLngToAddress = function(e, n, a) {
      o.geocoder.geocode({ location: e }, function(o, n) {
        a(e), t(e);
      });
    });
})((window.gmap = window.gmap || {}), jQuery);
