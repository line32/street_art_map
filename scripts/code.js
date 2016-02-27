//create the listeners for opening and closing the modal
var closeListener = document.getElementById('close');
var openModal = document.getElementById('openForm');
var submitForm = document.getElementById('submit-form');
//whenever the modal window opens, the form input values are reset
function modalOpen(){

	$('#openForm').hide();
	$('#close').show();
	$('#modal').removeClass('modal-hide');
	$('#modal').addClass('modal-show');
	$('input[name=address]').val('');
	$('input[name=description]').val('');
	$('input[name=artist]').val('anonymous');
	$('input[name=photographer]').val('anonymous');
	$('.form-input[name=type]').val("Select One");

}
openModal.addEventListener('click', modalOpen);

function hideModal(){
  $('#openForm').show();
  $('#close').hide();
  $('#modal').addClass('modal-hide');
  $('#modal').removeClass('modal-show');
}
closeListener.addEventListener('click', hideModal);

var descriptionClear = document.getElementById("description-one");
descriptionClear.addEventListener("blur", function( event ) {
	console.log('descript clear')
	validDescription();
}, true);

//functions that will validate each form inside of the form
var valid = 0;
var removeSpecialCharacters = '';
function validAddress() {
  var addressEntered = $('input[name=address]').val();
  if (addressEntered == '') {
    console.log('address');
    $('#address').html('Please enter valid address (no special characters)');
  }

	else {
		// $('#address').html('')
		console.log('good address');
		removeSpecialCharacters = addressEntered.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

		//the input value of address is free of any special characters
    $('input[name=address]').val(removeSpecialCharacters);
    valid++;
  }
}
function validDescription(){
  if ($('input[name=description]').val() == '') {
    console.log('description');
    $('#description').html('Please enter description');
  }
 else{
	 $('#description').html('');
    console.log('good description');
    valid++;
  }
}
function validArtist() {
  if($('input[name=artist]').val() == '') {
    console.log('artist');
    $('#artist').html('Please enter an artist name');
  }
 	else {
    $('#artist').html('');
    console.log('good artist');
    valid++;
  }
}
function validPhotographer() {
  if ($('input[name=photographer]').val() == '') {
    console.log('mural');
    var photog;
    $('#mural').html('Please enter a photographer name');
  }
	else{
    $('#mural').html('');
    console.log('good photographer');
    valid++;
  }
}
function validType() {
  if ($('.form-input[name=type]').val() == 'Select One') {
    console.log('select one');
    $('#select-one').html('Please select a type');
  }
 else{
    $('#select-one').html('');
    console.log('good type');
    valid++;
  }
}
//form validation is called
function validatedForm(){
  validAddress();
  validDescription();
  validArtist();
  validPhotographer();
  validType();
  console.log(valid);
  if(valid == 5){
    hideModal();
  }
  valid = 0;
}


var iaddress = document.getElementById("iaddress");
iaddress.addEventListener("blur", function( event ) {
 codeAddress();
}, true);

 function codeAddress() {
   var address = document.getElementById("iaddress").value;
   geocoder.geocode( { 'address': address}, function(results, status) {
     if (status == google.maps.GeocoderStatus.OK) {
        $('input[name=lat]').val(results[0].geometry.location.lat());
				console.log(results[0].geometry.location.lat());
        $('input[name=long]').val(results[0].geometry.location.lng());
				console.log(results[0].geometry.location.lng());
				$('#address').html('');
     } else {
			 $('#address').html( status + ' is not a valid address. Please enter a valid address');
     }
   });
 }

var submitForm = document.getElementById('submit-form');
function validatedForm() {
  validAddress();
  validDescription();
  validArtist();
  validPhotographer();
  validType();
	createNewObject();
  console.log(valid);
  if(valid == 5) {
    hideModal();

  }
  valid = 0;
}
//submitForm.addEventListener('click', validatedForm); //change this, if it validates, geocode and send to S3
submitForm.addEventListener('click', function() {


  // grab the user inputs and add them to the data object
  var data = {};
  $('form').serializeArray().map(function(x){data[x.name] = x.value;});
  console.log(data);


  $.post('https://seattleartmap.herokuapp.com/art', data, 'json');


  validatedForm();






});

// function Art(address, lat, long, description, artist, photographer, type, image) {
//   this.address = address;
//   this.lat = lat;
//   this.long = long;
//   this.description = description;
//   this.artist = artist;
//   this.photographer = photographer;
//   this.type = type;
//   this.image = image;
// }
// function createNewObject() {
//   var add = $('input[name=address]').val();
// 	//do geocoding here
//   var descrip = $('input[name=description]').val();
//   var artist = $('input[name=artist]').val();
//   var photo = $('input[name=photographer]').val();
//   var type = $('input[name=type]').val();

submitForm.addEventListener('click', validatedForm);
// function Art(address, lat, long, description, artist, photographer, type, image){
// 	this.address = address;
// 	this.lat = lat;
// 	this.long = long;
// 	this.description = description;
// 	this.artist = artist;
// 	this.photographer = photographer;
// 	this.type = type;
// 	this.image = image;
// }
function createNewObject() {
  var add = $('input[name=address]').val();
	//do geocoding here
	var lat = $('input[name=lat]').val();
	var long = $('input[name=long]').val();
  var descrip = $('input[name=description]').val();
  var artist = $('input[name=artist]').val();
  var photogapher = $('input[name=photographer]').val();
  var type = $('input[name=type]').val();
}

//
// 	//S3 here
//   var art = new Art(add, descrip, artist, photo, type);
// 	//move AJAX post here
// }
//address, description, artist, photographer, type
//add a callback to show that validation was successfull
// var art = {
// 	address: '1721 Martin Luther King Jr Way S, Seattle, WA',
//     lat: 47.587682,
// 	long: 122.298429,
// 	description: 'shitbarf tag on bus stop',
// 	artist: 'shitbarf the ultimate',
// 	photographer: 'Anon2',
// 	type: 'tag',
// 	image: 'http://i.stack.imgur.com/ijSS5.png'
// };

//
//
//
// $.post('/art', {address: '1721 Martin Luther King Jr Way S, Seattle, WA',lat: 47.587682,long: 122.298429,description: 'shitbarf tag on bus stop2',artist: 'shitbarf the ultimate',photographer: 'Anon2',type: 'tag',image: 'http://i.stack.imgur.com/ijSS5.png'}, function(data) {
//   console.log('data from post');
//   console.log(data);
// }, 'json');
//
//
//
