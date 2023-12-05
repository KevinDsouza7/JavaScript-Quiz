document.addEventListener("DOMContentLoaded", function () {
    const highscoresList = document.getElementById("highscores");
    const clearButton = document.getElementById("clear");
  
    clearButton.addEventListener("click", clearHighscores);
  
    function displayHighscores() {
        // Retrieve highscores from local storage or any other storage mechanism
        const highscores = getHighscores();
  
        // Clear previous highscores
        highscoresList.innerHTML = "";
  
        // Display highscores
        highscores.forEach((score, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
            highscoresList.appendChild(listItem);
        });
    }
  
    function clearHighscores() {
        // Clear highscores from local storage
        localStorage.removeItem("highScores"); 
        // Update the display
        displayHighscores();
    }
  
    function getHighscores() {
        // Retrieve highscores from local storage 
        return JSON.parse(localStorage.getItem("highScores"));
    }
  
    
    displayHighscores();
  });
  