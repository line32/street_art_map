var express = require('express');
var app = express();
//var config = require('./config') || null;
//console.log(config);
var DB = process.env.DB || config.DB;
var PORT = process.env.PORT || config.PORT;
var models = require('./models');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('.'));

app.all('/art', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




app.get('/art', function(req, res) {
  models.Art.findAll().then(function(art) {
    res.json(art)
  })
})

app.post('/art', function(req, res) {
  console.log('POST /art route hit')
  //console.log(req.data.body)
  console.log(req.body)
  models.Art.create({
	address: req.body.address,
	lat: req.body.lat,
	long: req.body.long,
	description: req.body.description,
	artist: req.body.artist,
	photographer: req.body.photographer,
	type: req.body.type,
	image: req.body.image
  })
  res.json({msg: 'it worked'})
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
