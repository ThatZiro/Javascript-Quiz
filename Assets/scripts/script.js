//====================================================================================================//
//===========================================[ Global Variables ]=====================================//
//====================================================================================================//

//Elements
var headerText = document.querySelector("#Header-Text");
var landingPage = document.querySelector("#Landing-Page");
var questionPage = document.querySelector("#Questions-Page");
var resultsPage = document.querySelector("#Results-Page");
var resultBox = document.querySelector("#Result-Box");
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
  currentQuestion = GetRandomQuestion();

  BuildQuestion(currentQuestion);
}

function BuildQuestion(question) {
  LoadHeader(question.Question);

  console.log(answers);
  for (let i = 0; i < answers.length; i++) {
    var a = answers[i];
    var questionAnswer = question.allAnswers[i];
    a.textContent = i + 1 + ". " + questionAnswer;
    a.setAttribute("data-answer", questionAnswer);
  }
}

function CheckAnswer(event) {
  var choice = event.target.dataset.answer;

  //Check Answer based on current question
  if (choice == currentQuestion.correctAnswer) {
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
  }

  //Load Next Question
}

function SubmitHighscore() {
  // TODO Create Database Entry
  console.log("TODO : Create Highscore");
}

// === Untility ===

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

ToggleElement(resultBox, false);
LoadPage("landing");
