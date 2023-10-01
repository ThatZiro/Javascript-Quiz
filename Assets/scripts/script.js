//====================================================================================================//
//===========================================[ Global Variables ]=====================================//
//====================================================================================================//

//Root
var root = document.querySelector(":root");
//Alert
var alert = document.querySelector("#Alert");
//Pages
var homePage = document.querySelector("#Page_Home");
var questionPage = document.querySelector("#Page_Question");
var scorePage = document.querySelector("#Page_Score");
var highscoresPage = document.querySelector("#Page_Highscores");
var reviewPage = document.querySelector("#Page_Review");
var studyPage = document.querySelector("#Page_Study");

//Navigation
var nav = document.querySelector("#Navigation");
var timerText = document.querySelector("#Time"); // Use to change the time when timer is ticking down
var homeNav = document.querySelectorAll(".Nav_Home");
var studyNav = document.querySelectorAll(".Nav_Study");
var highscoresNav = document.querySelectorAll(".Nav_Highscores");

//Question Page
var questionText = document.querySelector("#Question-Text");
var answerButtons = document.querySelectorAll(".question");
//Footer
var footerLinks = document.querySelector("#Footer-Links");
var footerSocials = document.querySelector("#Footer-Social");

//Buttons
var startQuizButton = document.querySelector("#Start-Quiz-Button");
var exitQuizButton = document.querySelector("#Exit-Quiz-Button");
var skipQuestionButton = document.querySelector("#Skip-Question-Button");
var answerButtons = document.querySelectorAll(".question");
var questionImage = document.querySelector("#Question-Image");
var submitScoreButton = document.querySelector("#Submit-Score-Button");
var playAgainButton = document.querySelector("#Play-Again-Button");
var reviewButton = document.querySelector("#Review-Button");

//Questions
var allQuestions; // List of all questions that havn't been played
var answeredQuestion = []; // List of all questions answered and there value {Question, Choice, Status}
var currentQuestion; // Our current question thats on screen

//Stats
var scoreForm = document.querySelector("#Score-Form");
var scoreSubmittedText = document.querySelector("#Score-Submitted-Text");
var answeredNumber = document.querySelector("#Answered-Number");
var incorrectNumber = document.querySelector("#Incorrect-Number");
var skippedNumber = document.querySelector("#Skipped-Number");
var scoreNumber = document.querySelector("#Score-Number");

//Input
var nameInput = document.querySelector("#Name-Input");
//var
var timer = 120;
var answer = 0;
var skipped = 0;
var incorrect = 0;
var score = 0;

//Database
var highscores = [];
//====================================================================================================//
//===========================================[ Functions ]============================================//
//====================================================================================================//

// == Load Page ==
function LoadPage(page) {
  HideAllPages();
  ToggleElement(nav, true); // Force Nav on all pages
  ToggleQuestionFooter(false); // Disable Question Footer
  switch (page) {
    case "Home":
      ToggleElement(homePage, true);
      break;
    case "Question":
      ToggleElement(questionPage, true);
      ToggleElement(nav, false); //Remove Nav
      ToggleQuestionFooter(true); // Enable Question Footer
      break;
    case "Score":
      ToggleElement(scorePage, true);
      BuildScorePage();
      // score = timer;
      // LoadHeader("All Done!");
      // resultsPage.children[0].textContent = "Your final score was " + score;
      // StopTimer();
      // ToggleElement(resultsPage, true);
      break;
    case "Highscores":
      ToggleElement(highscoresPage, true);
      // ToggleElement(header, false);
      // LoadHeader("High Scores");
      // BuildHighScoreDisplay();
      // ToggleElement(highscorePage, true);
      break;
    case "Review": {
      ToggleElement(reviewPage, true);
    }
    case "Study": {
      ToggleElement(studyPage, true);
    }
  }
}

