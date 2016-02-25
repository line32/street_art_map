var closeListener = document.getElementById('close');
var openModal = document.getElementById('open');
function modalOpen(){
	$('#open').hide();
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
  $('#open').show();
  $('#close').hide();
  $('#modal').addClass('modal-hide');
  $('#modal').removeClass('modal-show');
}
closeListener.addEventListener('click', hideModal);

var valid = 0;
var removeSpecialCharacters = '';
function validAddress() {
  var addressEntered = $('input[name=address]').val();
  if (addressEntered == '') {
    console.log('address');
    $('#address').html('Please enter valid address (no special characters)');
  }
	else{
		$('#address').html('')
		console.log('good address');
		removeSpecialCharacters = addressEntered.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
		$('input[name=address]').val(removeSpecialCharacters);
		valid++;
	}
 }
 function validDescription(){
  if ($('input[name=description]').val() == "") {
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
 var submitForm = document.getElementById('submit-form');
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
var submitForm = document.getElementById('submit-form');
function validatedForm() {
  validAddress();
  validDescription();
  validArtist();
  validPhotographer();
  validType();

  console.log(valid);
  if(valid == 5) {
    hideModal();
    $('input[name=address]').val('');
    $('input[name=description]').val('');
    $('input[name=artist]').val('anonymous');
    $('input[name=photographer]').val('anonymous');
    $('.form-input[name=type]').val('Select One');

  }
  valid = 0;
}
//submitForm.addEventListener('click', validatedForm); //change this, if it validates, geocode and send to S3
submitForm.addEventListener('click', function() {

  // grab the user inputs and add them to the data object
  var data = {};
  $('form').serializeArray().map(function(x){data[x.name] = x.value;});
  console.log(data);


  $.post('/art', data, 'json');


  validatedForm();
  console.log('the form is validated by fred function');





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
$.post('/art', {address: '1721 Martin Luther King Jr Way S, Seattle, WA',lat: 47.587682,long: 122.298429,description: 'shitbarf tag on bus stop2',artist: 'shitbarf the ultimate',photographer: 'Anon2',type: 'tag',image: 'http://i.stack.imgur.com/ijSS5.png'}, function(data) {
  console.log('data from post');
  console.log(data);
}, 'json');
//
//
//
// $.getJSON('/art', function( data ) {
// 	console.log(data);
// });
