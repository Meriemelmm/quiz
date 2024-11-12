var answerar = document.getElementById("answers-area")


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

// const questions = [
//     {
//         question: "Which is the largest animal in the world?",
//         answers: [
//              "Shark" ,
//            "Blue whale", 
//               "Elephant",
//              "Giraffe"
//         ]
//         , correctAnswer: 1,
//         wrongAnswer:0
//     },
//     {
//         question: "Which is the smallest planet?",
//         answers: [
//              "Earth", 
//             "Mercury", 
//            "Mars", 
//             "Jupiter", 
//         ]
//     }
// ];

// const answerButtons = [
//     document.getElementById('answer1'),
//     document.getElementById('answer2'),
//     document.getElementById('answer3'),
//     document.getElementById('answer4')
// ];
// let currentIndex = 0; 

// let score = 0;  // Pour compter les bonnes réponses
// const questionelemnt=document.getElementById("question");
// const answersbutton=document.getElementById("answers-area ");
// const nextbutton=document.getElementById('submit-button');
// console.log(questionelemnt);







// function showQuestion() { const departMinutes = 5
// let temps = departMinutes * 60

// const timerElement = document.getElementById("time")

// setInterval(() => {
//   let minutes = parseInt(temps / 60, 10)
//   let secondes = parseInt(temps % 60, 10)

//   minutes = minutes < 10 ? "0" + minutes : minutes
//   secondes = secondes < 10 ? "0" + secondes : secondes

//   timerElement.innerText = `${minutes}:${secondes}`
//   temps = temps <= 0 ? 0 : temps - 1
// }, 1000)
    
    

  
//     const currentQuestion = questions[currentIndex]; 
//     questionelemnt.innerHTML = currentQuestion.question; 

//     answerButtons.forEach((button, index) => {
//         button.innerHTML = currentQuestion.answers[index]; 

      
//         button.addEventListener('click', () => {
//             checkAnswer(index,button); 
//             const currentQuestion = questions[currentIndex];

//             if (index === currentQuestion.correctAnswer) {
//                 score++;
//                 document.getElementById('score').innerHTML=score++;
//                 console.log("correct" , score);
//             }

//         });
//     });
     
   
// }




// function checkAnswer(selectedIndex,button) {
//     const currentQuestion = questions[currentIndex];
   

//     answerButtons.forEach(button => button.disabled =true);

//     answerButtons.forEach((button, index) => {
//         if (index === currentQuestion.correctAnswer) {

//             button.style.backgroundColor = 'green'; 
            
            
//             // score++;

//             // document.getElementById('score').innerHTML=score++;
//             // console.log("correct" , score);
            

//         } else if (index === selectedIndex) {
//             button.style.backgroundColor = 'red';    
//             //console.log("incorrect " ,  score);

//         }
//         else{  button.style.backgroundColor = 'grey';

//         }
//     });
    
   
// }

  


// showQuestion();
const questions = [
    // Question QCM
    {
        type: "multiple-choice",  // Type de la question : Choix multiple
        question: "What does HTML stand for?",
        answers: [
            "HyperText Markup Language", 
            "HighText Machine Language", 
            "Hyperlink Text Markup Language", 
            "None of the above"
        ],
        correctAnswer: 0  // L'index de la réponse correcte
    },
    
    // Question Vrai/Faux
    {
        type: "true-false",  // Type de la question : Vrai ou Faux
        question: "HTML is used to style web pages.",
        answers: [
            "True",
            "False"
        ],
        correctAnswer: 1  // La réponse correcte est "False"
    },

    // Question Textuelle
    {
        type: "textual",  // Type de la question : Question textuelle
        question: "What is the purpose of the <title> tag in HTML?",
        correctAnswer: "It defines the title of the document, shown in the browser tab."  // Réponse libre à fournir par l'utilisateur
    },

    // Question QCM
    {
        type: "multiple-choice",
        question: "Which tag is used for a line break in HTML?",
        answers: ["<break>", "<lb>", "<br>", "<line>"],
        correctAnswer: 2
    },

    // Question Vrai/Faux
    {
        type: "true-false",
        question: "The <img> tag is used to insert images in HTML.",
        answers: ["True", "False"],
        correctAnswer: 0  // La réponse correcte est "True"
    },

    // Question Textuelle
    {
        type: "textual",
        question: "What is the purpose of the <head> element in an HTML document?",
        correctAnswer: "It contains metadata like the document's title, links to stylesheets, and scripts." 
    },

    // Question QCM
    {
        type: "multiple-choice",
        question: "What is the correct HTML for creating a hyperlink?",
        answers: ["<a url='www.example.com'>Link</a>", "<a href='www.example.com'>Link</a>", "<link href='www.example.com'>Link</link>", "<a link='www.example.com'>Link</a>"],
        correctAnswer: 1
    },

    // Question Vrai/Faux
    {
        type: "true-false",
        question: "HTML stands for HyperText Markup Language.",
        answers: ["True", "False"],
        correctAnswer: 0  // La réponse correcte est "True"
    },

    // Question Textuelle
    {
        type: "textual",
        question: "best you ",
        correctAnswer: "me" 
    },

    // Question QCM
    {
        type: "multiple-choice",
        question: "What does the <title> tag define in an HTML document?",
        answers: ["The document title", "The body of the document", "The header of the document", "The footer of the document"],
        correctAnswer: 0
    },

    // Question QCM
    {
        type: "multiple-choice",
        question: "Which tag is used to define a table in HTML?",
        answers: ["<table>", "<grid>", "<tab>", "<list>"],
        correctAnswer: 0
    },

    // Question Vrai/Faux
    {
        type: "true-false",
        question: "The <div> tag is used to create a division or section in HTML.",
        answers: ["True", "False"],
        correctAnswer: 0  // La réponse correcte est "True"
    },

    // Question QCM
    {
        type: "multiple-choice",
        question: "What tag is used to create a form in HTML?",
        answers: ["<form>", "<input>", "<button>", "<textarea>"],
        correctAnswer: 0
    }
];


