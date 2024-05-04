function getTile() {
  var lat_val = document.getElementById("lat_val").value;
  var lon_val = document.getElementById("lon_val").value;
  var zoom = document.getElementById("zoom").value;

  var x_val = lon2tile(Number(lon_val), zoom)
  var y_val = lat2tile(Number(lat_val), zoom)

  var tileURL = "https://tile.openstreetmap.org/" + zoom + "/" + x_val + "/" + y_val + ".png"
  document.getElementById("tileId").innerHTML = tileURL;

  document.getElementById("tile-img").src = tileURL;
}

function lon2tile(lon,zoom) { return (Math.floor(((lon+180)/360)*Math.pow(2,zoom))); }
function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }