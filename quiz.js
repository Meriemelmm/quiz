const questions=[
    
    
    {question:" hello?",
        answers:[ {text:"  a", correct:false} ,{text:"b", correct:false},{ text:"c", correct:false},{ text:"d", correct:true}],
        

    }, {question:" hello?",
        answers:[ {text:"  a", correct:false} ,{text:"b", correct:false},{ text:"c", correct:false},{ text:"d", correct:true}],
        

    }, {question:" hello?",
        answers:[ {text:"  a", correct:false} ,{text:"b", correct:false},{ text:"c", correct:false},{ text:"d", correct:true}],
        

    }, {question:" hello?",
        answers:[ {text:"  a", correct:false} ,{text:"b", correct:false},{ text:"c", correct:false},{ text:"d", correct:true}],
        

    }
]
array=[ document.getElementsByClassName('btn_qcm')];
console.log(array);
const questionelement= document.getElementById('question') ;
const reponse=document.getElementsByClassName('btn_qcm');
const next=document.getElementsByClassName('next button');
console.log(next);
console.log(reponse);

console.log( questionelement.innerText) ;

function show(){    
    
    score=0;
question_index=0;
    querrentquestion=questions[question_index];
    qestion_no=question_index+1;
    questionelement.innerhtml=  qestion_no+"."+querrentquestion;


}
show();


//      Example de structure de données
// const quizData = [
//     {
//       id: 1,
//       type: 'mcq',
//       question: 'Quelle méthode JavaScript permet de filtrer les éléments d\'un tableau?',
//       options: ['map()', 'filter()', 'reduce()', 'forEach()'],
//       correctAnswer: 1,
//       explanation: 'filter() crée un nouveau tableau avec les éléments qui passent le test.'
//     },
//     {
//       id: 2,
//       type: 'boolean',
//       question: 'Le JavaScript est un langage synchrone par défaut?',
//       correctAnswer: false,
//       explanation: 'JavaScript est single-threaded mais asynchrone.'
//     },
//     {
//       id: 3,
//       type: 'text',
//       question: 'Quelle méthode permet d\'ajouter un élément à la fin d\'un tableau?',
//       correctAnswer: ['push', 'push()', '.push', '.push()'],
//       explanation: 'La méthode push() ajoute un ou plusieurs éléments à la fin d\'un tableau.'
//     }
//   ]