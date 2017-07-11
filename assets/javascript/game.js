
$(document).ready(function(){

	// creating golbal variables
	var myHealth = "";
	var enemyHealth = "";
	var myDamage = "";
	var myAttackPower=0;
	var enemyDamage = "";
	var enemyName = "";
	var me;
	var enemy;
	var restartBtn = $("<button id='restart-btn'>Restart</button>");
	noEnemyFlag = true; //it flags if there is no enemy to defend

	//displaying data on each of the images
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
			$("#result").html("");
			noEnemyFlag = false;
		});
	}	

	// The first on click function that selects the user's player and sets the available enemies
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

	// Attack button 
	$("#attack-btn").on("click", function(){

		if(noEnemyFlag){
			$("#result").html("No enemy here!");

		}

		else{
			$("#result").html("You attacked "+ enemyName + " for "+ myAttackPower+ "<br>"+
				enemyName + " attacked you back for " + enemyDamage);

	
			enemyHealth-=myAttackPower;

			if (enemyHealth <= 0){
				console.log($("#enemies").children().length);

				if($("#enemies").children().length > 1){

					$("#result").html("You have defeated "+ enemyName+", you can choose to fight another enemy."+"<br>");
					
					noEnemyFlag = true;
				}
				else{
					$("#result").html("YOU WON!!!...GAME OVER!!!");
				}
				enemy.remove();

			}

			else{
				myHealth-= enemyDamage;

				if(myHealth <= 0){
					console.log("you lose");
					$("#result").html("You have been defeated...GAME OVER!!!"+"<br>");
					// Attack button stops responding to clicks when game is over
					$("#attack-btn").attr("disabled", true);
					$("#result").append(restartBtn);
				}
			}	

			myAttackPower+= myDamage;
			me.children("p").text(myHealth);
			enemy.children("p").text(enemyHealth);

		}

		

	});

	restartBtn.on("click", function(){

		console.log("restart");
		location.reload();
		
	});





});