function getTileConvert() {
    
    var CoordinateArray = document.getElementById("raw-cords").value
    var ModCoordinateArray = CoordinateArray.split()
    
    //document.getElementById("coordincheck").innerHTML = ModCoordinateArray[0]
    
    var retnewcoordinates

    var serviceObj={};
    serviceObj.getRegexMatches=function(string, regex, index) {
        index || (index = 1); // default to the first capturing group
            var matches = [];
            var match;
            while (match = regex.exec(string)) {
                matches.push(match[index]);
            }
            return matches; 
    }
  
    serviceObj.buildCoordinatesArray=function (inputString) {
        var newcoordinates;
        if (RegExp(/\$\$D([a-zA-Z])/).test(inputString)) {
            newcoordinates = getNewRegexMatches(inputString, /\$\$[defg](.{8})/g);
            for (var i = 0; i < newcoordinates.length; i++) {
                var hemisphere = newcoordinates[i].substr(0, 1);
                var degrees = parseInt(newcoordinates[i].substr(1, 3));
                var minutes = parseInt(newcoordinates[i].substr(4, 2));
                var seconds = parseInt(newcoordinates[i].substr(6, 2));

                var decimalValue;
                if (hemisphere == "N" || hemisphere == "E")
                    newcoordinates[i] = degrees + ((minutes + (seconds / 60)) / 60);
                else
                newcoordinates[i] = 0 - (degrees + ((minutes + (seconds / 60)) / 60));

            }
        }
    
        //Populate array with Degrees values
        else if (RegExp(/\$\$D(\d|-)/).test(inputString)) {
            newcoordinates = getNewRegexMatches(inputString, /\$\$\w([\d\.-]+)/g);
        }

        //Round the numbers to 6 decimal points
        if(newcoordinates) {
            for (var i = 0; i < newcoordinates.length; i++) {
                newcoordinates[i] = (Math.round(newcoordinates[i] * 1000000) / 1000000);
            }
        }
        return newcoordinates;

    };

    retnewcoordinates = serviceObj.buildCoordinatesArray(ModCoordinateArray[0]);
    document.getElementById("coordincheck").innerHTML = retnewcoordinates[0]

    //var centerLongitude = (newcoordinates[0] + newcoordinates[1]) / 2;
    //var centerLatitude = (newcoordinates[2] + newcoordinates[3]) / 2;

    //document.getElementById("coordincheck").innerHTML = centerLongitude
};

    //var lat_val = document.getElementById("lat_val").value;
    //var lon_val = document.getElementById("lon_val").value;
    //var zoom = document.getElementById("zoom").value;
  
    //var x_val = lon2tile(Number(lon_val), zoom)
    //var y_val = lat2tile(Number(lat_val), zoom)
  
    //var tileURL = "https://tile.openstreetmap.org/" + zoom + "/" + x_val + "/" + y_val + ".png"
    //document.getElementById("tileId").innerHTML = tileURL;
  
    //document.getElementById("tile-img").src = tileURL;
  //}
  
  //function lon2tile(lon,zoom) { return (Math.floor(((lon+180)/360)*Math.pow(2,zoom))); }
  //function lat2tile(lat,zoom)  { return (Math.floor((1-Math.log(Math.tan(lat*Math.PI/180) + 1/Math.cos(lat*Math.PI/180))/Math.PI)/2 *Math.pow(2,zoom))); }

