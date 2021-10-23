let randomNumber = getRandomNumber(1, 1000);




function checkAnswer() {

    console.log("buttion is clicked");
    let userAnswer = getInput("answer");
    userAnswer - parseInt(userAnswer)

    if (userAnswer > randomNumber) {
        printOutput("output", "Guess lower!");
    }
    else if (userAnswer < randomNumber) {
        printOutput("output", "Guess higher!");
    }
    else if (userAnswer === randomNumber) {
        printOutput("output", "GOOD JOB YOUR SPOT ON!")
        randomNumber = getRandomNumber(1, 1000);
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



//INPUT OUTPUT FUNCTIONS
function getInput(id) {
    return document.getElementById(id).value;
}

function printOutput(id, text) {
    document.getElementById(id).innerHTML = text;
}