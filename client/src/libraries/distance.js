/** Converts numeric degrees to radians */
if (typeof Number.prototype.toRad === 'undefined') {
  Number.prototype.toRad = function () {
    return (this * Math.PI) / 180;
  };
}

exports.getDistance = function (start, end, decimals) {
  decimals = decimals || 2;
  // var earthRadius = 6371000; // km
  var earthRadius = 6371; // km
  var lat1 = parseFloat(start.lat);
  var lat2 = parseFloat(end.lat);
  var lon1 = parseFloat(start.lon);
  var lon2 = parseFloat(end.lon);

  var dLat = (lat2 - lat1).toRad();
  var dLon = (lon2 - lon1).toRad();
  lat1 = lat1.toRad();
  lat2 = lat2.toRad();

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = earthRadius * c;
  return Math.round(d * Math.pow(10, decimals)) / Math.pow(10, decimals);
};
