exports.url = function(s,z,x,y,callback) {
	var path = 'http://' + s + '.tile.openstreetmap.org/' + z +'/' + x + '/' + y + '.png'
	callback(path)
}

exports.attr = 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

