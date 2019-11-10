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
        answer: [
            "Bart Simpson.",
            "Stimpy.",
            "Portal Gun",
            "They Coyote."
        ],
        answer1: "C-137",
        answer2: "C-119",
        answer3: "C-147",
        answer4: "Andromeda",
        correctAnswer: 2
    },
    {
        title: "What's the name of this happy-go-lucky blue colored creature?",
        answer1: "Squanchy",
        answer2: "Beth",
        answer3: "Stimpy",
        answer4: "Mr. Meeseeks",
        correctAnswer: 4
    }
];

//start quiz, when clicking the start btn

let startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', startQuiz);

function startQuiz(event) {
    event.preventDefault();
    let mainScreen = document.querySelector('.start');
    mainScreen.style.display = "none";
    let quesScreen = document.querySelector('.question-form');
    quesScreen.classList.add('open');
    questionNumber++;
    showQuestion();
}

//Show Question 
let questions = document.querySelector('.question');
let currentQuestion = {};

function showQuestion() {
    let question = Math.floor(Math.random() * quiz.length);
    currentQuestion = quiz[question];
    questions.innerText = currentQuestion.title;
    showAnswers();

    quiz.splice(question, 1);
    acceptAns = true;
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

choices.forEach(choice => {
    choice.addEventListener('click', event => {
        if (!acceptAns) {
            return;
        }
        
        acceptAns = false;
        let selectedChoice = event.target;

        let selectedAns = selectedChoice.dataset["number"];
        console.log(selectedAns);

        showQuestion();
    });

});

function showSummary(){

}