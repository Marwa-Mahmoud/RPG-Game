
$(document).ready(function(){

	var myHealth = "";
	var enemyHealth = "";
	var myDamage = "";
	var enemyDamage = "";
	var enemyName = "";

	$("#original-images").children().attr("data-type", "original");
	$("#obi-wan-kanobi").children("p").text($("#obi-wan-kanobi").attr("health-points"));
	$("#luke-skywalker").children("p").text($("#luke-skywalker").attr("health-points"));
	$("#darth-sidious").children("p").text($("#darth-sidious").attr("health-points"));
	$("#darth-maul").children("p").text($("#darth-maul").attr("health-points"));


	// function to select the defender
	var prepareDefender = function(){

		$("div").off("click");

		$("[data-type=enemy]").on("click", function(){

			$("#defender").append($(this));
			enemyHealth = parseInt($(this).attr("health-points"));
			enemyDamage = parseInt($(this).attr("counter-attack-power"));
			enemyName = $(this).attr("name");
			$(this).css("border", "solid 10px black");
			
		});
	}	

	$("[data-type=original]").on("click", function(){

		$("#selected-character").append($(this));
		myHealth = parseInt($(this).attr("health-points"));
		myDamage = parseInt($(this).attr("attack-power"));
		$("#enemies").append($("#original-images").children());
		$("#enemies").children().css("border", "solid 10px red");
		$("#enemies").children().attr("data-type", "enemy");
		prepareDefender();





	});


	//button is clickable only after the enemy is chosen???

	$("#attack-btn").on("click", function(){

		$("#result").html("You attacked "+ enemyName + " for "+ myDamage+ "<br>"+
			enemyName + " attacked you back for " + enemyDamage);

		
		myHealth-= enemyDamage;
		enemyHealth-=myDamage;
		myDamage+= myDamage;

		console.log(myHealth+", "+ enemyHealth+", "+ myDamage);

	})





});