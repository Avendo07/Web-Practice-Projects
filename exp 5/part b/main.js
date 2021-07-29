
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "New Delhi" || question1 == "Delhi" || question1 == "DELHI") {
		correct++;
}
	if (question2 == "Kathmandu") {
		correct++;
}	
	if (question3 == "Ottawa") {
		correct++;
	}
	
	var messages = ["Great job!", "Keep Going", "You need to work"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}
	window.confirm(messages[score] + "\n" + "You got " + correct + " correct.", "OK");	
	document.getElementById("quiz").reset();
}
	
