const questions = [
    {
      question: "Which symbol is used for comments in JavaScript?",
      choices: ["--", "/* */","//", "#", ],
      correctAnswer: "//"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      choices: 
        ["var","let", "const", "variable"],
        correctAnswer: "var"
    },
    {
      question: "What does the 'DOM' stand for?",
      choices: [ "Data Object Model", "Document Oriented Model", "Data Oriented Model","Document Object Model"],
      correctAnswer: "Document Object Model"
    },
    {
      question: "What is the result of 5 + '5' in JavaScript?",
      choices: ["10","55","5","Error",],
      correctAnswer: "55"
    },
   
  ];
  
  

  

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start");
    const timeElement = document.getElementById("time");
    const questionTitleElement = document.getElementById("question-title");
    const choicesElement = document.getElementById("choices");
    const endScreenElement = document.getElementById("end-screen");
    const finalScoreElement = document.getElementById("final-score");
    const initialsInput = document.getElementById("initials");
    const submitButton = document.getElementById("submit");
  
    let currentQuestionIndex = 0;
    let timer;
    let timeLeft = 60; 
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    startButton.addEventListener("click", startQuiz);
    submitButton.addEventListener("click", saveScore);
  
    function startQuiz() {
      startButton.style.display = "none";
      document.getElementById("start-screen").classList.add("hide");
      document.getElementById("questions").classList.remove("hide");
  
      // Start the timer
      timer = setInterval(function () {
        timeLeft--;
        timeElement.textContent = timeLeft;
  
        if (timeLeft <= 0 || currentQuestionIndex === questions.length) {
          endQuiz();
        }
      }, 1000);
  
      showQuestion();
    }
  
    function showQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionTitleElement.textContent = currentQuestion.question;
      choicesElement.innerHTML = "";
  
      currentQuestion.choices.forEach(function (choice) {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", function () {
          checkAnswer(choice === currentQuestion.correctAnswer);
        });
        choicesElement.appendChild(button);
      });
    }
  
    function checkAnswer(isCorrect) {
      if (!isCorrect) {
        timeLeft -= 10; // Penalty for incorrect answer
      }
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        endQuiz();
      }
    }
  
    function endQuiz() {
      clearInterval(timer);
      document.getElementById("questions").classList.add("hide");
      endScreenElement.classList.remove("hide");
      finalScoreElement.textContent = timeLeft;
    }
  
    function saveScore() {
      const initials = initialsInput.value.trim();
  
      if (initials !== "") {
        const score = { initials, score: timeLeft };
        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score); // scores in descending order
        highScores = highScores.slice(0, 5); // only the top 5 scores stores
  
        // Save high scores to localStorage
        localStorage.setItem("highScores", JSON.stringify(highScores));
  
        // Redirect to highscores page
        window.location.href = "highscores.html";
      }
    }
  });
  