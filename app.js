var answerar = document.getElementById("answers-area")




const questions = [
    // HTML - Question QCM
    {
        category: "HTML", 
        level: "easy", 
        type: "multiple-choice",  
        question: "What does HTML stand for?",
        answers: [
            "HyperText Markup Language", 
            "HighText Machine Language", 
            "Hyperlink Text Markup Language", 
            "None of the above"
        ],
        correctAnswer: 0 
    },

    // HTML - Question QCM
    {
        category: "HTML", 
        level: "easy", 
        type: "multiple-choice",  
        question: "Which tag is used to define a paragraph in HTML?",
        answers: ["<p>", "<div>", "<h1>", "<span>"],
        correctAnswer: 0
    },

    // HTML - Question QCM
    {
        category: "HTML", 
        level: "easy", 
        type: "multiple-choice",  
        question: "Which of the following is the correct HTML tag to create a hyperlink?",
        answers: ["<a>", "<link>", "<href>", "<url>"],
        correctAnswer: 0
    },

    // HTML - Question QCM
    {
        category: "HTML", 
        level: "easy", 
        type: "multiple-choice",  
        question: "Which tag is used to insert an image in HTML?",
        answers: ["<img>", "<image>", "<src>", "<picture>"],
        correctAnswer: 0
    },

    // HTML - Question QCM
    {
        category: "HTML", 
        level: "easy", 
        type: "multiple-choice",  
        question: "Which of the following is the correct HTML tag for the largest heading?",
        answers: ["<h1>", "<h2>", "<h3>", "<h6>"],
        correctAnswer: 0
    },

    // HTML - Question QCM
    {
        category: "HTML", 
        level: "easy", 
        type: "multiple-choice",  
        question: "Which tag is used to define a list in HTML?",
        answers: ["<ul>", "<ol>", "<li>", "<list>"],
        correctAnswer: 0
    },

    // HTML - Question Textuelle
    {
        category: "HTML", 
        level: "easy", 
        type: "textual",  
        question: "What is the purpose of the <title> tag in an HTML document?",
        correctAnswer: "It defines the title of the document, shown in the browser tab."
    },

    // HTML - Question QCM
    {
        category: "HTML", 
        level: "easy", 
        type: "multiple-choice",  
        question: "Which tag is used to define an ordered list in HTML?",
        answers: ["<ol>", "<ul>", "<li>", "<dl>"],
        correctAnswer: 0
    },

    // HTML - Question QCM
    {
        category: "HTML", 
        level: "easy", 
        type: "multiple-choice",  
        question: "Which tag is used to define a table in HTML?",
        answers: ["<table>", "<tab>", "<list>", "<grid>"],
        correctAnswer: 0
    },

    // HTML - Question QCM
    {
        category: "HTML", 
        level: "easy", 
        type: "multiple-choice",  
        question: "Which attribute is used to specify the source of an image in HTML?",
        answers: ["src", "href", "alt", "link"],
        correctAnswer: 0
    },

    // HTML - Question Textuelle
    {
        category: "HTML", 
        level: "easy", 
        type: "textual",  
        question: "What is the purpose of the <body> tag in HTML?",
        correctAnswer: "It contains the content of the webpage that is visible to users in the browser."
    },

    // HTML - Question QCM
    {
        category: "HTML", 
        level: "easy", 
        type: "multiple-choice",  
        question: "Which tag is used to define a form in HTML?",
        answers: ["<form>", "<input>", "<button>", "<textarea>"],
        correctAnswer: 0
    },

    // HTML - Question Textuelle
    {
        category: "HTML", 
        level: "easy", 
        type: "textual",  
        question: "What does the <h1> tag define in an HTML document?",
        correctAnswer: "It defines the largest heading on the webpage."
    },

    // HTML - Question True/False
    {
        category: "HTML", 
        level: "easy", 
        type: "true-false",  
        question: "The <h1> tag is used to create the smallest heading in HTML.",
        answers: ["True", "False"],
        correctAnswer: 1
    },

    // HTML - Question True/False
    {
        category: "HTML", 
        level: "easy", 
        type: "true-false",  
        question: "HTML stands for HyperText Markup Language.",
        answers: ["True", "False"],
        correctAnswer: 0
    },

    // HTML - Question True/False
    {
        category: "HTML", 
        level: "easy", 
        type: "true-false",  
        question: "The <img> tag is used to create hyperlinks in HTML.",
        answers: ["True", "False"],
        correctAnswer: 1
    },

    // HTML - Question True/False
    {
        category: "HTML", 
        level: "easy", 
        type: "true-false",  
        question: "The <div> tag is used to group content together in HTML.",
        answers: ["True", "False"],
        correctAnswer: 0
    },
    {
        category: "JavaScript",  
        level: "hard",  
        type: "multiple-choice",
        question: "What is the output of the following code: console.log(0.1 + 0.2 === 0.3)?",
        answers: ["true", "false", "undefined", "NaN"],
        correctAnswer: 1
    },

    // JavaScript - Question QCM
    {
        category: "JavaScript",  
        level: "hard",  
        type: "multiple-choice",
        question: "Which of the following is NOT a valid way to declare a JavaScript function?",
        answers: ["function myFunc() {}", "var myFunc = function() {}", "const myFunc = () => {}", "myFunc = function() {}"],
        correctAnswer: 3
    },

    // JavaScript - Question QCM
    {
        category: "JavaScript",  
        level: "hard",  
        type: "multiple-choice",
        question: "What will be the result of this code snippet: console.log([] + [])?",
        answers: ["[]", "[object Object]", "''", "undefined"],
        correctAnswer: 2
    },

    // JavaScript - Question QCM
    {
        category: "JavaScript",  
        level: "hard",  
        type: "multiple-choice",
        question: "What is the output of: console.log([] == ![])",
        answers: ["true", "false", "undefined", "NaN"],
        correctAnswer: 0
    },

    // JavaScript - Question True/False
    {
        category: "JavaScript",  
        level: "hard",  
        type: "true-false",
        question: "'null' is considered an object in JavaScript.",
        answers: ["True", "False"],
        correctAnswer: 0
    },

    // JavaScript - Question True/False
    {
        category: "JavaScript",  
        level: "hard",  
        type: "true-false",
        question: "In JavaScript, 'NaN' is equal to itself.",
        answers: ["True", "False"],
        correctAnswer: 1
    },

    // JavaScript - Question True/False
    {
        category: "JavaScript",  
        level: "hard",  
        type: "true-false",
        question: "JavaScript is a single-threaded language, meaning it can only execute one operation at a time.",
        answers: ["True", "False"],
        correctAnswer: 0
    },

    // JavaScript - Question Textuelle
    {
        category: "JavaScript",  
        level: "hard",  
        type: "textual",
        question: "Explain the concept of 'hoisting' in JavaScript.",
        correctAnswer: "Hoisting is JavaScript's default behavior of moving declarations (but not initializations) to the top of their containing scope during the compile phase."
    },

    // JavaScript - Question Textuelle
    {
        category: "JavaScript",  
        level: "hard",  
        type: "textual",
        question: "What is the difference between '==' and '===' in JavaScript?",
        correctAnswer: "'==' checks for equality of values, while '===' checks for both equality of values and types. '===' is a strict equality operator."
    },

    // JavaScript - Question Textuelle
    {
        category: "JavaScript",  
        level: "hard",  
        type: "textual",
        question: "What is the event loop in JavaScript, and how does it work with asynchronous code?",
        correctAnswer: "The event loop is a mechanism that allows JavaScript to execute non-blocking asynchronous operations like setTimeout, promises, and AJAX calls. It ensures that the execution of code proceeds without waiting for time-consuming operations to complete, by placing them in a queue and processing them after the main code execution."
    },
    // CSS - Question QCM
    {
        category: "CSS",  
        level: "medium",  
        type: "multiple-choice",
        question: "Which property is used to change the font of an element in CSS?",
        answers: ["font-family", "font-style", "text-font", "font-weight"],
        correctAnswer: 0
    },

    // CSS - Question QCM
    {
        category: "CSS",  
        level: "medium",  
        type: "multiple-choice",
        question: "What is the default value of the 'position' property in CSS?",
        answers: ["relative", "absolute", "static", "fixed"],
        correctAnswer: 2
    },

    // CSS - Question QCM
    {
        category: "CSS",  
        level: "medium",  
        type: "multiple-choice",
        question: "Which of the following is used to create a flex container in CSS?",
        answers: ["display: flex", "display: inline", "flex-container: true", "display: grid"],
        correctAnswer: 0
    },

    // CSS - Question QCM
    {
        category: "CSS",  
        level: "medium",  
        type: "multiple-choice",
        question: "What does the 'z-index' property do in CSS?",
        answers: ["Defines the stacking order of elements", "Changes the opacity of an element", "Sets the font size of an element", "Aligns text in a container"],
        correctAnswer: 0
    },

    // CSS - Question QCM
    {
        category: "CSS",  
        level: "medium",  
        type: "multiple-choice",
        question: "Which CSS property is used to add space between the content and the border of an element?",
        answers: ["margin", "padding", "border-spacing", "spacing"],
        correctAnswer: 1
    },

    // CSS - Question QCM
    {
        category: "CSS",  
        level: "medium",  
        type: "multiple-choice",
        question: "Which of the following CSS properties is used to create rounded corners on an element?",
        answers: ["border-radius", "border-corner", "border-width", "box-sizing"],
        correctAnswer: 0
    },

    // CSS - Question QCM
    {
        category: "CSS",  
        level: "medium",  
        type: "multiple-choice",
        question: "Which of the following is used to set the background color of an element in CSS?",
        answers: ["background-color", "color", "bg-color", "background"],
        correctAnswer: 0
    },

    // CSS - Question True/False
    {
        category: "CSS",  
        level: "medium",  
        type: "true-false",
        question: "CSS Grid is a 1D layout system.",
        answers: ["True", "False"],
        correctAnswer: 1
    },

    // CSS - Question True/False
    {
        category: "CSS",  
        level: "medium",  
        type: "true-false",
        question: "The 'display: none' property hides an element but still occupies space in the layout.",
        answers: ["True", "False"],
        correctAnswer: 1
    },

    // CSS - Question True/False
    {
        category: "CSS",  
        level: "medium",  
        type: "true-false",
        question: "The 'float' property can be used to position an element within its container in a vertical direction.",
        answers: ["True", "False"],
        correctAnswer: 1
    },

    // CSS - Question Textuelle
    {
        category: "CSS",  
        level: "medium",  
        type: "textual",
        question: "What is the difference between 'display: inline' and 'display: block' in CSS?",
        correctAnswer: "'display: inline' allows elements to flow horizontally and does not force a new line after the element. 'display: block' makes an element take up the full width and forces a new line after the element."
    },

    // CSS - Question Textuelle
    {
        category: "CSS",  
        level: "medium",  
        type: "textual",
        question: "What is the purpose of the 'box-sizing' property in CSS?",
        correctAnswer: "'box-sizing' allows you to control how the total width and height of an element are calculated, either including padding and borders (with 'border-box') or excluding them (with 'content-box')."
    },

    // CSS - Question Textuelle
    {
        category: "CSS",  
        level: "medium",  
        type: "textual",
        question: "Explain the 'position' property in CSS and describe the differences between 'relative', 'absolute', 'fixed', and 'sticky' positions.",
        correctAnswer: "'position' controls how an element is positioned in relation to its parent or the viewport. 'relative' moves an element relative to its normal position. 'absolute' removes the element from the document flow and positions it relative to the nearest positioned ancestor. 'fixed' fixes an element in place relative to the viewport, and 'sticky' makes an element stick to its position based on scroll behavior."
    },
    {
        category: "computer" , 
        level: "easy",  
        type: "textual",
        question: "Explain the 'position' property in CSS and describe the differences between 'relative', 'absolute', 'fixed', and 'sticky' positions.",
        correctAnswer: "'position' controls how an element is positioned in relation to its parent or the viewport. 'relative' moves an element relative to its normal position. 'absolute' removes the element from the document flow and positions it relative to the nearest positioned ancestor. 'fixed' fixes an element in place relative to the viewport, and 'sticky' makes an element stick to its position based on scroll behavior."
    },
   
];





