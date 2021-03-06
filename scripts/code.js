//create the listeners for opening and closing the modal
var closeListener = document.getElementById('close');
var openModal = document.getElementById('openForm');
var submitForm = document.getElementById('submit-form');
//whenever the modal window opens, the form input values are reset
function modalOpen() {
  $('#openForm').hide();
  $('#close').show();
  $('#modal').removeClass('modal-hide');
  $('#modal').addClass('modal-show');
  $('input[name=address]').val('');
  $('input[name=description]').val('');
  $('input[name=artist]').val('anonymous');
  $('input[name=photographer]').val('anonymous');
  $('.form-input[name=type]').val('Select One');

}
openModal.addEventListener('click', modalOpen);

function hideModal(){
  $('#openForm').show();
  $('#close').hide();
  $('#modal').addClass('modal-hide');
  $('#modal').removeClass('modal-show');
}
closeListener.addEventListener('click', hideModal);

var descriptionClear = document.getElementById('description-one');
descriptionClear.addEventListener('blur', function( event ) {
  validDescription();
}, true);

//functions that will validate each form inside of the form
var valid = 0;
var removeSpecialCharacters = '';
function validAddress() {
  var addressEntered = $('input[name=address]').val();
  if (addressEntered == '') {
    $('#address').html('Please enter valid address (no special characters)');
  }

	else {
    removeSpecialCharacters = addressEntered.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

		//the input value of address is free of any special characters
    $('input[name=address]').val(removeSpecialCharacters);
    valid++;
  }
}
function validDescription(){
  if ($('input[name=description]').val() == '') {
    $('#description').html('Please enter description');
  }
 else{
    $('#description').html('');
    valid++;
  }
}
function validArtist() {
  if($('input[name=artist]').val() == '') {
    $('#artist').html('Please enter an artist name');
  }
 	else {
    $('#artist').html('');
    valid++;
  }
}
function validPhotographer() {
  if ($('input[name=photographer]').val() == '') {
    var photog;
    $('#mural').html('Please enter a photographer name');
  }
	else{
    $('#mural').html('');
    valid++;
  }
}
function validType() {
  if ($('.form-input[name=type]').val() == 'Select One') {
    $('#select-one').html('Please select a type');
  }
 else{
    $('#select-one').html('');
    valid++;
  }
}



var iaddress = document.getElementById('iaddress');
iaddress.addEventListener('blur', function( event ) {
  codeAddress();
}, true);

function codeAddress() {
  var address = document.getElementById('iaddress').value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      $('input[name=lat]').val(results[0].geometry.location.lat());
      $('input[name=long]').val(results[0].geometry.location.lng());
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

  if(valid == 5) {
    hideModal();
    createNewObject();
    initMap();
    location.reload();
  }
  valid = 0;
}

submitForm.addEventListener('click', function() {


  // grab the user inputs and add them to the data object
  var data = {};
  $('form').serializeArray().map(function(x){data[x.name] = x.value;});
  $.post('https://seattleartmap.herokuapp.com/art', data, 'json');
  validatedForm();
});

submitForm.addEventListener('click', validatedForm);

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