function HideAllPages() {
  ToggleElement(homePage, false);
  ToggleElement(questionPage, false);
  ToggleElement(scorePage, false);
  ToggleElement(highscoresPage, false);
  ToggleElement(reviewPage, false);
  ToggleElement(studyPage, false);
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

//Start The Quiz when button pressed
function StartQuiz() {
  //Initilize Score
  answer = 0;
  skipped = 0;
  incorrect = 0;
  score = 0;
  allQuestions = [...javascriptQuestions];
  //Load Page
  LoadPage("Question");

  //Get Random Question
  LoadQuestion();
  StartTimer(120);
}

//Load A Question
function LoadQuestion() {
  currentQuestion = GetRandomQuestion();
  if (currentQuestion != null) {
    BuildQuestion(currentQuestion);
  } else {
    console.log("We are out of Questions"); //
    LoadPage("Result");
  }
}

function BuildQuestion(question) {
  //Set Question Text to Question
  questionText.textContent = question.question;
  var shuffledAnswers = ShuffleArray(question.allAnswers);

  for (let i = 0; i < answerButtons.length; i++) {
    var a = answerButtons[i];
    var questionAnswer = shuffledAnswers[i];
    a.children[1].textContent = questionAnswer;
    a.setAttribute("data-answer", questionAnswer);
  }

  //Change Photo
  if (question.image != "") {
    questionImage.setAttribute("style", "display:block");
    questionImage.setAttribute("src", question.image);
  } else {
    questionImage.setAttribute("style", "display:none");
  }
}

function CheckAnswer(event) {
  var choice = event.target.dataset.answer;
  answer++;
  //Check Answer based on current question
  if (choice == currentQuestion.correctAnswer) {
    console.log("Correct!");
    // ShowMessage("Correct!", "#90FDB9"); // TODO Show Result
    NextQuestion(choice);
  } else {
    console.log("Incorrect!");
    incorrect++;
    timer -= 10; //Penalty
    timerText.textContent = TimerToString(timer); // TODO Update this
    // ShowMessage("Incorrect!", "#FA7C68"); // TODO Show Result
    NextQuestion(choice);
  }
}

function NextQuestion(_choice) {
  var questionResult = {
    question: currentQuestion,
    choice: _choice,
  };

  answeredQuestion.push(questionResult);

  LoadQuestion();
}

function SkipQuestion() {
  // TODO Skip Question Logic
  console.log("Question Skipped");
  skipped++;
  NextQuestion("");
}

function ExitQuiz() {
  // TODO Skip Question Logic
  console.log("End Quiz");
  LoadPage("Home");
}

function BuildScorePage() {
  //Show Form
  ToggleElement(scoreForm, true, "flex");
  ToggleElement(scoreSubmittedText, false);
  //Set answered number
  answeredNumber.textContent = answeredQuestion.length;
  //Set incorrect number
  console.log(incorrect);
  if (incorrect == 0) {
    incorrectNumber.textContent = "0";
    incorrectNumber.removeAttribute("style");
  } else {
    incorrectNumber.textContent = "-" + incorrect;
    incorrectNumber.setAttribute("style", "Color:red"); //TODO Change Color Value
  }
  //Set skipped number
  skippedNumber.textContent = skipped;
  if (skipped == 0) {
    skippedNumber.removeAttribute("style");
  } else {
    skippedNumber.setAttribute("style", "Color:yellow"); //TODO Change Color Value
  }
  //Calculate Score
  score = answer - incorrect;
  scoreNumber.textContent = score;
}

function BuildHighScoreDisplay() {
  highscores = GetData();

  if (highscores.length != 0) {
    //Sort the array in decending order by "score" property
    highscores.sort((a, b) => b.score - a.score);

    for (let i = 0; i < highscoreDisplays.length; i++) {
      if (i < highscores.length) {
        ToggleElement(highscoreDisplays[i], true);
        var s = `${i + 1}. ${highscores[i].name} : ${highscores[i].score}`;
        highscoreDisplays[i].textContent = s;
      } else {
        ToggleElement(highscoreDisplays[i], false);
      }
    }
  } else {
    highscoreDisplays.forEach((element) => {
      ToggleElement(element, false);
    });
    ToggleElement(highscoreDisplays[0], true);
    highscoreDisplays[0].textContent = "Take the Quiz and save your scores!";
  }
}
// === Timer ===
function StartTimer(time) {
  timer = time;
  timerText.textContent = TimerToString(timer);
  var tick = setInterval(function () {
    timer--;
    timerText.textContent = TimerToString(timer);
    if (timer <= 0) {
      console.log("Out of Time");
      EndTimer();
      clearInterval(tick);
    }
  }, 1000);
}

// TODO Stop Timer when someone exits the quiz
// Try isInQuiz bool inside tick interval?
function StopTimer() {
  timer = 0;
}
function EndTimer() {
  LoadPage("Score");
}

function SubmitHighscore(event) {
  event.preventDefault();

  //TODO Add Special characters validation
  //#region Name Validation
  if (nameInput.value.length > 50) {
    ShowMessage(
      "please insert a name shorter then 50 characters",
      "--darkColorShade1",
      "--alertYellowSoft",
      3000
    );
    nameInput.value = "";
    return;
  }
  if (nameInput.value == "") {
    ShowMessage(
      "please insert name to submit score",
      "--darkColorShade1",
      "--alertYellowSoft",
      3000
    );
    return;
  }
  //#endregion

  //Hide Form
  ToggleElement(scoreForm, false);
  ToggleElement(scoreSubmittedText, true);
  var name = nameInput.value;
  nameInput.value = "";
  var newHighscore = {
    name: name,
    score: score,
  };
  AddHighscore(newHighscore);
}
// === Database ===
function AddHighscore(newData) {
  highscores = GetData();
  highscores.push(newData);
  AddData(highscores);
}

function ClearHighscores() {
  ClearData();
  highscores = [];
  BuildHighScoreDisplay();
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
  var array = [];
  if (JSON.parse(data)) {
    return JSON.parse(data);
  } else {
    return array;
  }
}
function ToggleQuestionFooter(status) {
  if (status) {
    footerSocials.setAttribute("style", "display:none");
    footerLinks.setAttribute("style", "display:none");
    exitQuizButton.setAttribute("style", "display:block");
  } else {
    footerSocials.setAttribute("style", "display:flex");
    footerLinks.setAttribute("style", "display:flex");
    exitQuizButton.setAttribute("style", "display:none");
  }
}

// === Untility ===
function ShowMessage(text, color, background, time) {
  if (alert.style.display !== "none") {
    return;
  }
  ToggleElement(alert, true);
  alert.textContent = text;
  var textColor = GetCSSVariable(color);
  var backgroundColor = GetCSSVariable(background);
  alert.setAttribute(
    "style",
    `color:${textColor}; background-color:${backgroundColor}`
  );

  setTimeout(HideMessage, time);
}
function HideMessage() {
  ToggleElement(alert, false);
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
function ToggleElement(element, status, string) {
  if (status) {
    if (string) {
      element.setAttribute("style", `display: ${string}`);
    } else {
      element.setAttribute("style", `display: block`);
    }
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
function TimerToString(time) {
  var m = Math.floor(time / 60);
  var s = time % 60;
  if (m > 0) {
    return `${m}m ${s}s`;
  } else {
    return `${s}s`;
  }
}

function GetCSSVariable(variable) {
  var rs = getComputedStyle(root);
  return rs.getPropertyValue(variable);
}
//====================================================================================================//
//===========================================[ Events ]===============================================//
//====================================================================================================//
//Navigation
homeNav.forEach(function (element) {
  element.addEventListener("click", function () {
    LoadPage("Home");
  });
});
studyNav.forEach(function (element) {
  element.addEventListener("click", function () {
    LoadPage("Study");
  });
});
highscoresNav.forEach(function (element) {
  element.addEventListener("click", function () {
    LoadPage("Highscores");
  });
});
// Quiz Buttons
startQuizButton.addEventListener("click", StartQuiz);
exitQuizButton.addEventListener("click", ExitQuiz);
skipQuestionButton.addEventListener("click", SkipQuestion);

//Answers
answerButtons.forEach(function (element) {
  element.addEventListener("click", CheckAnswer);

  //Scores
  submitScoreButton.addEventListener("click", SubmitHighscore);
  playAgainButton.addEventListener("click", StartQuiz);
});

//====================================================================================================//
//===========================================[ Running Logic ]========================================//
//====================================================================================================//

LoadPage("Home");
// ToggleElement(messageBox, false);
// timerText.setAttribute("style", "visibility:hidden");
// LoadPage("landing");