// const questions = [
//     // HTML - Question QCM
//     {
//         category: "HTML", 
//         level: "easy",  // Added level field
//         type: "multiple-choice",  
//         question: "What does HTML stand for?",
//         answers: [
//             "HyperText Markup Language", 
//             "HighText Machine Language", 
//             "Hyperlink Text Markup Language", 
//             "None of the above"
//         ],
//         correctAnswer: 0 
//     },

//     // HTML - Question Vrai/Faux
//     {
//         category: "HTML", 
//         level: "easy",  // Added level field
//         type: "true-false",  
//         question: "HTML is used to style web pages.",
//         answers: [
//             "True",
//             "False"
//         ],
//         correctAnswer: 1  
//     },

//     // HTML - Question Textuelle
//     {
//         category: "HTML",  
//         level: "medium",  // Added level field
//         type: "textual",  
//         question: "What is the purpose of the <title> tag in HTML?",
//         correctAnswer: "It defines the title of the document, shown in the browser tab."
//     },

//     // HTML - Question QCM
//     {
//         category: "HTML",  
//         level: "medium",  // Added level field
//         type: "multiple-choice",
//         question: "Which tag is used for a line break in HTML?",
//         answers: ["<break>", "<lb>", "<br>", "<line>"],
//         correctAnswer: 2
//     },

