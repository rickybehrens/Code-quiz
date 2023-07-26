// Variables
var highscoresArray = []

// Define Functions
document.addEventListener('DOMContentLoaded', function () {
  var topScores = document.getElementById('topScores');
  var highscoresArray = JSON.parse(localStorage.getItem("highscores")) || [];

  // Sort the highscoresArray in descending order by score
  highscoresArray.sort(function (a, b) {
      return b.score - a.score;
  });

  // Display the top 10 high scores in the ol element
  for (var i = 0; i < Math.min(10, highscoresArray.length); i++) {
      var li = document.createElement("li");
      li.textContent = highscoresArray[i].initials + " - " + highscoresArray[i].score;
      topScores.appendChild(li);
  }
});

// Clears the local memory and therefore all the previous highscores
function clearHighscores() {
  if (confirm("Are you sure you would like to permanently clear all highscores?")) {
    localStorage.removeItem("highscores");
    var topScores = document.getElementById('topScores');
    topScores.innerHTML = "";
  } else {
    return;
  }
}
// Special functions

// Business logic