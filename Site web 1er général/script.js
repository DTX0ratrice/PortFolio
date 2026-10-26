const questions = [
    {
        question: "Qu'est-ce que le binaire ?",
        answers: [
            {text: "Un système de numération utilisant la base 2", correct: true},
            {text: "Une boîte de Chocapic", correct: false},
            {text: "Un système d'exploitation", correct: false},
            {text: "Un language informatique", correct: false},
        ]
    },
    {
        question: "Qu'est-ce qu'un Algorithme",
        answers: [
            {text: "Une suite d'instruction qui répond à des questions", correct: false},
            {text: "une suite désordonner d'instruction à suivre", correct: false},
            {text: "Une suite d'instruction ordonnée à suivre", correct: true},
            {text: "Un programme informatique", correct: false},
        ]

    },
    {
        question: "Une chaîne de caractères est-elle mutable ?",
        answers: [
            {text: "Oui", correct: false},
            {text: "Sa dépend du programme", correct: false},
            {text: "Je ne sais pas", correct: false},
            {text: "Non", correct: true},
        ]
    }, 
    {
        question: "Une chaîne de caractères est-elle itérables ?",
        answers: [
            {text: "Non", correct: false},
            {text: "Oui", correct: true},
            {text: "Peut-être", correct: false},
            {text: "Je ne sais pas", correct: false},
        ]
    },
    {
        question: "Qu'est-ce qu'un tuple ?",
        answers: [
            {text: "Une donnée", correct: false},
            {text: "Une sous-liste", correct: false},
            {text: "Une parabole", correct: false},
            {text: "Une liste", correct: true},
        ]
    },
    {
        question: "Un tuple est-il concaténables ?",
        answers: [
            {text: "Oui", correct: true},
            {text: "oui mais seulement dans certains cas", correct: false},
            {text: "non", correct: false},
            {text: "seulement divisé en deux", correct: false},
        ]
    },
    {
        question: "Qu'est-ce qu'un programme ?",
        answers: [
            {text: "Du détergeant", correct: false},
            {text: "Une application", correct: false},
            {text: "Un algorithme traduit dans un langage de programmation", correct: true},
            {text: "Un algorithme", correct: false},
        ]
    },
    {
        question: "Qu'est-ce qu'un teste booléens ?",
        answers: [
            {text: "Un vrai ou faux", correct: true},
            {text: "Un teste d'égaliter", correct: false},
            {text: "Un teste d'appartenance", correct: false},
            {text: "Une différence", correct: false},
        ]
    },
    {
        question: "Qu'est-ce qu'un nombre flotant ?",
        answers: [
            {text: "Un nombre qui flotte sur l'eau", correct: false},
            {text: "Un nombre entier", correct: false},
            {text: "Un nombre décimal", correct: true},
            {text: "Un nombre booléen", correct: false},
        ]
    },
    {
        question: "Qu'est-ce qu'un réseau informatique ?",
        answers: [
            {text: "La fibre optique ", correct: false},
            {text: "Le wifi ", correct: false},
            {text: "L'internet ", correct: false},
            {text: "Un ensemble de machines/équipements reliés entre eux", correct: true},
        ]
    },
    {
        question: "Un octets est codée sur combien de bits ?",
        answers: [
            {text: "16 bits", correct: false},
            {text: "8 bits", correct: true},
            {text: "64 bits", correct: false},
            {text: "32 bits", correct: false},
        ]
    },
    {
        question: "Qu'est-ce qu'un index ?",
        answers: [
            {text: "Un outil facilitant la recherche d'information", correct: true},
            {text: "Une thématique", correct: false},
            {text: "Une page d'acceuil", correct: false},
            {text: "Du code", correct: false},
        ]
    },
    {
        question: "En quel année est sortie le transistor ?",
        answers: [
            {text: "1750", correct: false},
            {text: "1890", correct: false},
            {text: "1947", correct: true},
            {text: "1950", correct: false},
        ]
    },
    {
        question: "Quel est le nom du première ordinateur familiale en France ?",
        answers: [
            {text: "Le ZX 82", correct: false},
            {text: "Le ZX 81", correct: true},
            {text: "Le NZXT 81", correct: false},
            {text: "L'ENIAC", correct: false},
        ]
    },
    {
        question: "Quel est sa capacité de mémoire ?",
        answers: [
            {text: "500 Mo", correct: false},
            {text: "1 Go", correct: false},
            {text: "1 Mo", correct: false},
            {text: "1 ko", correct: true},
        ]
    },
    {
        question: "Qui à conçu le premier compilateur ?",
        answers: [
            {text: "Von Neumann", correct: false},
            {text: "Eckert", correct: false},
            {text: "Grace Hopper", correct: true},
            {text: "MLK", correct: false},
        ]
    },
    {
        question: "De quand date la première version de python ?",
        answers: [
            {text: "1991", correct: true},
            {text: "1995", correct: false},
            {text: "1985", correct: false},
            {text: "1990", correct: false},
        ]
    },
    {
        question: "Quand à été commercialisée l'Apple II ?",
        answers: [
            {text: "1977", correct: true},
            {text: "1981", correct: false},
            {text: "1982", correct: false},
            {text: "1958", correct: false},
        ]
    },
    {
        question: "Quelle à été le tout premier ordinateur ?",
        answers: [
            {text: "Le JB700", correct: false},
            {text: "Le Z3", correct: true},
            {text: "Le S", correct: false},
            {text: "Le Elwood", correct: false},
        ]
    },
    {
        question: "Quand à été crée le programme C ?",
        answers: [
            {text: "En 1983", correct: false},
            {text: "En 1883", correct: false},
            {text: "En 1995", correct: false},
            {text: "En 1972", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer_buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function animateProgressBar(progressBar, duration) {
    let progress = 0;
    const increment = 5 / duration * 100; // Adjust the increment value for desired smoothness
  
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
        progress += increment + 5}else{
            progress = 0
        };
        if (progress >= 100) {
            clearInterval(interval)};
      progressBar.style.width = `${progress}%`;
    }, 10); // Adjust the interval duration for desired speed
  }
  
  const progressBar = document.querySelector('.progress');
  animateProgressBar(progressBar, 2000); // Example: animates to 30% in 2 seconds

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Ton score ${score} sur ${questions.length}!`;
    nextButton.innerHTML = "Rejouer";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
