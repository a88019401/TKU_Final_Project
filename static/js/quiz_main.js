function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;
	if (question1 == ""){
	alert("你好像忘記打上自己的名字唷!")
	return false;
	}else correct++;
	console.log(question1)
	if (question2 == "1") {
	correct++;
	} else if (question2 == "NO"){
	alert("你第一題回答完了嗎?")
	return false;
	}
	console.log(question2)
	if (question3 == "2") {
	correct++;
	} else if (question3 == "NO"){
	alert("你第二題回答完了嗎?")
	return false;
	}
	console.log(question3)



	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
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
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
 }