//     // HTML - Question Vrai/Faux
//     {
//         category: "HTML",  
//         level: "easy",  // Added level field
//         type: "true-false",
//         question: "The <img> tag is used to insert images in HTML.",
//         answers: ["True", "False"],
//         correctAnswer: 0 
//     },

//     // HTML - Question Textuelle
//     {
//         category: "HTML",  
//         level: "medium",  // Added level field
//         type: "textual",
//         question: "What is the purpose of the <head> element in an HTML document?",
//         correctAnswer: "It contains metadata like the document's title, links to stylesheets, and scripts." 
//     },

//     // HTML - Question QCM
//     {
//         category: "HTML",  
//         level: "hard",  // Added level field
//         type: "multiple-choice",
//         question: "What is the correct HTML for creating a hyperlink?",
//         answers: ["<a url='www.example.com'>Link</a>", "<a href='www.example.com'>Link</a>", "<link href='www.example.com'>Link</link>", "<a link='www.example.com'>Link</a>"],
//         correctAnswer: 1
//     },

//     // HTML - Question Vrai/Faux
//     {
//         category: "HTML",  
//         level: "medium",  // Added level field
//         type: "true-false",
//         question: "HTML stands for HyperText Markup Language.",
//         answers: ["True", "False"],
//         correctAnswer: 0  
//     },

