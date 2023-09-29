//====================================================================================================//
//===========================================[ Global Variables ]=====================================//
//====================================================================================================//

//Elements
var headerText = document.querySelector("#Header-Text");
var landingPage = document.querySelector("#Landing-Page");
var questionPage = document.querySelector("#Questions-Page");
var resultsPage = document.querySelector("#Results-Page");
var messageBox = document.querySelector("#Message-Box");
var timerText = document.querySelector("Timer-Text");

//Buttons
var startQuizButton = document.querySelector("#Start-Quiz-Button");
var submitScoreButton = document.querySelector("#Submit-Score-Button");
var answers = document.querySelectorAll("#Questions-Page button");

//Answers
var answerOne = answers.chi;

//Questions
var allQuestions = javascriptQuestions; // List of all questions that havn't been played
var currentQuestion; // Our current question thats on screen
var questionCount = 5; // total amount of questions that need answered
var timer = 60;

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
      ToggleElement(resultsPage, true);
      break;
  }
}

function HideAllPages() {
  ToggleElement(landingPage, false);
  ToggleElement(questionPage, false);
  ToggleElement(resultsPage, false);
}

function LoadHeader(text) {
  headerText.textContent = text;
}

// === Event Handlers ===
function StartQuiz() {
  //Load Page
  LoadPage("question");

  //Get Random Question
  LoadQuestion();
  //   StartTimer();
}

function BuildQuestion(question) {
  LoadHeader(question.Question);

  console.log(answers);
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
    ShowMessage("Incorrect!", "#FA7C68");
  }

  if (questionCount > 0) {
    LoadQuestion();
  } else {
    LoadPage("results");
  }
}
// === Timer ===

function SubmitHighscore() {
  // TODO Create Database Entry
  console.log("TODO : Create Highscore");
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

//====================================================================================================//
//===========================================[ Running Logic ]========================================//
//====================================================================================================//

ToggleElement(messageBox, false);
LoadPage("landing");
