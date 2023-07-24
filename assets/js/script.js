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
//      ** Enter Initials: (followed by a field and a "Submit" button next to it)
//      ** When box is selected, the borders change to blue
//      ** When the mouse hovers on the button, it changes color to slightly lighter
//      ** When the button is clicked, the shaded borders on the field box turn back to normal color but the border on the button change to the same blue color
//      ** After the "click", the following message appears:
//          *** Highscores
//          *** Position, followed by initials, followed by score
//          *** Two buttons below everything, "Go Back" and "Clear Highscores"

// Variable
var body = document.body;
var startButton = document.getElementById('start-quiz');
var timerElement = document.getElementById('timerId');
var timeLeft = 0;
var timeInterval = "";
var questionsElement = document.getElementById('questions');
var containerElement = document.getElementById('container');
var answerElement = document.getElementById('answer');
var ansButton = document.createElement("button");
ansButton.textContent = "Submit";
var entInitials = document.createElement("input")
entInitials.textContent = "Enter Initials"
var highscoresLink = document.getElementById('highscores');
var index = 0;
var rightWrong = document.getElementById('answer');
var questions = [
    {
        title: 'Question #1: What is the largest whale species?',
        choices: ['Blue Whale', 'Humpback Whale', 'Minke Whale', 'Sperm Whale'],
        answer: 'Blue Whale',
    },
    {
        title: 'Question #2: What is the fastest whale species?',
        choices: ['Minke Whale', 'Sei Whale', 'Cuviers Beaked Whale', 'Sperm Whale'],
        answer: 'Sei Whale',
    },
    {
        title: 'Question #3: What whale species can dive the deepest?',
        choices: ['Sperm Whale', 'Humpback Whale', 'Sei Whale', 'Cuviers Beaked Whale'],
        answer: 'Cuviers Beaked Whale',
    },
    {
        title: 'Question #4: What species of whale lives the longest?',
        choices: ['Blue Whale', 'Bowhead Whale', 'Humpback Whale', 'Fin Whale'],
        answer: 'Bowhead Whale',
    },
    {
        title: 'Question #5: What is the only species of whale with a tooth outside its mouth?',
        choices: ['Beluga Whale', 'Humpback Whale', 'Narwhal', 'Bowhead Whale'],
        answer: 'Narwhal',
    },
]

// Function Definitions

function changeContent() {
    if (index >= questions.length) {
        endQuiz()
    } else {
        containerElement.textContent = ""
        var title = document.createElement('h1')
        var que01 = document.createElement('button');
        var que02 = document.createElement('button');
        var que03 = document.createElement('button');
        var que04 = document.createElement('button');
        answerElement.textContent = ""

        title.textContent = questions[index].title
        que01.textContent = questions[index].choices[0]
        que02.textContent = questions[index].choices[1]
        que03.textContent = questions[index].choices[2]
        que04.textContent = questions[index].choices[3]

        questionsElement.appendChild(title);
        questionsElement.appendChild(que01);
        questionsElement.appendChild(que02);
        questionsElement.appendChild(que03);
        questionsElement.appendChild(que04);

        var ans = questions[index].answer
        var ans01 = questionsElement.children[1]
        var ans02 = questionsElement.children[2]
        var ans03 = questionsElement.children[3]
        var ans04 = questionsElement.children[4]
        var correctSound = document.getElementById('correct')
        var incorrectSound = document.getElementById('incorrect');

        function hold() {
            setTimeout(function () {
                questionsElement.textContent = ""
                index++
                changeContent()
                countdown(timeLeft)
            }, 2000)
        }

        function correct() {
            rightWrong.textContent = "Correct!!!"
            rightWrong.setAttribute("style", "border-top:grey 2px solid; padding-top:20px; margin:20px 0px 0px 300px; width:50%")
            clearInterval(timeInterval);
            correctSound.play()
        }

        function incorrect() {
            rightWrong.textContent = "Incorrect!!!"
            rightWrong.setAttribute("style", "border-top:grey 2px solid; padding-top:20px; margin:20px 0px 0px 300px; width:50%")
            clearInterval(timeInterval);
            incorrectSound.play()
            timeLeft = timeLeft - 15;
            timerElement.textContent = 'Time: ' + timeLeft;
        }

        que01.addEventListener("click", function () {
            hold()
            if (questions[index].choices[0] === ans) {
                ans01.setAttribute("style", "border:#28ff06 solid 3px;");
                correct()
            } else {
                ans01.setAttribute("style", "border:red solid 3px;");
                questionsElement.children[1].setAttribute("style", "border:red solid 3px;")
                incorrect()
            }
        });
        que02.addEventListener("click", function () {
            hold()
            if (questions[index].choices[1] === ans) {
                ans02.setAttribute("style", "border:#28ff06 solid 3px;");
                correct()
            } else {
                ans02.setAttribute("style", "border:red solid 3px;");
                questionsElement.children[2].setAttribute("style", "border:red solid 3px;")
                incorrect()
            }
        });
        que03.addEventListener("click", function () {
            hold()
            if (questions[index].choices[2] === ans) {
                ans03.setAttribute("style", "border:#28ff06 solid 3px;");
                correct()
            } else {
                ans03.setAttribute("style", "border:red solid 3px;");
                questionsElement.children[3].setAttribute("style", "border:red solid 3px;")
                incorrect()
            }
        });
        que04.addEventListener("click", function () {
            hold()
            if (questions[index].choices[3] === ans) {
                ans04.setAttribute("style", "border:#28ff06 solid 3px;");
                correct()
            } else {
                ans04.setAttribute("style", "border:red solid 3px;");
                questionsElement.children[4].setAttribute("style", "border:red solid 3px;")
                incorrect()
            }
        });
    }
}

