$(function($){
	$("#footer").load("footer.html");
	$(document).on('pageInit','#reservation',function(){
		setTimeout(function(){
			$('#footer_appointment_tab').addClass('active').siblings().removeClass('active');
		},100)
	});
	$(document).on('pageInit','#index-page',function(){
		setTimeout(function(){
			$('#store_index_tab').addClass('active').siblings().removeClass('active');
		},100)
	});
	$(document).on('pageInit','#distribution_index_wrap',function(){
		setTimeout(function(){
			$('#distribution_index_tab').addClass('active').siblings().removeClass('active');
		},100)
	});
	$.init();
})