// var quiz_app=0;
// QuizApp(quiz_app);
// function QuizApp(n){
//     var x = document.getElementsByClassName("quiz-app");
//     x[n].style.display = "block";
//     if(n=0){

        
// } 

// else if(n=1){

// }
// else if(n=2){

// }}


// let currentIndex = 0;
// console.log( question[0].correctAnswer)

// let score = 0;
// let timeRemaining = 180; 
// let quizTimer;
// let progress = 0; 


  



    

// const questionElement = document.getElementById("question");
// const answerButtons = [
//     document.getElementById('answer1'),
//     document.getElementById('answer2'),
//     document.getElementById('answer3'),
//     document.getElementById('answer4')
// ];
// const submitButton = document.getElementById("submit-button");
// const nextButton = document.getElementById("next-button");
// console.log(nextButton)
// const scoreElement = document.getElementById("score");
// const timerElement = document.getElementById("time");
// const progressBar = document.getElementById("progress-bar");
//  const next=document.getElementById("next");
 


// function startTimer() {
//     quizTimer = setInterval(() => {
//         let minutes = Math.floor(timeRemaining / 60);
//         let seconds = timeRemaining % 60;
//         timerElement.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

//         if (timeRemaining <= 0) {
//             clearInterval(quizTimer);
//             showResults(); 
//         }
//         timeRemaining--;
//     }, 1000);
// }


// function showQuestion() {
//     const currentQuestion = questions[currentIndex];
//     questionElement.innerText = currentQuestion.question;
//     if("answers" in questions[currentIndex]){
        
        
//         document.getElementById("enter").style.display = "none";
//         answerar.style.display = "block"
        
    
        
//         answerButtons.forEach((button, index) => {
//             if(currentQuestion.answers[index] == undefined){
//                 let answer3 = document.getElementById("answer3"); 
//                 let answer4 = document.getElementById("answer4"); 
//                 answer3.style.display = "none";
//                 answer4.style.display = "none";
                
//             }else{
//                 let answer3 = document.getElementById("answer3"); 
//                 let answer4 = document.getElementById("answer4"); 
//                 answer3.style.display = "block";
//                 answer4.style.display = "block";
//             }
    
          
//             button.innerText = currentQuestion.answers[index];
//             console.log("hani ; " ,currentQuestion.answers[index]);
    
//             button.style.backgroundColor = ""; 
//             button.disabled = false; 
//             button.onclick = () => checkAnswer(index); 
//         });
    
       
//     }
//     // else{
//     //     let answers_text = document.getElementById("answers-text");
//     //     let answers_area = document.getElementById("answers-area");
//     //     let index
        
//     //     answers_area.style.display = "none";
//     //     input=document.getElementById('enter').style.display="block";
//     //     submitButton.addEventListener('click',correctinswer);
       

//     // }
   
        
//         else if (currentQuestion.type === "textual") {
//             document.getElementById("answers-area").style.display = "none";
//             document.getElementById("enter").style.display = "block";
//             nextButton.style.display = "none"; // Masquer le bouton "Next" jusqu'à ce qu'une réponse soit soumise
//           }
//     updateProgressBar(); 
//      }
//      function checkTextualAnswer() {
//         const currentQuestion = questions[currentIndex];
//         const userAnswer = document.getElementById("enter").value.trim();
      