//     // HTML - Question Textuelle
//     {
//         category: "HTML",  
//         level: "easy",  // Added level field
//         type: "textual",
//         question: "best you ",
//         correctAnswer: "me" 
//     },

//     // HTML - Question QCM
//     {
//         category: "HTML",  
//         level: "medium",  // Added level field
//         type: "multiple-choice",
//         question: "What does the <title> tag define in an HTML document?",
//         answers: ["The document title", "The body of the document", "The header of the document", "The footer of the document"],
//         correctAnswer: 0
//     },

//     // HTML - Question QCM
//     {
//         category: "HTML",  
//         level: "easy",  // Added level field
//         type: "multiple-choice",
//         question: "Which tag is used to define a table in HTML?",
//         answers: ["<table>", "<grid>", "<tab>", "<list>"],
//         correctAnswer: 0
//     },

//     // HTML - Question Vrai/Faux
//     {
//         category: "HTML",  
//         level: "easy",  // Added level field
//         type: "true-false",
//         question: "The <div> tag is used to create a division or section in HTML.",
//         answers: ["True", "False"],
//         correctAnswer: 0  
//     },

//     // HTML - Question QCM
//     {
//         category: "HTML",  
//         level: "medium",  // Added level field
//         type: "multiple-choice",
//         question: "What tag is used to create a form in HTML?",
//         answers: ["<form>", "<input>", "<button>", "<textarea>"],
//         correctAnswer: 0
//     },

