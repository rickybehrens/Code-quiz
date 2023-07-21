// ## Pseudo Code
//  * Home page has the following:
//      ** "View Highscores" on the top left corner
//      ** "Time: 0" on the top right corner
//      ** Coding Quiz Challenge
//      ** Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scoretime by ten seconds!
//      ** "Start Quiz" button

//  * After the "Start Quiz" button is pressed, the following occurs:
//      ** Timer changes from "Time: 0" to "Time: 75" and it starts counting down
//      ** The first question appears with 4 multiple choice answers in button shape
//      ** The moment the mouse hovers ove the image, it changes color to a little bit lighter
//      ** When a "click" is made on the selected answer, the button gets a blue shade around it for 0.5 seconds
//          *** Timer should stop
//          *** If answer is correct, blue shade should turn green for 3 seconds
//          *** "Correct!" should apprear below all the multiple choice answers for 3 seconds
//          *** If asnwer is incorrect, blue shade should turn red and the correct answer's border should turn green for 3 seconds
//          *** "Wrong!" should appear below all the multiple choice answers for 3 seconds
//          *** Time in the timer should decrease by 10 seconds and it should turn red for 3 seconds
//      ** After the 3 seconds past, the new question should appear automatically
//      ** Timer should turn black again and continue with the count down
//  * After 5 questions, the following message appears:
//      ** All done!
//      ** Your final score is 22 (those are the seconds remaining)
//      ** Enter Initials: (foloowed by a field and a "Submit" button next to it)
//      ** When box is selected, the borders change to blue
//      ** When the mouse hovers on the button, it changes color to slightly lighter
//      ** When the button is clicked, the shaded borders on the field box turn back to normal color but the border on the button change to the same blue color
//      ** After the "click", the following message appears:
//          *** Highscores
//          *** Position, followed by initials, followed by score
//          *** Two buttons below everything, "Go Back" and "Clear Highscores"

// Variable
var startButton = document.getElementById('start-quiz');
var timerElement = document.getElementById('timerId');
var timeLeft = 0;
var timeInterval = "";
var questionsElement = document.getElementById('questions');
var containerElement = document.getElementById('container');

// Function Definitions

function changeContent() {
    containerElement.textContent = ""
    var title = document.createTextNode('h1')
    var ans01 = document.createElement('button');
    var ans02 = document.createElement('button');
    var ans03 = document.createElement('button');
    var ans04 = document.createElement('button');
    
    title.textContent = 'Which is the largest whale species?'
    ans01.textContent = "1. Blue Whale"
    ans02.textContent = "2. Humpback Whale"
    ans03.textContent = "3. Minke Whale"
    ans04.textContent = "4. Sperm Whale"
    
    questionsElement.appendChild(title);
    questionsElement.appendChild(ans01);
    questionsElement.appendChild(ans02);
    questionsElement.appendChild(ans03);
    questionsElement.appendChild(ans04);
    
    questionsElement.children[0].setAttribute("style", "color:blue");
    questionsElement.children[1].setAttribute("style", "color:red");
    questionsElement.children[2].setAttribute("style", "color:orange");
    questionsElement.children[3].setAttribute("style", "color:pink");
    
}

function countdown() {
    timeLeft = 75
    timerElement.textContent = 'Time: ' + timeLeft
    clearInterval(timeInterval);

    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerElement.textContent = 'Time: ' + timeLeft--
        } else {
            timerElement.textContent = 'Time: 0'
        }
    }, 100);
}


// Special Functions (like eventlisteners)

startButton.addEventListener("click", function () {
    countdown();
    changeContent();
});

// Business Logic (anything that can start the applications)