//         if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
//           score++;
//           scoreElement.innerText = score;
//         }
      
//         nextButton.style.display = 'block'; // Afficher le bouton "Next"
//       }
//       submitButton.addEventListener('click', () => {
//         if (questions[currentIndex].type === "textual") {
//           checkTextualAnswer();
//         } else {
//           goToNextQuestion();
//         }
//       });
//       nextButton.addEventListener('click', goToNextQuestion);      
// // correctInput{
// //     let userAnswer=document.getElementById('enter').value;
// //     let  correctAnswer
// // }

// // function correctAnswer() {
   
// //     const currentQuestion = questions[currentIndex];
// //     // let userAnswer = document.getElementById('enter').value.trim().toLowerCase(); // Récupère la réponse de l'utilisateur

// //     let correctAnswer = currentQuestion.correctAnswer;
// //     console.log( correctAnswer)
// //     // console.log(correctAnswer);

    
// //     // let result = document.createElement('h1');
// //     // if (userAnswer === correctAnswer) {
// //     //     result.innerText = "Correct answer!";
        
// //     // } else {
// //     //     result.innerText = `Incorrect! The correct answer is: ${currentQuestion.answers}`;
// //     // }

    
// // }


// function checkAnswer(selectedIndex) {
//     const currentQuestion = questions[currentIndex];
//     answerButtons.forEach(button => button.disabled = true); 

//     answerButtons.forEach((button, index) => {
//         if (index === currentQuestion.correctAnswer) {
//             button.style.backgroundColor = 'green'; 
//         } else if (index === selectedIndex) {
//             button.style.backgroundColor = 'red'; 
//         } else {
//             button.style.backgroundColor = 'gray'; 
//         }
//     });

//     if (selectedIndex === currentQuestion.correctAnswer) {
//         score++;
//         scoreElement.innerText = score;
//     }

    
// }


// function goToNextQuestion() {
//     currentIndex++;

//     if (currentIndex < questions.length) {
//         showQuestion(); // Show the next question
//         nextButton.style.display = 'none'; // Hide "Next" button until an answer is chosen
//     } else {
//         showResults(); // All questions answered, show results
//     }
// }

// // Update progress bar
// function updateProgressBar() {
//     progress = ((currentIndex + 1) / questions.length) * 100;
//     progressBar.style.width = `${progress}%`; // Update the width of the progress bar
// }

// // Show results
// function showResults() {
//        // Créer un élément h1 pour afficher le résultat
//        const result = document.createElement('h1');
//        result.innerText = `Quiz complete! Your score is ${score} out of ${questions.length}`;
       
//        // Styliser l'élément h1
//        result.style.background = score === questions.length ? 'green' : 'red'; // Si le score est égal au nombre total de questions, vert, sinon rouge.
//        result.style.color = 'white'; // Mettre le texte en blanc pour le contraste
//        result.style.textAlign = 'center'; // Centrer le texte
//        result.style.padding = '20px'; // Ajouter un peu de padding
//        result.style.marginTop = '20px'; // Ajouter un peu de marge en haut
       
//        // Ajouter l'élément à la page
//        document.body.appendChild(result);
   
    
    
    
//     nextButton.style.display = 'none'; 
//     timerElement.innerText = '00:00'; 
// }

// // Initialize the quiz
// function startQuiz() {
//     startTimer(); // Start the timer
//     showQuestion(); // Show the first question
// }

// submitButton.addEventListener('click', goToNextQuestion);

// // Start the quiz
// startQuiz();
// // window location a href
// let currentIndex = 0;
// let score = 0;
// let timeRemaining = 180;
// let quizTimer;
// let progress = 0;

// const questionElement = document.getElementById("question");
// const answerButtons = [
//     document.getElementById('answer1'),
//     document.getElementById('answer2'),
//     document.getElementById('answer3'),
//     document.getElementById('answer4')
// ];
// const submitButton = document.getElementById("submit-button");
// const nextButton = document.getElementById("next-button");
// const scoreElement = document.getElementById("score");
// const timerElement = document.getElementById("time");
// const progressBar = document.getElementById("progress-bar");
// const answerFeedback = document.getElementById("answer-feedback");

// function startTimer() {
//     quizTimer = setInterval(() => {
//         let minutes = Math.floor(timeRemaining / 60);
//         let seconds = timeRemaining % 60;
//         timerElement.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