//     // JavaScript - Question QCM
//     {
//         category: "JavaScript",  
//         level: "medium",  // Added level field
//         type: "multiple-choice",
//         question: "Which keyword is used to define a constant in JavaScript?",
//         answers: ["const", "let", "var", "constant"],
//         correctAnswer: 0
//     },

//     // JavaScript - Question Vrai/Faux
//     {
//         category: "JavaScript",  
//         level: "easy",  // Added level field
//         type: "true-false",
//         question: "JavaScript can be used to manipulate the DOM (Document Object Model).",
//         answers: ["True", "False"],
//         correctAnswer: 0  
//     },

//     // JavaScript - Question Textuelle
//     {
//         category: "JavaScript",  
//         level: "medium",  // Added level field
//         type: "textual",
//         question: "What is the purpose of the 'return' statement in JavaScript?",
//         correctAnswer: "The 'return' statement is used to exit a function and return a value to the caller."
//     },

//     // JavaScript - Question QCM
//     {
//         category: "JavaScript",  
//         level: "medium",  // Added level field
//         type: "multiple-choice",
//         question: "Which of the following methods is used to add an element to the end of an array in JavaScript?",
//         answers: ["push()", "pop()", "shift()", "unshift()"],
//         correctAnswer: 0
//     },

//     // JavaScript - Question Vrai/Faux
//     {
//         category: "JavaScript",  
//         level: "easy",  // Added level field
//         type: "true-false",
//         question: "In JavaScript, 'null' is a type of object.",
//         answers: ["True", "False"],
//         correctAnswer: 0  
//     },

//     // JavaScript - Question Textuelle
//     {
//         category: "JavaScript",  
//         level: "hard",  // Added level field
//         type: "textual",
//         question: "What is the difference between '==' and '===' in JavaScript?",
//         correctAnswer: "'==' checks for equality of values, while '===' checks for both equality of values and types."
//     },

//     // CSS - Question QCM
//     {
//         category: "CSS",  
//         level: "easy",  // Added level field
//         type: "multiple-choice",
//         question: "Which property is used to change the background color in CSS?",
//         answers: ["background-color", "color", "bg-color", "background"],
//         correctAnswer: 0
//     },

//     // CSS - Question Vrai/Faux
//     {
//         category: "CSS",  
//         level: "easy",  // Added level field
//         type: "true-false",
//         question: "CSS is used to structure web pages.",
//         answers: ["True", "False"],
//         correctAnswer: 1  
//     },

//     // CSS - Question Textuelle
//     {
//         category: "CSS",  
//         level: "medium",  // Added level field
//         type: "textual",
//         question: "What does the CSS property 'margin' do?",
//         correctAnswer: "It creates space around elements, outside of their border."
//     },

//     // CSS - Question QCM
//     {
//         category: "CSS",  
//         level: "medium",  // Added level field
//         type: "multiple-choice",
//         question: "Which CSS property is used to change the text color?",
//         answers: ["color", "font-color", "text-color", "background-color"],
//         correctAnswer: 0
//     },

//     // CSS - Question Vrai/Faux
//     {
//         category: "CSS",  
//         level: "hard",  // Added level field
//         type: "true-false",
//         question: "The 'border' property is used to define the spacing inside an element.",
//         answers: ["True", "False"],
//         correctAnswer: 1  
//     },

//     // CSS - Question Textuelle
//     {
//         category: "CSS",  
//         level: "hard",  // Added level field
//         type: "textual",
//         question: "What is the difference between 'padding' and 'margin' in CSS?",
//         correctAnswer: "'Padding' creates space inside the element, while 'margin' creates space outside the element."
//     },

