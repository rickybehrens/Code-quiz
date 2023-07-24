// write a function that can arrange the variables in an array by ResizeObserverSize
// organize them in decending order
// store the top 10 locally


// example: [30, 33, 70, 50, 60, 40, 20, 74, 68, 58]
// output: [74, 70, 68, 60, 58, 50, 40, 33, 30, 20]

// get score and initials from the submit button in the other .js file
// create an array with all the stored initials and time (probably concatinating the array)

// Variables
var highscoresArray = [30, 33, 47, 50, 60, 40, 20, 54, 48, 58]

// Define Functions
highscoresArray.sort(function(a,b){return b-a});
console.log(highscoresArray)

document.addEventListener('DOMContentLoaded', function() {
    var liElements = document.querySelectorAll('li');
    for (var i = 0; i < highscoresArray.length; i++) {
      liElements[i].textContent = highscoresArray[i];
    }
  });

// Special functions

// Business logic