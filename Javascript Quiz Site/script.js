const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: "3. quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];

/********************JAVASCRIPT CODE****************** */

var startQuizBlock = document.getElementById("start-quiz-block");
var quizQuestionBlock = document.getElementById("quiz-question-block");
var highscoresBlock = document.getElementById("highscores-block");
var resultBlock = document.getElementById("result-block");

var correctIncorrectText = document.getElementById("result-text");
var breakLine = document.getElementById("break");
var proceedButton = document.getElementById("proceed");

var quizBegin = false;
var quizGoingOn = false;
var quizHalted = false;
var quizFinished = false;
var quizSubmitted = false;

var enterInitialPhase = false

var optionClicked = false;

var questionCounter;

var questionHeading = document.getElementById("question");
var questionOptionOne = document.getElementById("quiz-option-button-1");
var questionOptionTwo = document.getElementById("quiz-option-button-2");
var questionOptionThree = document.getElementById("quiz-option-button-3");
var questionOptionFour = document.getElementById("quiz-option-button-4");

var resultScore = document.getElementById("result-score");

var inputField = document.getElementById("enter-initials-field");

var timeValue = document.getElementById("time-value");

var highscoresTable = document.getElementById("highscores-table");

var time = 0;
var finalScore = 0;
timeValue.innerText = time;

const resultArray = [3,4,3,4,1];
const responseArray = [];
const questionStateArray = [];

const size = resultArray.length;



////////////////////////QUIZ CONDUTION BLOCK

function quizStart(){
  quizBegin = true;
  quizGoingOn = true;
  quizHalted = false;
  quizFinished = false;
  optionClicked = false;
  enterInitialPhase = false;
  quizSubmitted = false;

  questionCounter = 0;

  setTime(30);

  var timer = setInterval(function(){
    time = time - 1;
    timeValue.innerText = time;
    if(time === 0 || quizFinished === true){
      setTime(time);
      clearInterval(timer);
    }
  }, 1000);

  var timerState = setInterval(function(){
    if(time <= 0){
      quizEnd();
      showResult();
      setTime(0);
      clearInterval(timerState);
    }
  }, 200);

}
function quizStop(){
  quizBegin = true;
  quizGoingOn = true;
  quizHalted = true;
  quizFinished = false;

  
}
function quizRunning(){
  quizBegin = true;
  quizGoingOn = true;
  quizHalted = false;
  quizFinished = false;
}
function quizEnd(){
  quizBegin = false;
  quizGoingOn = false;
  quizHalted = false;
  quizFinished = true;

  enterInitialPhase = true;

  if(resultBlock.style.display == "none"){
    inputField.value = "";
  }

}
function setTime(res){
    time = res;
  if(time >= 0){
    timeValue.innerText = res;
  }
  else{
    timeValue.innerText = 0;
  }
}

//////////////////////////Start QUIZ

function viewStartQuiz(){
  startQuizBlock.style.display = "block";
  quizQuestionBlock.style.display = "none";
  highscoresBlock.style.display = "none";
  resultBlock.style.display = "none";
}


/////////////////////////SHOW LEADERBOARD

function showLeaderboard(){
  const arrayOfUsers = [];
  for(var i=0;i<localStorage.length;i++){
    var keyName = localStorage.key(i);
    var scoreValue = localStorage.getItem(keyName);
    var indexValue = i;

    var user = {
      index : indexValue + 1,
      key : keyName,
      score : scoreValue
    }
    console.log(user.key);
    arrayOfUsers.push(user);
  }

    console.log(localStorage.length);

  highscoresTable.innerHTML = arrayOfUsers.map( player=>
    `
    <div class='highscores-element'>
      <p class='highscores-text' id='player-index'>${player.index}.</p>
      <p class='highscores-text' id='player-key'>${player.key}</p>
      <p class='highscores-text' id='player-hyphen'>-</p>
      <p class='highscores-text' id='player-score'>${player.score}</p>
    </div>
    `
    ).join('');
}

function clearLeaderboard(){
  localStorage.clear();
  showLeaderboard();
}

function viewHighScores(){
  startQuizBlock.style.display = "none";
  quizQuestionBlock.style.display = "none";
  highscoresBlock.style.display = "block";
  resultBlock.style.display = "none";

  if(resultBlock.style.display === "none"){
    inputField.value = "";
  }

  showLeaderboard();
  console.log(quizSubmitted);
}