//         if (timeRemaining <= 0) {
//             clearInterval(quizTimer);
//             showResults();
//         }
//         timeRemaining--;
//     }, 1000);
// }

// function showQuestion() {
//     const currentQuestion = questions[currentIndex];
//     questionElement.innerText = currentQuestion.question;

//     // Effacer la rétroaction de la question précédente
    
//     answerFeedback.innerHTML = "";

//     if (currentQuestion.type === "multiple-choice" || currentQuestion.type === "true-false") {
//         document.getElementById("enter").style.display = "none";
//         document.getElementById("answers-area").style.display = "block";

//         answerButtons.forEach((button, index) => {
//             if (currentQuestion.answers[index] === undefined) {
//                 button.style.display = "none";
//             } else {
//                 button.style.display = "block";
//                 button.innerText = currentQuestion.answers[index];
//                 button.style.backgroundColor = "";
//                 button.disabled = false;
//                 button.onclick = () => checkAnswer(index);
//             }
//         });

//     } else if (currentQuestion.type === "textual") {
//         document.getElementById("answers-area").style.display = "none";
//         document.getElementById("enter").style.display = "block";
//         nextButton.style.display = "none"; // Masquer "Next" tant que la réponse n'est pas soumise
//     }

//     updateProgressBar();
// }

// function checkTextualAnswer() {
//     const currentQuestion = questions[currentIndex];
//     const userAnswer = document.getElementById("enter").value.trim();

//     // Afficher la réponse immédiatement sous la question
//     const resultMessage = document.createElement('h3');
//     resultMessage.style.textAlign = 'center';
//     if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
//         score++;
//         scoreElement.innerText = score;
//         resultMessage.innerText = "Correct!";
//         resultMessage.style.color = 'green';
//         document.getElementById('enter').style.display="none";
//     } else {
//         resultMessage.innerText = `Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`;
//         resultMessage.style.color = 'red';
//         document.getElementById('enter').style.display="none";

//     }

//     // Ajouter le message au DOM dans la zone de rétroaction
//     answerFeedback.appendChild(resultMessage);

//     nextButton.style.display = 'block'; // Afficher le bouton "Next" après soumission de la réponse
// }

// function checkAnswer(selectedIndex) {
//     const currentQuestion = questions[currentIndex];
//     answerButtons.forEach(button => button.disabled = true);

//     answerButtons.forEach((button, index) => {
//         if (index === currentQuestion.correctAnswer) {
//             button.style.backgroundColor = 'green';
//         } else if (index === selectedIndex) {
//             button.style.backgroundColor = 'red';
//         } else {
//             button.style.backgroundColor = 'gray';
//         }
//     });

//     if (selectedIndex === currentQuestion.correctAnswer) {
//         score++;
//         scoreElement.innerText = score;
//     }

//     // nextButton.style.display = 'block'; // Afficher "Next"
// }

// function goToNextQuestion() {
//     currentIndex++;

//     if (currentIndex < questions.length) {
//         showQuestion(); // Afficher la prochaine question
//         nextButton.style.display = 'none'; // Masquer le bouton "Next" jusqu'à ce qu'une réponse soit donnée
//     } else {
//         showResults(); // Si toutes les questions sont répondues, afficher les résultats
//     }
// }

// function updateProgressBar() {
//     progress = ((currentIndex + 1) / questions.length) * 100;
//     progressBar.style.width = `${progress}%`;
// }

// function showResults() {
//     const result = document.createElement('h1');
//     result.innerText = `Quiz complete! Your score is ${score} out of ${questions.length}`;
//     result.style.background = score === questions.length ? 'green' : 'red';
//     result.style.color = 'white';
//     result.style.textAlign = 'center';
//     result.style.padding = '20px';
//     result.style.marginTop = '20px';

//     document.body.appendChild(result);

//     nextButton.style.display = 'none';
//     timerElement.innerText = '00:00';
// }

// function startQuiz() {
//     startTimer();
//     showQuestion();
// }

// submitButton.addEventListener('click', () => {
//     if (questions[currentIndex].type === "textual") {
//         checkTextualAnswer();
//     } else {
//         goToNextQuestion();
//     }
// });

// nextButton.addEventListener('click', goToNextQuestion);