//     // CSS - Question QCM
//     {
//         category: "CSS",  
//         level: "easy",  // Added level field
//         type: "multiple-choice",
//         question: "What is the default value of the 'display' property in CSS?",
//         answers: ["block", "inline", "none", "inline-block"],
//         correctAnswer: 1
//     },
//     {
//         category: "html",  
//         level: "easy",  // Added level field
//         type: "multiple-choice",
//         question: "What is the default value of the 'display' property in CSS?",
//         answers: ["block", "inline", "none", "inline-block"],
//         correctAnswer: 1
//     }
// ];

let selectedCategory = localStorage.getItem('selectedCategory');
let selectedLevel = localStorage.getItem('selectedLevel');
console.log(questions[5].correctAnswer);
console.log()
console.log(questions)

const filteredQuestions = questions.filter(q => q.category === selectedCategory && q.level === selectedLevel);

let currentIndex=0;
    let score = 0;
    let timeRemaining = 120;
    let quizTimer;
    let progress = 0;
    
const currentQuestion=filteredQuestions[currentIndex];


    const questionElement = document.getElementById("question");
    const answerButtons = [
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('answer3'),
        document.getElementById('answer4')
    ];
    const submitButton = document.getElementById("submit-button");
    console.log(submitButton)
    console.log(submitButton);
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
     
        const currentQuestion = filteredQuestions[currentIndex];
        questionElement.innerText = currentQuestion.question;

       
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
            nextButton.style.display = "none"; 
            document.getElementById("enter").value = "";
      
             submitButton.onclick = checkTextualAnswer ;
        }

        updateProgressBar();
    }
    function checkTextualAnswer() {
        
        const currentQuestion = filteredQuestions[currentIndex];
        questionElement.innerText = currentQuestion.question;
        
          
          
         const userAnswer = document.getElementById("enter").value.trim();  
   
        const correctAnswer = currentQuestion.correctAnswer;
        if(typeof checkAnswerorrectAnswer==="string"){ const resultMessage = document.createElement('h1');
        resultMessage.style.textAlign = 'center';  
    
       
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
           
            score++;  
            document.getElementById('enter').style.display = "none";  
            scoreElement.innerText = score; 
            resultMessage.innerText = "Correct!";  
            resultMessage.style.Color = 'green'; 
        } else {
            
            resultMessage.innerText = `Incorrect! The correct answer is: ${correctAnswer}`;  
            resultMessage.style.color = 'red';  
            document.getElementById('enter').style.display = "none"; 
             submitButton.style.display = "none"; 
             nextButton.style.display = "block";  
        }
    
        answerFeedback.appendChild(resultMessage);
        console.log(resultMessage);
    
        
        nextButton.style.display = 'block'; 
        submitButton.style.display = 'none';
        // nextButton.onclick = goToNextQuestion;
    scoreElement.innerText = score;  
        
       
       
    }}
  
    
    
    


    function checkAnswer(selectedIndex) {
  
        const currentQuestion = filteredQuestions[currentIndex];
         

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

        
    }

    function goToNextQuestion() {
        currentIndex++;

        if (currentIndex < filteredQuestions.length) {
            showQuestion(); 
        
        } else {
            showResults(); 
        }
    }

    function updateProgressBar() {
        progress = ((currentIndex + 1) / filteredQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    function showResults() {
        
        const result = document.createElement('h1');
        result.innerText = `Quiz complete! Your score is ${score} out of ${filteredQuestions.length}`;
        result.style.background = score === questions.length ? 'green' : 'red';
        result.style.color = 'white';
        result.style.textAlign = 'center';
        result.style.padding = '20px';
        result.style.marginTop = '20px';

        document.body.appendChild(result);

        submitButton.style.display = 'none';
        timerElement.innerText = '00:00';
        
    }

    function startQuiz() {
       

        startTimer();
        showQuestion();
    }

 

    submitButton.addEventListener('click', goToNextQuestion);

   startQuiz();  
   





    
  
