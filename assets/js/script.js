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
var scores = document.getElementById('topScores')

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
var questions = [
    {
        title: 'Question #1: What is the largest whale species?',
        choices: ['Blue Whale', 'Fin Whale', 'Minke Whale', 'Sperm Whale'],
        answer: 'Blue Whale',
    },
    {
        title: 'Question #2: What is the fastest whale species?',
        choices: ['Minke Whale', 'Sei Whale', 'Cuviers Beaked Whale', 'Beluga Whale'],
        answer: 'Sei Whale',
    },
    {
        title: 'Question #3: What whale species can dive the deepest?',
        choices: ['Sperm Whale', 'Narwhal', 'Sei Whale', 'Cuviers Beaked Whale'],
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
questions.forEach(question => {
    shuffleArray(question.choices);
});

// Function Definitions

function changeContent() {
    if (index >= questions.length) {
        endQuiz();
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
                index++
                questionsElement.textContent = ""
                changeContent()
                if (index < questions.length) {
                    countdown(timeLeft)
                }
            }, 2000)
        }

        function correct() {
            rightWrong.textContent = "Correct!!!"
            rightWrong.setAttribute("style", "border-top:grey 2px solid; padding-top:20px; margin:20px 0px 0px 300px; width:50%")
                ;
            clearInterval(timeInterval);
            correctSound.play()
        }

        function incorrect() {
            rightWrong.textContent = "Incorrect!!!"
            rightWrong.setAttribute("style", "border-top:grey 2px solid; padding-top:20px; margin:20px 0px 0px 300px; width:50%")
                ;
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
                correct();
            } else {
                ans04.setAttribute("style", "border:red solid 3px;");
                questionsElement.children[4].setAttribute("style", "border:red solid 3px;")
                incorrect();
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
            alert('Game Over!!! Time is Up!!!');
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
        var initials = entInitials.value.trim();
        if (initials !== "") {
            // Save the final score and initials to local storage
            var highscoresArray = JSON.parse(localStorage.getItem("highscores")) || [];
            highscoresArray.push({ score: timeLeft, initials: initials });
            localStorage.setItem("highscores", JSON.stringify(highscoresArray));

            // Navigate to highscores.html
            window.location.href = "./highscores.html";
        } else {
            alert("Please enter your initials.");
        }
    });
}

startButton.addEventListener("click", function () {
    countdown(75);
    changeContent();
    action();
});
