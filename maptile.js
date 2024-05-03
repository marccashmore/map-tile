function getTile() {
  var x_val = document.getElementById("x_val").value;
  var y_val = document.getElementById("y_val").value;
  var zoom = document.getElementById("zoom").value;

  var tileURL = "https://tile.openstreetmap.org/" + zoom + "/" + x_val + "/" + y_val + ".png"
  document.getElementById("tileId").innerHTML = tileURL;

  src = tileURL,
  img = document.createElement('img');

  img.src = src;
  document.body.appendChild(img);
}
