let score = 0;
let questionNumber = 0;
let acceptAns = false;


let quiz = [{
        title: "Who is Rick’s grandson?",
        answer1: "Morty",
        answer2: "Bart Simpson",
        answer3: "Stimpy",
        answer4: "Marty",
        correctAnswer: 1

    },
    {
        title: "What is the main rick and morty dimension?",
        answer1: "C-137",
        answer2: "C-119",
        answer3: "C-147",
        answer4: "Andromeda",
        correctAnswer: 1
    },
    {
        title: "Who is Beth?",
        answer1: "Rick's sister",
        answer2: "Stimpy's cousin",
        answer3: "Rick's daughter",
        answer4: "The dog",
        correctAnswer: 3
    },
    {
        title: "What is the name of Jerrys favorite Rick?",
        answer1: "Rick G-506",
        answer2: "Regular Rick",
        answer3: "Morty Rick",
        answer4: "Doofus Rick",
        correctAnswer: 4
    },
    {
        title: "what are schemekles?",
        answer1: "Alien people",
        answer2: "Ricks gun",
        answer3: "A currency",
        answer4: "Andromeda",
        correctAnswer: 3
    },
    {
        title: "Which one is not one of Ricks catch phrases?",
        answer1: "Wubba Lubba Dub Dub",
        answer2: "I love my grandkids",
        answer3: "Get schifty ",
        answer4: "im in me mums car",
        correctAnswer: 4
    },
    {
        title: "Who is morty’s sister?",
        answer1: "Summer",
        answer2: "Dee-Dee",
        answer3: "Angela",
        answer4: "Bart",
        correctAnswer: 1
    },
    {
        title: "What is ricks last name?",
        answer1: "Simpson",
        answer2: "Gonzelez",
        answer3: "Sanez",
        answer4: "Sanchez",
        correctAnswer: 4
    },
    {
        title: "What item helps Rick travel between universes?",
        answer1: "Portal gun",
        answer2: "Concentrated dark matter",
        answer3: "Plumbus",
        answer4: "Andromeda",
        correctAnswer: 1
    },
    {
        title: "What's the name of this happy-go-lucky blue colored creature?",
        answer1: "Squanchy",
        answer2: "Dexter",
        answer3: "Plumbus",
        answer4: "Mr. Meeseeks",
        correctAnswer: 4
    },
    {
        title: "What does Beth Smith do for a living?",
        answer1: "Horse heart surgery",
        answer2: "stay at home mom",
        answer3: "store clerk",
        answer4: "office job",
        correctAnswer: 1
    }

];

//start quiz, when clicking the start btn
let startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', startQuiz);
let sumScreen = document.querySelector(".summaryScreen");
let quesScreen = document.querySelector('.question-form');
let mainScreen = document.querySelector('.start');
    
function startQuiz(event) {
    event.preventDefault();
    mainScreen.style.display = "none";

    quesScreen.classList.add('open');
    showQuestion();
}

//Show Question 
let questions = document.querySelector('.question');
let currentQuestion = {};
let quesP = document.querySelector('.q-num');
let scoreEl = document.querySelector('.score');
let finalScore = document.querySelector('.final-score');

function showQuestion() {
    let question = Math.floor(Math.random() * quiz.length);
    currentQuestion = quiz[question];
    questions.innerText = currentQuestion.title;
    showAnswers();
    questionNumber++;
    quiz.splice(question, 1);
    acceptAns = true;
    quesP.innerText = `Question: ${questionNumber}`;
    scoreEl.innerText = `Score: ${score}%`;

    if (questionNumber === 11) {
        sumScreen.classList.add('open');
        quesScreen.style.display = 'none';
        finalScore.innerText = `You've scored ${score}%`;
    }
}

//show questions
let choices = document.querySelectorAll('.text');
console.log(choices);

function showAnswers() {

    choices.forEach(choice => {
        let quesNum = choice.dataset["number"];
        choice.innerText = currentQuestion["answer" + quesNum];
    });


}

//answer choices, correct and incorrect
choices.forEach(choice => {
    choice.addEventListener('click', event => {
        if (!acceptAns) {
            return;
        }

        acceptAns = false;
        let selectedChoice = event.target;

        let selectedAns = selectedChoice.dataset["number"];

        const isCorrect = selectedAns == currentQuestion.correctAnswer ? "correct" : "incorrect";
        selectedChoice.parentElement.classList.add(isCorrect);

        if (isCorrect === "correct") {
            incrementScore();
        }

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(isCorrect);
            showQuestion();
        }, 1000);

    });

});

//score 
function incrementScore() {
    score += 10;
}

//restart quiz
let restartBtn = document.querySelector('.restart-btn');
restartBtn.addEventListener("click", restart);

function restart(event) {
    document.location.reload();
}

