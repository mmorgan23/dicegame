$(document).ready(function(){

function operation(){
	$("#click2").hide();
	$("#click3").hide();
	$("#click4").hide();
	$("#click5").hide();

	var minNumber = 1;
	var maxNumber = 6;

	var randomNumber1 = randomNumberFromRange(minNumber, maxNumber);
	var randomNumber2 = randomNumberFromRange(minNumber, maxNumber);
	var randomNumber3 = randomNumberFromRange(minNumber, maxNumber);
	var randomNumber4 = randomNumberFromRange(minNumber, maxNumber);
	var randomNumber5 = randomNumberFromRange(minNumber, maxNumber);

	var guess = randomNumberFromRange(minNumber, maxNumber);
	var guess2 = randomNumberFromRange(minNumber, maxNumber);
	var guess3 = randomNumberFromRange(minNumber, maxNumber);
	var guess4 = randomNumberFromRange(minNumber, maxNumber);
	var guess5 = randomNumberFromRange(minNumber, maxNumber);

	var win = 0;
	var loss = 0;

	function randomNumberFromRange(min,max){
	    return Math.floor(Math.random()*(max-min+1)+min);
		}

	function updateDisplay(){
			$("#rannum1").html(randomNumber1);
			$("#rannum2").html(randomNumber2);
			$("#rannum3").html(randomNumber3);
			$("#rannum4").html(randomNumber4);
			$("#rannum5").html(randomNumber5);
		}


$("#start").click(function(){
 		$("#start").hide();
 		console.log("working");
 		updateDisplay();
	


	$("#click1").click(function(){
 		$("#roll").html(guess);
 		$("#click1").hide();
 		$("#click2").show();

 		if ((guess == randomNumber1)) {
 		win ++;
 		$("#Win").html("WINS: " + win);
        $("#text").html("Round 1: You WON that one. 4 More Guesses Left!");
       
		}


 		else { 
 			$("#text").html("Round 1: Sorry, I won that one! 4 More Guesses Left!");
 			loss ++;
 			$("#Loss").html("LOSS: " + loss);
 		}

	});


	$("#click2").click(function(){
 		$("#roll").html(guess2);
 		$("#click2").hide();
 		$("#click3").show();

 		if ((guess2 == randomNumber2)) {
 		win ++;
 		$("#Win").html("WINS: " + win);
        $("#text").html("Round 2: You WON that one. 3 More Guesses Left!");
       
		}


 		else { 
 			$("#text").html("Round 2: Sorry, I won that one! 3 More Guesses Left!");
 			loss ++;
 			$("#Loss").html("LOSS: " + loss);
 		}

	});


	$("#click3").click(function(){
 		$("#roll").html(guess3);
 		$("#click3").hide();
 		$("#click4").show();

 		if ((guess3 == randomNumber3)) {
 		win ++;
 		$("#Win").html("WINS: " + win);
        $("#text").html("Round 3: You WON that one. 2 More Guesses Left!");
       
		}


 		else { 
 			$("#text").html("Round 3: Sorry, I won that one! 2 More Guesses Left!");
 			loss ++;
 			$("#Loss").html("LOSS: " + loss);
 		}

 	

	});

$("#click4").click(function(){
 		$("#roll").html(guess4);
 		$("#click4").hide();
 		$("#click5").show();

 		if ((guess4 == randomNumber4)) {
 		win ++;
 		$("#Win").html("WINS: " + win);
        $("#text").html("Round 4: You WON that one. 1 More Guesses Left!");
       
		}


 		else { 
 			$("#text").html("Round 4: Sorry, I won that one! 1 More Guesses Left!");
 			loss ++;
 			$("#Loss").html("LOSS: " + loss);
 		}


	});

$("#click5").click(function(){
 		$("#roll").html(guess4);
 		$("#click5").hide();
 		$("#click1").show();
 		

 		if ((guess5 == randomNumber5)) {
 		win ++;
 		$("#Win").html("WINS: " + win);
       
		}


 		else { 
 			
 			loss ++;
 			$("#Loss").html("LOSS: " + loss);
 		}

		
		if ((win > loss)) {
			$("#text").html("Round 5: You WON that one! <br> CONGRATULATIONS, YOU WON THAT GAME!");
			
			win = 0;
			loss = 0;
			$("#Win").html("WINS: " + win);
			$("#Loss").html("LOSS: " + loss);
			
		}

		else {
			$("#text").html("Round 5: You loss that one - Sorry! <br> YOU LOST THAT GAME!");
			
			win = 0;
			loss = 0;
			
			
		}



	});

		

 });

 }


 operation();	



});