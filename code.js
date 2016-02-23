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
function validUser(){
	if($('input[name=user]').val() == ""){
		console.log('user');
		$('#user').html('Please enter a user name');
	}
	else {
		console.log('good user');
		valid++;
	}
}
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
 function validMural(){
	 if ($('input[name=mural]').val() == "") {
		console.log('mural');
		$('#mural').html('Please enter a mural name')
	}
	else{
		console.log('good mural');
		valid++;
	}
 }
function validatedForm(){
		validUser();
		validAddress();
		validDescription();
		validMural();
		console.log(valid);
		if(valid == 4){
			hideModal();
		}
		valid = 0;
}

var art = {
	address: '1721 Martin Luther King Jr Way S, Seattle, WA',
    lat: 47.587682,
	long: 122.298429,
	description: 'shitbarf tag on bus stop',
	artist: 'shitbarf the ultimate',
	photographer: 'Anon2',
	type: 'tag',
	image: 'http://i.stack.imgur.com/ijSS5.png'
};
var stringArt = JSON.stringify(art);
console.log('test'+stringArt)



$.post('/art', {address: '1721 Martin Luther King Jr Way S, Seattle, WA',lat: 47.587682,long: 122.298429,description: 'shitbarf tag on bus stop2',artist: 'shitbarf the ultimate',photographer: 'Anon2',type: 'tag',image: 'http://i.stack.imgur.com/ijSS5.png'}, function(data) {
  console.log('data from post');
  console.log(data);
}, 'json');



$.getJSON('/art', function( data ) {
	console.log(data);
});
