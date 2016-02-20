function press(){
	$('#modal').removeClass('modal-hide');
	$('#modal').addClass('modal-show');
}
function hideModal(){
	$('#modal').addClass('modal-hide');
	$('#modal').removeClass('modal-show')
}
var valid = 0;
var removeSpecialCharacters = "";
 function validAddress(){
	 var addressEntered = $('input[name=address]').val();
	 if (addressEntered == "") {
		console.log('address');
		$('#address').html('Please enter valid address (no special characters)')
	}
	else{
		console.log('good address');
		removeSpecialCharacters = addressEntered.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
		valid++;
	}
 }
 function validDescription(){
  if ($('input[name=description]').val() == "") {
 	console.log('description');
 	$('#description').html('Please enter description')
 }
 else{
 	console.log('good description');
 	valid++
 }
 }
 function validArtist(){
 	if($('input[name=artist]').val() == ""){
 		console.log('artist');
 		$('#artist').html('Please enter an artist name');
 	}
 	else {
 		console.log('good artist');
 		valid++;
 	}
 }
 function validPhotographer(){
	 if ($('input[name=photographer]').val() == "") {
		console.log('mural');
		$('#mural').html('Please enter a photographer name')
	}
	else{
		console.log('good photographer');
		valid++;
	}
 }
 function validType(){
	if ($('.form-input[name=type]').val() == "Select One") {
	 console.log('select one');
	 $('#select-one').html('Please select a type')
 }
 else{
	 console.log('good type');
	 valid++;
 }
 }
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
