// write a function that can arrange the variables in an array by ResizeObserverSize
// organize them in decending order
// store the top 10 locally


// example: [30, 33, 70, 50, 60, 40, 20, 74, 68, 58]
// output: [74, 70, 68, 60, 58, 50, 40, 33, 30, 20]

// get score and initials from the submit button in the other .js file
// create an array with all the stored initials and time (probably concatinating the array)

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

function clearHighscores() {
  localStorage.removeItem("highscores");
  var topScores = document.getElementById('topScores');
  topScores.innerHTML = "";
}
// Special functions

// Business logic