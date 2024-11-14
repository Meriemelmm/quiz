// quiz.js

// Récupérer les informations de la catégorie et du niveau depuis le localStorage
const selectedCategory = localStorage.getItem('selectedCategory');
const selectedLevel = localStorage.getItem('selectedLevel');

// Exemple de questions avec différents types
const questions = [
    // Question à choix multiples (QCM)
    {
        category: "HTML",
        level: "easy",
        type: "multiple-choice",
        question: "What does HTML stand for?",
        answers: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Markup Language", "None of the above"],
        correctAnswer: 0
    },

    // Question Vrai/Faux
    {
        category: "CSS",
        level: "medium",
        type: "true-false",
        question: "CSS is used for styling web pages.",
        answers: ["True", "False"],
        correctAnswer: 0  // True
    },

    // Question textuelle
    {
        category: "JavaScript",
        level: "hard",
        type: "textual",
        question: "What is the purpose of the 'return' statement in JavaScript?",
        correctAnswer: "The 'return' statement exits a function and returns a value."
    }
    // Ajoute ici d'autres questions si nécessaire
];

// Filtrer les questions selon la catégorie et le niveau choisis
const filteredQuestions = questions.filter(q => q.category === selectedCategory && q.level === selectedLevel);

// Variables pour gérer le quiz
let currentIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answerButtons = [
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3'),
    document.getElementById('answer4')
];
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const enterInput = document.getElementById('enter');

// Afficher la question actuelle
function showQuestion() {
    const currentQuestion = filteredQuestions[currentIndex];
    questionElement.innerText = currentQuestion.question;

    // Effacer la rétroaction précédente
    answerButtons.forEach(button => {
        button.style.display = "none";
        button.disabled = false;
        button.style.backgroundColor = "";
    });

    // Masquer le champ de texte d'entrée et le bouton "Next"
    enterInput.style.display = "none";
    nextButton.style.display = "none";

    // Afficher les boutons en fonction du type de question
    if (currentQuestion.type === "multiple-choice") {
        // Afficher les boutons de QCM
        answerButtons.forEach((button, index) => {
            if (currentQuestion.answers[index]) {
                button.style.display = "block";
                button.innerText = currentQuestion.answers[index];
                button.onclick = () => checkAnswer(index);
            }
        });
    } else if (currentQuestion.type === "true-false") {
        // Afficher les boutons Vrai/Faux
        answerButtons[0].style.display = "block";
        answerButtons[1].style.display = "block";
        answerButtons[0].innerText = currentQuestion.answers[0];
        answerButtons[1].innerText = currentQuestion.answers[1];
        answerButtons[0].onclick = () => checkAnswer(0); // True
        answerButtons[1].onclick = () => checkAnswer(1); // False
    } else if (currentQuestion.type === "textual") {
        // Afficher l'input pour la réponse textuelle
        enterInput.style.display = "block";
        submitButton.style.display = "block";
        submitButton.onclick = checkTextualAnswer;
    }
}

// Vérifier la réponse pour une question à choix multiples ou Vrai/Faux
function checkAnswer(selectedIndex) {
    const currentQuestion = filteredQuestions[currentIndex];

    // Désactiver les boutons après une réponse
    answerButtons.forEach(button => button.disabled = true);

    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        scoreElement.innerText = score;
    }

    // Afficher la rétroaction et le bouton suivant
    nextButton.style.display = "block";
}

// Vérifier la réponse pour une question textuelle
function checkTextualAnswer() {
    const currentQuestion = filteredQuestions[currentIndex];
    const userAnswer = enterInput.value.trim();

    if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
        score++;
        scoreElement.innerText = score;
        alert("Correct!");
    } else {
        alert(`Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`);
    }

    // Passer à la question suivante
    nextButton.style.display = "block";
}

// Passer à la question suivante
function nextQuestion() {
    currentIndex++;
    if (currentIndex < filteredQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Afficher les résultats
function showResults() {
    questionElement.innerText = `Quiz Complete! Your score is ${score} out of ${filteredQuestions.length}`;
    answerButtons.forEach(button => button.style.display = 'none');  // Cacher les boutons
}

// Initialiser le quiz
showQuestion();
nextButton.addEventListener('click', nextQuestion);
