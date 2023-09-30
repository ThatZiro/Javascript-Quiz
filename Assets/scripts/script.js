//====================================================================================================//
//===========================================[ Global Variables ]=====================================//
//====================================================================================================//

//Elements
var headerText = document.querySelector("#Header-Text");
var landingPage = document.querySelector("#Landing-Page");
var questionPage = document.querySelector("#Questions-Page");
var resultsPage = document.querySelector("#Results-Page");
var highscorePage = document.querySelector("#Highscore-Page");
var messageBox = document.querySelector("#Message-Box");
var timerText = document.querySelector("#Timer-Text");

//Inputs
var initialInput = document.querySelector("#Initials-Input");
//Buttons
var highscoresButton = document.querySelector("#HighScores-Button");
var startQuizButton = document.querySelector("#Start-Quiz-Button");
var submitScoreButton = document.querySelector("#Submit-Score-Button");
var answers = document.querySelectorAll("#Questions-Page button");
var backButton = document.querySelector("#Back-Button");
var clearButton = document.querySelector("#Clear-Button");

//Answers
var answerOne = answers.chi;

//Questions
var allQuestions = javascriptQuestions; // List of all questions that havn't been played
var currentQuestion; // Our current question thats on screen
var questionCount = 5; // total amount of questions that need answered
var timer = 60;
var score = 0;

//Database
var highscores = [];
//====================================================================================================//
//===========================================[ Functions ]============================================//
//====================================================================================================//

// == Load Page ==
function LoadPage(page) {
  HideAllPages();
  switch (page) {
    case "landing":
      LoadHeader("Coding Quiz Challenge");
      ToggleElement(landingPage, true);
      break;
    case "question":
      questionCount = 5;
      ToggleElement(questionPage, true);
      break;
    case "results":
      score = timer;
      LoadHeader("All Done!");
      resultsPage.children[0].textContent = "Your final score was " + score;
      StopTimer();
      ToggleElement(resultsPage, true);
      break;
    case "highscore":
      ToggleElement(highscorePage, true);
      break;
  }
}

function HideAllPages() {
  ToggleElement(landingPage, false);
  ToggleElement(questionPage, false);
  ToggleElement(resultsPage, false);
  ToggleElement(highscorePage, false);
}

function LoadHighscorePage() {
  LoadPage("highscore");
}
function LoadHomePage() {
  LoadPage("landing");
}

function LoadHeader(text) {
  headerText.textContent = text;
}

// === Event Handlers ===
function StartQuiz() {
  //Initilize Score
  score = 0;
  //Load Page
  LoadPage("question");

  //Get Random Question
  LoadQuestion();
  StartTimer(60);
}

function BuildQuestion(question) {
  LoadHeader(question.Question);

  var shuffledAnswers = ShuffleArray(question.allAnswers);

  for (let i = 0; i < answers.length; i++) {
    var a = answers[i];
    var questionAnswer = shuffledAnswers[i];
    a.textContent = i + 1 + ". " + questionAnswer;
    a.setAttribute("data-answer", questionAnswer);
  }
}

function LoadQuestion() {
  questionCount--;
  currentQuestion = GetRandomQuestion();
  BuildQuestion(currentQuestion);
}

function CheckAnswer(event) {
  var choice = event.target.dataset.answer;

  //Check Answer based on current question
  if (choice == currentQuestion.correctAnswer) {
    ShowMessage("Correct!", "#90FDB9");
  } else {
    timer -= 10; //Penalty
    timerText.textContent = "Time : " + timer;
    ShowMessage("Incorrect!", "#FA7C68");
  }

  if (questionCount > 0) {
    LoadQuestion();
  } else {
    LoadPage("results");
  }
}
// === Timer ===
function StartTimer(time) {
  timerText.setAttribute("style", "visibility:visible");
  timer = time;
  timerText.textContent = "Time : " + timer;
  timerText.setAttribute("style", "height:100%");
  var tick = setInterval(function () {
    timer--;
    timerText.textContent = "Time : " + timer;
    if (timer <= 0 && score == 0) {
      EndTimer();
      clearInterval(tick);
    }
  }, 1000);
}
function StopTimer() {
  timerText.setAttribute("style", "visibility:hidden");
  timer = 0;
  timerText.textContent = "Time : " + timer;
}
function EndTimer() {
  LoadPage("result");
  ShowMessage("Times Up!", "black");
}

function SubmitHighscore(event) {
  event.preventDefault();
  if (initialInput.value == "") {
    ShowMessage("Please Insert your Initials", "black");
    return;
  }

  var initials = initialInput.value;
  initialInput.value = "";
  var newHighscore = {
    name: initials,
    score: score,
  };

  AddHighscore(newHighscore);
}
// === Database ===
function AddHighscore(newData) {
  highscores.push(newData);
  console.log(highscores);
  AddData(highscores);
}

function ClearHighscores() {
  ClearData();
  highscores = [];
  ShowMessage("highscores cleared...", "#767A76");
}

function AddData(scoreData) {
  var jsonData = JSON.stringify(scoreData);
  localStorage.setItem("highscores", jsonData);
}

function ClearData() {
  localStorage.clear();
}

function GetData() {
  var data = localStorage.getItem("highscores");
  return JSON.parse(data);
}

// === Untility ===

function ShowMessage(text, color) {
  ToggleElement(messageBox, true);
  messageBox.children[0].textContent = text;
  messageBox.children[0].setAttribute("style", `color: ${color}`);

  setTimeout(HideMessage, 1000);
}
function HideMessage() {
  ToggleElement(messageBox, false);
}
function GetRandomQuestion() {
  let r = Math.floor(Math.random() * allQuestions.length);
  let q = allQuestions[r];
  allQuestions.splice(r, 1);
  return q;
}

function ToggleElement(element, status) {
  if (status) {
    element.setAttribute("style", "display: block");
  } else {
    element.setAttribute("style", "display: none");
  }
}

function ShuffleArray(array) {
  var newArray = [];
  var count = array.length;
  for (let i = 0; i < count; i++) {
    let r = Math.floor(Math.random() * array.length);
    newArray.push(array[r]);
    array.splice(r, 1);
  }
  return newArray;
}
//====================================================================================================//
//===========================================[ Events ]===============================================//
//====================================================================================================//

startQuizButton.addEventListener("click", StartQuiz);

answers.forEach((answer) => {
  answer.addEventListener("click", CheckAnswer);
});

submitScoreButton.addEventListener("click", SubmitHighscore);

backButton.addEventListener("click", LoadHomePage);
clearButton.addEventListener("click", ClearData);

highscoresButton.addEventListener("click", LoadHighscorePage);
//====================================================================================================//
//===========================================[ Running Logic ]========================================//
//====================================================================================================//

ToggleElement(messageBox, false);
timerText.setAttribute("style", "visibility:hidden");
LoadPage("landing");