var hidden = false;
function action() {
    hidden = !hidden;
    if (hidden) {
        document.getElementById('highscores').style.visibility = 'hidden';
    } else {
        document.getElementById('highscores').style.visibility = 'visible';
    }
}

function countdown(initialTime) {
    timeLeft = initialTime
    timerElement.textContent = 'Time: ' + timeLeft

    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerElement.textContent = 'Time: ' + timeLeft--
        } else {
            timerElement.textContent = 'Time: 0'
            alert('Game Over!!!')
            clearInterval(timeInterval)
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timeInterval)
    containerElement.textContent = "All Done!!!"
    questionsElement.textContent = "Your final score is: " + timeLeft
    rightWrong.textContent = ""
    body.appendChild(entInitials)
    entInitials.setAttribute("style", "margin-left:300px; font-size:20px")
    body.appendChild(ansButton)
    ansButton.setAttribute("style", "margin-left:100px; border-radius:20px; background-color:green")
    ansButton.addEventListener("click", function () {
        var initials = entInitials.value.trim(); // Get the initials entered by the user
        if (initials === "") {
            alert("Please enter your initials before submitting.");
            return;
        }

        // Store the time left and initials in an object
        var scoreEntry = { initials: initials, score: timeLeft };

        // Retrieve the existing highscoresArray from localStorage or create an empty array
        var existingHighscores = localStorage.getItem("highscoresArray");
        var highscoresArray = existingHighscores ? JSON.parse(existingHighscores) : [];

        // Add the new score entry to the highscoresArray
        highscoresArray.push(scoreEntry);

        // Sort the highscoresArray based on scores (highest first)
        highscoresArray.sort(function (a, b) {
            return b.score - a.score;
        });

        // Store the updated highscoresArray in localStorage
        localStorage.setItem("highscoresArray", JSON.stringify(highscoresArray));

        // Redirect to the highscores page
        window.location.href = "highscores.html";
    });

    // function submit() {
    //     document.getElementById("submit").setAttribute("type", "button");
    //     // Once initial have been input and "submit" button clicked, the information should be stored locally and added to the "highscoresArray"
    //     // I need to make this button dissapear from the begining and appear only after the game has ended
    //     // After the "submit" button is clicked, it takes you inmediatelly to the highscore page
    //     // If time runs out and the game is over that way, the highscores link should be visible
    // }

}
// Special Functions (like eventlisteners)

startButton.addEventListener("click", function () {
    countdown(75);
    changeContent();
    action();
});

// Business Logic (anything that can start the applications)
