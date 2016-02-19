var express = require('express')
var app = express()
var config = require('./config')
console.log(config)
var DB = config.DB
var PORT = config.PORT
var models = require('./models')

app.get('/art', function(req, res) {
  models.Art.findAll().then(function(art) {
    res.json(art)
  })
})

app.post('/art', function(req, res) {
  models.Art.create({
	name: req.body.name,
	lat: req.body.lat,
	long: req.body.long,
	description: req.body.description,
	artist: req.body.artist,
	photographer: req.body.photographer,
	type: req.body.type,
	image: req.body.image
  })
})

models.sequelize.sync({force: true}).then(function(x) {
  models.Art.create({
	address: '1721 Martin Luther King Jr Way S, Seattle, WA',
    lat: 47.587682,
	long: -122.298429,
	description: 'shitbarf tag on bus stop',
	artist: 'shitbarf',
	photographer: 'Anon',
	type: 'tag',
	image: 'http://i.stack.imgur.com/ijSS5.png'
  })
  app.listen(PORT, function() {
  console.log('server started')
  console.log('listening on PORT: ' + PORT)
  console.log('DB URI STRING: ' + DB)
  })
})
