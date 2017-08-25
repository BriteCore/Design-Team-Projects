$(function(){

	$(".btn-filter, .btn-filter-cancel").on("click", function(){
		$(".filter-container").fadeToggle();
	});

});


function create(box_id){
	$(box_id).addClass("active");
}

function createCancel(box_id){
	$(box_id).removeClass("active");
}