// startQuiz();
let currentIndex = 0;
    let score = 0;
    let timeRemaining = 180;
    let quizTimer;
    let progress = 0;

    const questionElement = document.getElementById("question");
    const answerButtons = [
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('answer3'),
        document.getElementById('answer4')
    ];
    const submitButton = document.getElementById("submit-button");
    const nextButton = document.getElementById("next-button");
    const scoreElement = document.getElementById("score");
    const timerElement = document.getElementById("time");
    const progressBar = document.getElementById("progress-bar");
    const answerFeedback = document.getElementById("answer-feedback");

    function startTimer() {
        quizTimer = setInterval(() => {
            let minutes = Math.floor(timeRemaining / 60);
            let seconds = timeRemaining % 60;
            timerElement.innerText = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

            if (timeRemaining <= 0) {
                clearInterval(quizTimer);
                showResults();
            }
            timeRemaining--;
        }, 1000);
    }

    function showQuestion() {
        const currentQuestion = questions[currentIndex];
        questionElement.innerText = currentQuestion.question;

        // Effacer la rétroaction de la question précédente
        answerFeedback.innerHTML = "";

        if (currentQuestion.type === "multiple-choice" || currentQuestion.type === "true-false") {
            document.getElementById("enter").style.display = "none";
            document.getElementById("answers-area").style.display = "block";

            answerButtons.forEach((button, index) => {
                if (currentQuestion.answers[index] === undefined) {
                    button.style.display = "none";
                } else {
                    button.style.display = "block";
                    button.innerText = currentQuestion.answers[index];
                    button.style.backgroundColor = "";
                    button.disabled = false;
                    button.onclick = () => checkAnswer(index);
                }
            });

        } else if (currentQuestion.type === "textual") {
            document.getElementById("answers-area").style.display = "none";
            document.getElementById("enter").style.display = "block";
            nextButton.style.display = "none"; // Masquer "Next" tant que la réponse n'est pas soumise
            document.getElementById("enter").value = "";
        }

        updateProgressBar();
    }

    function checkTextualAnswer() {
        const currentQuestion = questions[currentIndex];
        
        let userAnswer = document.getElementById("enter").value.trim();
       
        correctAnswer=currentQuestion.correctAnswer;
        console.log("User Answer: ", userAnswer);  // عرض الإجابة المدخلة
  console.log("Correct Answer: ", correctAnswer);  // عرض الإجابة الصحيحة

        // Afficher la réponse immédiatement sous la question
        const resultMessage = document.createElement('h3');
        resultMessage.style.textAlign = 'center';
        if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
            score++;
            scoreElement.innerText = score;
            resultMessage.innerText = "Correct!";
            resultMessage.style.color = 'green';
            document.getElementById('enter').style.display="none";
        } else {
            resultMessage.innerText = `Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`;
            resultMessage.style.color = 'red';
            document.getElementById('enter').style.display="none";

        }

        // Ajouter le message au DOM dans la zone de rétroaction
        answerFeedback.appendChild(resultMessage);

        nextButton.style.display = 'block'; 
        submitButton.style.display='none';// Afficher le bouton "Next" après soumission de la réponse
    }

    function checkAnswer(selectedIndex) {
        const currentQuestion = questions[currentIndex];
        answerButtons.forEach(button => button.disabled = true);
        submitButton.style.display='block';

        answerButtons.forEach((button, index) => {
            if (index === currentQuestion.correctAnswer) {
                button.style.backgroundColor = 'green';
            } else if (index === selectedIndex) {
                button.style.backgroundColor = 'red';
            } else {
                button.style.backgroundColor = 'gray';
            }
        });

        if (selectedIndex === currentQuestion.correctAnswer) {
            score++;
            scoreElement.innerText = score;
        }

        // nextButton.style.display = 'block'; // Afficher "Next"
    }

    function goToNextQuestion() {
        currentIndex++;

        if (currentIndex < questions.length) {
            showQuestion(); // Afficher la prochaine question
            nextButton.style.display = 'none'; // Masquer le bouton "Next" jusqu'à ce qu'une réponse soit donnée
        } else {
            showResults(); // Si toutes les questions sont répondues, afficher les résultats
        }
    }

    function updateProgressBar() {
        progress = ((currentIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showResults() {
        const result = document.createElement('h1');
        result.innerText = `Quiz complete! Your score is ${score} out of ${questions.length}`;
        result.style.background = score === questions.length ? 'green' : 'red';
        result.style.color = 'white';
        result.style.textAlign = 'center';
        result.style.padding = '20px';
        result.style.marginTop = '20px';

        document.body.appendChild(result);

        nextButton.style.display = 'none';
        timerElement.innerText = '00:00';
    }

    function startQuiz() {
        startTimer();
        showQuestion();
    }

    submitButton.addEventListener('click', () => {
        if (questions[currentIndex].type === "textual") {
            checkTextualAnswer();
            
        } else {
            goToNextQuestion();
        }
    });

    nextButton.addEventListener('click', goToNextQuestion);

    startQuiz();



  
  
  






