
var questions = require('./questions');
var highScores = require('./highscores');


// Define variables
var timer;
var timeLeft;
var currentQuestionIndex = 0;
var score = 0;

// DOM elements
var startButton = document.getElementById("start");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
var timeDisplay = document.getElementById("time");
var feedbackDiv = document.getElementById("feedback");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var endScreen = document.getElementById("end-screen");
var startScreen = document.getElementById("start-screen");
var questionsDiv = document.getElementById("questions");

startButton.addEventListener('click', startQuiz);
choicesContainer.addEventListener('click', handleAnswerClick);
submitButton.addEventListener('click', saveAndShowHighScores);

function startQuiz() {
    startScreen.classList.add('hide');
    questionsContainer.classList.remove('hide');
    // Start the timer
    startTimer();
    // Display the first question
    showQuestion();
  }