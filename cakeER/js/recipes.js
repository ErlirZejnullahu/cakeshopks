$('.navbar-nav.me-auto.mb-2.mb-lg-0').sortable();





$('.col-md-2.col-lg-2.col-xl-2.mx-auto.mb-4').sortable();


$('.col-md-4').draggable({axis:'x'});

$('').draggable({axis:'x'});

$( function(){
	$('.col-md-4').draggable({revert: true});
	$(".col-md-8").droppable({
		drop :function(){
			alert("You can not droppe here");
		}
		});
});