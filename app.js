
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
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
startButton.addEventListener('click',startgame);
function startgame(){

 
    startButton.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestions=questions.sort(()=>Math.random()-.5);
    currentQuestionIndex=0;
    setNextQuestion()
}
function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
const questions=[
    {question:'what is 2+3',
        answers:[{text:'4',correct:true},
            {text:'22',correct:false}
        ]
    },

]
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }