function door_mouseover(door){
	$(door).find("img").animate({
		opacity: '0.5'
	});
	$(door).find(".door-text").animate({
		opacity: '1'
	});
};

function door_mouseout(door){
	$(door).find("img").animate({
		opacity: '1'
	});
	$(door).find(".door-text").animate({
		opacity: '0'
	});
};

$(document).ready(function(){
	$(".door-image").hover(
		function(){
			door_mouseover(this);
	    }, function () {
			door_mouseout(this);
	    });
});