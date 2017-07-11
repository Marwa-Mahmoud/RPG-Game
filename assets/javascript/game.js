
$(document).ready(function(){

	
	var myHealth = "";
	var enemyHealth = "";
	var myDamage = "";
	var myAttackPower=0;
	var enemyDamage = "";
	var enemyName = "";
	var me;
	var enemy;
	var restartBtn = $("<button id='restart-btn'>Restart</button>");

	$("#original-images").children().attr("data-type", "original");
	$("#obi-wan-kanobi").children("p").text($("#obi-wan-kanobi").attr("health-points"));
	$("#luke-skywalker").children("p").text($("#luke-skywalker").attr("health-points"));
	$("#darth-sidious").children("p").text($("#darth-sidious").attr("health-points"));
	$("#darth-maul").children("p").text($("#darth-maul").attr("health-points"));




	// function to select the defender
	var prepareDefender = function(){

		$("div").off("click");

		$("[data-type=enemy]").on("click", function(){

			enemy = $(this);
			$("#defender").append(enemy);
			enemyHealth = parseInt(enemy.attr("health-points"));
			enemyDamage = parseInt(enemy.attr("counter-attack-power"));
			enemyName = enemy.attr("name");
			enemy.css({"border" : "solid 5px green", "color": "white", "background-color": "black"});
			$("#attack-btn").attr("disabled", false);
		});
	}	

	$("[data-type=original]").on("click", function(){

		me = $(this);
		$("#selected-character").append(me);
		me.css({"border" : "solid 5px green", "color": "black", "background-color": "white"});
		myHealth = parseInt(me.attr("health-points"));
		myDamage = parseInt(me.attr("attack-power"));
		myAttackPower = myDamage;
		$("#enemies").append($("#original-images").children());
		$("#enemies").children().css({"border" : "solid 5px black", "color": "black", "background-color": "red"});

		$("#enemies").children().attr("data-type", "enemy");
		prepareDefender();





	});


	//button is clickable only after the enemy is chosen???
	//buttons stops responding to clicking when game is over

	$("#attack-btn").on("click", function(){

		$("#result").html("You attacked "+ enemyName + " for "+ myAttackPower+ "<br>"+
			enemyName + " attacked you back for " + enemyDamage);

		
		myHealth-= enemyDamage;
		enemyHealth-=myDamage;
		myAttackPower+= myDamage;
		me.children("p").text(myHealth);
		enemy.children("p").text(enemyHealth);

		console.log(myHealth+", "+ enemyHealth+", "+ myDamage);


		if(myHealth <= 0){
			console.log("you lose");
			$("#result").html("You have been defeated...GAME OVER!!!"+"<br>");
			$("#attack-btn").attr("disabled", true);
			$("#result").append(restartBtn);
	
		}

		else if (enemyHealth <= 0){
			console.log("you win");

			$("#result").html("You have defeated"+ enemyName+", you can choose to fight another enemy."+"<br>");
			enemy.remove();
			$("#attack-btn").attr("disabled", true);

		}

	});

	restartBtn.on("click", function(){

		console.log("restart");
		location.reload();
		
	});





});