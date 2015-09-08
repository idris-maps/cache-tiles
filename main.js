var L = require('leaflet')
var provider = require('./lib/tileProvider')

var map = L.map('map').setView([53.55, 9.99], 11)

L.tileLayer('/tiles/{s}/{z}/{x}/{y}', {
	attribution: provider.attr
}).addTo(map)