//////////////////SHOW QUIZ QUESTION BLOCK

function quizShowing(questionC){
  if(questionC < size){
    questionHeading.innerText = questions[questionC].questionText;
    questionOptionOne.innerText = questions[questionC].options[0];
    questionOptionTwo.innerText = questions[questionC].options[1];
    questionOptionThree.innerText = questions[questionC].options[2];
    questionOptionFour.innerText = questions[questionC].options[3];
  }
}

function viewQuizQuestion(){
  if(optionClicked === false){
    startQuizBlock.style.display = "none";
    quizQuestionBlock.style.display = "block";
    highscoresBlock.style.display = "none";
    resultBlock.style.display = "none";
    correctIncorrectText.style.display = "none";
    breakLine.style.display = "none";
    proceedButton.style.display = "none";
  }
  else if(optionClicked === true){
    startQuizBlock.style.display = "none";
    quizQuestionBlock.style.display = "block";
    highscoresBlock.style.display = "none";
    resultBlock.style.display = "none";
    correctIncorrectText.style.display = "block";
    breakLine.style.display = "block";
    proceedButton.style.display = "block";
  }
  quizShowing(questionCounter);

}

function sendOptionValue(res){
  
  responseArray[questionCounter] = res;
  

  lockOptions();
  computeResult();
  
  
  
  
}

function lockOptions(){
    optionClicked = true;
    questionOptionOne.onclick = function() {};
    questionOptionTwo.onclick = function() {};
    questionOptionThree.onclick = function() {};
    questionOptionFour.onclick = function() {};

}
function unlockOptions(){
  optionClicked = false;
  questionOptionOne.onclick = function() {sendOptionValue(1)};
  questionOptionTwo.onclick = function() {sendOptionValue(2)};
  questionOptionThree.onclick = function() {sendOptionValue(3)};
  questionOptionFour.onclick = function() {sendOptionValue(4)};

}

function computeResult(){
  if(questionCounter < size-1){
    if(resultArray[questionCounter] === responseArray[questionCounter]){
      questionStateArray[questionCounter] = 1;
      showQuestionResult("Correct");
      time+=5;
      
    }
    else{
      showQuestionResult("Incorrect");
      time-=5;
    }
  }
  else if(questionCounter === size-1){
    if(resultArray[questionCounter] === responseArray[questionCounter]){
      questionStateArray[questionCounter] = 1;
      showQuestionResult("Correct");
      time+=5;
      
    }
    else{
      showQuestionResult("Incorrect");
      time-=5;
    }
    quizEnd();
    proceedButton.innerText = "End";
  }

  
  setTime(time);
  
}

function showQuestionResult(res){
  correctIncorrectText.innerText = res;
  correctIncorrectText.style.display = "block";
  breakLine.style.display = "block";
  proceedButton.style.display = "block";
}

function proceedFunction(){
  questionCounter++;
  unlockOptions();
  if(questionCounter < size){
    
    
    viewQuizQuestion();
  }
  else if(questionCounter === size){
    quizEnd();
    showResult();
    
  }
}

//////////////////////SHOW RESULT BLOCK

function submitInitials(){
  var nameOfPlayer = inputField.value;
  if(nameOfPlayer.length !== 0){
    localStorage.setItem(nameOfPlayer, finalScore);
    viewHighScores();
    setTime(0);
    quizSubmitted = true;

  }
}
function showResult(){
  
  if(quizFinished === true){
    startQuizBlock.style.display = "none";
    quizQuestionBlock.style.display = "none";
    highscoresBlock.style.display = "none";
    resultBlock.style.display = "block";

    finalScore = time;

    resultScore.innerText = "Your final score is " + finalScore;    
  }

}

/////////////////////STSRT QUIZ

function startQuiz(){
  quizStart();
  quizRunning();
  viewQuizQuestion();
}

/////////////////////////VIEW HIGHSORES

function goBack(){
  
  if(quizGoingOn === true){
    viewQuizQuestion();
  }
  
  else if(quizSubmitted === false && quizGoingOn === false && enterInitialPhase === true){
    showResult();
  }
  else {
    viewStartQuiz();
    setTime(0);
  }
}









