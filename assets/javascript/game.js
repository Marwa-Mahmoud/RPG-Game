
$(document).ready(function(){

	var myHealth = 0;
	var enemyHealth = 0;

	$("#original-images").children().attr("data-type", "original");
	$("#first-character").children("p").text($("#first-character").attr("health-power"));
	$("#second-character").children("p").text($("#second-character").attr("health-power"));
	$("#third-character").children("p").text($("#third-character").attr("health-power"));
	$("#fourth-character").children("p").text($("#fourth-character").attr("health-power"));



	$("[data-type=original]").on("click", function(){

		$("#selected-character").append($(this));
		myHealth = $(this).attr("health-power");
		console.log(myHealth);
		$("#enemies").append($("#original-images").children());
		$("#enemies").children().css("border", "solid 10px red");
		$("#enemies").children().attr("data-type", "enemy");


		$("[data-type=enemy]").on("click", function(){

			$("#defender").append($(this));
			enemyHealth = $(this).attr("health-power");
			console.log(enemyHealth);
			$(this).css("border", "solid 10px black");
		});


	});





});