
// function getQuestions() {
//     let myRequest = new XMLHttpRequest();
  
//     myRequest.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         let questionsObject = JSON.parse(this.responseText);
//         let qCount = questionsObject.length;
  
//         // Create Bullets + Set Questions Count
//         createBullets(qCount);
  
//         // Add Question Data
//         addQuestionData(questionsObject[currentIndex], qCount);
  
//         // Start CountDown
//         countdown(3, qCount);
  
//         // Click On Submit
//         submitButton.onclick = () => {
//           // Get Right Answer
//           let theRightAnswer = questionsObject[currentIndex].right_answer;
  
//           // Increase Index
//           currentIndex++;
  
//           // Check The Answer
//           checkAnswer(theRightAnswer, qCount);
  
//           // Remove Previous Question
//           quizArea.innerHTML = "";
//           answersArea.innerHTML = "";
  
//           // Add Question Data
//           addQuestionData(questionsObject[currentIndex], qCount);
  
//           // Handle Bullets Class
//           handleBullets();
  
//           // Start CountDown
//           clearInterval(countdownInterval);
//           countdown(3, qCount);
  
//           // Show Results
//           showResults(qCount);
//         };
//       }
//     };
  
//     myRequest.open("GET", "html_questions.json", true);
//     myRequest.send();
//   }
//   getQuestions();
// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('question-container')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')
// startButton.addEventListener('click',startgame);
// function startgame(){

 
//     startButton.classList.add('hide');
//     questionContainerElement.classList.remove('hide');
//     shuffledQuestions=questions.sort(()=>Math.random()-.5);
//     currentQuestionIndex=0;
//     setNextQuestion()
// }
// function setNextQuestion(){
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// }
// const questions=[
//     {question:'what is 2+3',
//         answers:[{text:'4',correct:true},
//             {text:'22',correct:false}
//         ]
//     },

// ]
// function showQuestion(question) {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//       const button = document.createElement('button')
//       button.innerText = answer.text
//       button.classList.add('btn')
//       if (answer.correct) {
//         button.dataset.correct = answer.correct
//       }
//       button.addEventListener('click', selectAnswer)
//       answerButtonsElement.appendChild(button)
//     })
//   }
// const questions=[{question:"whish is larger animal in the word",
//     answers:[
//         {text:"shark",correct:false},
//         {text:"blue whale",correct:true},
//         {text:"elephant",correct:false},
//         {text:"giraffe",correct:false},
//     ]},
//     {question:"whish is larger animal in the word",
//         answers:[
//             {text:"me",correct:false},
//             {text:"you",correct:true},
//             {text:"hna",correct:false},
//             {text:"giraffe",correct:false},
//         ]},
    
// ] 
// const questionelemnt=document.getElementById("question");
// const answersbutton=document.getElementById("answer-button ");
// const nextbutton=document

const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
             "Shark" ,
           "Blue whale", 
              "Elephant",
             "Giraffe"
        ]
        , correctAnswer: 1,
        wrongAnswer:0
    },
    {
        question: "Which is the smallest planet?",
        answers: [
             "Earth", 
            "Mercury", 
           "Mars", 
            "Jupiter", 
        ]
    }
];

const answerButtons = [
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3'),
    document.getElementById('answer4')
];
let currentIndex = 0;  // L'index de la question actuelle
let score = 0;  // Pour compter les bonnes réponses
const questionelemnt=document.getElementById("question");
const answersbutton=document.getElementById("answers-area ");
const nextbutton=document.getElementById('submit-button');
console.log(questionelemnt);



 
  


function showQuestion() {
    const currentQuestion = questions[currentIndex]; // Question actuelle
    questionelemnt.innerHTML = currentQuestion.question; // Afficher la question

    // Remplir les boutons de réponse
    answerButtons.forEach((button, index) => {
        button.innerHTML = currentQuestion.answers[index]; // Remplir le bouton avec la réponse

        // Ajouter l'événement au bouton
        button.addEventListener('click', () => {
            checkAnswer(index,button); // Passer l'index de la réponse sélectionnée
        });
    });
}

// Fonction pour vérifier la réponse de l'utilisateur
function checkAnswer(selectedIndex,button) {
    const currentQuestion = questions[currentIndex];
    // Question actuelle

    // Comparer l'index de la réponse sélectionnée avec l'index de la bonne réponse
    answerButtons.forEach(button => button.disabled =true);

    // Vérifier chaque bouton et appliquer la couleur correspondante
    answerButtons.forEach((button, index) => {
        if (index === currentQuestion.correctAnswer) {
            button.style.backgroundColor = 'green';  // Bonne réponse : vert
        } else if (index === selectedIndex) {
            button.style.backgroundColor = 'red';    // Mauvaise réponse : rouge
        }
        else{  button.style.backgroundColor = 'grey';

        }
    });

    // Optionnel : Passer à la question suivante ou afficher un message de fin
    // nextButton.disabled = false; // Activer le bouton "Next"
}



showQuestion();



