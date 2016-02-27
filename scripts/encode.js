console.log('stuff');
$.getJSON('https://seattleartmap.herokuapp.com/art', function( data ) {
    //console.log(data);
  var image = data[2].image;
  //console.log(image);
  console.log(image);
  //var decodedimg = atob(image);
  document.getElementById("stuff").src = image;
  console.log(decodedimg);
});
