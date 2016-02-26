function canModalOpen(){
  	$('#open').hide();
  	$('#close').show();
  	$('#modal').removeClass('can-modal-hide');
  	$('#modal').addClass('can-modal-show');
};
var openModal = document.getElementById('open');
canModalOpen.addEventListener('click', canModalOpen);
