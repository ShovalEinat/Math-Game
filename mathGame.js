var num1, num2, operator, answer, maxNum, timeLeft, timer, score, numQuestions, numCorrect;
let time = 60;
var sheesh = new Audio("sheesh.mp3");
var ohMyGod = new Audio("ohMyGod.mp3");
var wow = new Audio("wowww.mp3");
var windowsError = new Audio("windowsError.mp3");
var bruh = new Audio("bruh.mp3");

function generateQuestion() {
  num1 = Math.floor(Math.random() * maxNum) + 1;
  num2 = Math.floor(Math.random() * maxNum) + 1;
  operator = 3;
  document.getElementById("question").innerHTML = num1 + " * " + num2;
  answer = num1 * num2;
  numQuestions++;
}

function startGame() {
  timeLeft = time;
  score = 0;
  numQuestions = 0;
  numCorrect = 0;
  generateQuestion();
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("timer").innerHTML = "Time Left: " + timeLeft + "s";
  startTimer();
  document.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
      checkAnswer();
    }
  });
}

function checkAnswer() {
  var userAnswer = parseFloat(document.getElementById("answer").value);
  if (userAnswer === answer) {
    score++;
    numCorrect++;
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Incorrect. The answer was " + answer + ".";
    score = score -1;
  }
  document.getElementById("answer").value = "";
  generateQuestion();
  document.getElementById("score").innerHTML = "Score: " + score;
}

function startTimer() {
  timeLeft--;
  document.getElementById("timer").innerHTML = "Time Left: " + timeLeft + "s";
  if (timeLeft === 0) {
    endGame();
  } else {
    timer = setTimeout(startTimer, 1000);
  }
}

function reStart() {
  timeLeft = time;
  score = 0;
  numQuestions = 0;
  numCorrect = 0;
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("timer").innerHTML = "Time Left: " + timeLeft + "s";
  document.getElementById("result").innerHTML = "";
  document.getElementById("answer").value = "";
  clearTimeout(timer);
  generateQuestion();
  timer = setTimeout(startTimer, 1000);
}

document.addEventListener("keydown", function(event) {
  if (event.code === "KeyR") {
    reStart();
  }
});

function back() {
  location.reload();
}

document.addEventListener("keydown", function(event) {
  if (event.code === "KeyB") {
    back();
  }
});


function endGame() {
  clearInterval(timer);
  document.getElementById("game-container").style.display = "none";
  document.getElementById("back2").style.display = "block";
  numQuestions = numQuestions -1;
  var percentage = numCorrect / numQuestions * 100;
  var resultText = document.createElement("p");
  setTimeout(function() {
    if (score == 0, numQuestions == 0) {
      resultText.innerHTML = "Game Over! and you didn't even played";
    }
}, 00001);      
  resultText.innerHTML = "Game Over! Your final score is " + score + " out of " + numQuestions + " (" + percentage.toFixed(2) + "%).";
  document.getElementById("result-container").appendChild(resultText);
  document.getElementById("mathGame").style.height = "400px";
  if (score > 25) {
    sheesh.play();
  } else if (score > 10) {
    ohMyGod.play();
  } else if (score > 0) {
    wow.play();
  } else if (score > -10) {
    windowsError.play();
  } else {
    bruh.play();
  }
}

function setMaxNum(num) {
  maxNum = num;
  document.getElementById("maxNum-options").style.display = "none";
  startGame();
}

function showOptions() {
  document.getElementById("maxNum-options").style.display = "block";
}

let rickRolledCount = 0;
document.getElementById("title").addEventListener("click", function() {
  rickRolledCount++;
  if (rickRolledCount === 5) {
    var neverGonna = new Audio("neverGonna.mp4");
    neverGonna.play();
    let video = document.getElementById("video");
    video.style.display = "block";
    video.requestFullscreen();
    rickRolledCount = 0;

    setTimeout(function() {
      alert("Get rickrolled!");
      video.style.display = "none";
      neverGonna.pause();
    }, 6000);
    
  }
});

let range = document.getElementById("range");
let rangeValue = document.getElementById("rangeValue");

range.addEventListener("input", () => {
    rangeValue.innerHTML = "Time will Be : " + range.value;
});


const muteCheckbox = document.getElementById("mute-audio");
muteCheckbox.addEventListener("change", function() {
  sheesh.muted = this.checked;
  ohMyGod.muted = this.checked;
  wow.muted = this.checked;
  windowsError.muted = this.checked;
  bruh.muted = this.checked;
});
