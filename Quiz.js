const quiz = [
    {
        question: "Calories in vs Calories out is the key factor in weight loss/gain",
        answer: true
    },
    {
        question: "Exercise does not help Mental Health",
        answer: false
    }, 
       
];

// Start Quiz

let currentQu = 0;
let score = 0;

viewQuestion();

// View current question

function viewQuestion(){
    document.getElementById("question").innerHTML=quiz[currentQu].question;
    document.getElementsByName("answer").forEach(function(element){
        element.checked=false;
    });
}

// Checking Answer

function checkAns(userAns){
    if (userAns === quiz[currentQu].answer){
        score++;
  }

  currentQu++;

  if(currentQu === quiz.length){
    
    showScore();

  } else {

    viewQuestion();
  }
}

// Providing the Score

function showRes(){
    document.getElementById("question").innerHTML = 'Your score is ${score}/${quiz.length}.';
    document.querySelector("button:first-of-type").style.display = "none";
    document.querySelector("button:last-of-type").style.display = "none";
}




