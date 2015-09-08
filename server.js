var express = require('express')
var app = express()
var port =  process.env.PORT || 3000

var cacheTiles = require('./lib/cacheTiles')

//serve js, css and image files
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/img', express.static(__dirname + '/public/img'))

//serve main page
app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html')
})

//serve tiles
app.get('/tiles/:s/:z/:x/:y', function(req,res) {
	var s = req.params.s
	var z = req.params.z
	var x = req.params.x
	var y = req.params.y
	cacheTiles.getTileIfNotExist(s,z,x,y, function() {
		res.sendFile(__dirname + '/data/tiles/' + z + '/' + x + '/' + y + '.png')
	})
})

app.listen(port, function() {
//initialise tile folder on start
	cacheTiles.init(function() {
		console.log('"data/tiles" folder has been initialised')
		console.log('Listening on port ' + port + '...')
	})
})
