
$(document).ready(function(){


	$("#original-images").children().attr("data-type", "original");


	$("[data-type=original]").on("click", function(){

		$("#selected-character").append($(this));
		$("#enemies").append($("#original-images").children());
		$("#enemies").children().css("border", "solid 10px red");
		$("#enemies").children().attr("data-type", "enemy");
	//$("#original-images").children().attr("data-type", "enemy");
	//$("#original-images").empty();

		$("[data-type=enemy]").on("click", function(){

			$("#defender").append($(this));
		});


	});



});