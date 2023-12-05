document.addEventListener("DOMContentLoaded", function () {
    const highscoresList = document.getElementById("highscores");
    const clearButton = document.getElementById("clear");
  
    clearButton.addEventListener("click", clearHighscores);
  
    function displayHighscores() {
       
        const highscores = getHighscores();
  
        // Clear previous highscores
        highscoresList.innerHTML = "";
  
        // Display highscores
        highscores.forEach((score, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${score.initials} - ${score.score}`;
            highscoresList.appendChild(listItem);
        });
    }
  
    function clearHighscores() {
        // Clear highscores from local storage
        localStorage.removeItem("highScores"); 
        displayHighscores();
    }
  
    function getHighscores() {
       
        return JSON.parse(localStorage.getItem("highScores")) || [];
    }
    
  
    
    displayHighscores();
  });
  