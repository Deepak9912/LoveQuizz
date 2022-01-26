let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];

let questionContainer = document.getElementById('question-container');
let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');

let questionElement = document.getElementById('question');
let answerElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentIndex;


/**learnt to create modal from https://www.w3schools.com/w3css/w3css_modal.asp */
/**modal window on the home page*/
btn.onclick = function(){
    modal.style.display = "block";
};

/**modal window on the home page*/
span.onclick = function() {
    modal.style.display = "none";
  };

  /**modal window on the home page*/
window.onclick = function(e){
    if(e.target == modal){
        modal.style.display ='none';
    }
};

startButton.addEventListener('click', quizStart);
nextButton.addEventListener('click', function(){
    currentIndex++;
    showNextQuestion();
});

/**to start the online quiz*/
function quizStart(){
    startButton.classList.add('hide');
    //to shuffle the questions
    /**used the below code using https://stackoverflow.com/questions/42661936/whats-the-difference-between-math-random-0-5-and-math-random-0-5 */
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    // current index set at 0
    currentIndex = 0;
    questionContainer.classList.remove('hide');
    //show next question
    showNextQuestion();
}


/**function to show the next question */
function showNextQuestion(){
    //resetQuiz will remove the deafult answers and start question with new answers
    resetQuiz();
    setQuestion(shuffledQuestions[currentIndex]);
}

/**function to reset the quiz */
function resetQuiz(){
    nextButton.classList.add('hide');
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

/** used the below score element from love math project from code institute*/
/**score increment for correct answer */
function incrementCorrectScore(){
    let score = document.getElementById('correct-score').innerText;
    document.getElementById('correct-score').innerText = ++score;
}

/**score increment of wrong answer */
function incrementIncorrectScore(){
    let score = document.getElementById('incorrect-score').innerText;
    document.getElementById('incorrect-score').innerText = ++score;
}

/**function to assign question to the user */
function setQuestion(questionParameter){
    questionElement.innerText = questionParameter.question;

    //created a foreach loop to append all the answers to the DOM
    questionParameter.answers.forEach(correctAnswer => {
        let button = document.createElement('button');
        button.innerText = correctAnswer.text;
        button.classList.add('btn');

        if(correctAnswer.correct){
            button.dataset.correct = correctAnswer.text;
        }
        button.addEventListener('click', chooseAnswer);
        answerElement.appendChild(button);

    });
}

/**this function will allow to select correct answer */
function chooseAnswer(event){
    let selectedBtn = event.target;

    if(selectedBtn){
        answerElement.classList.add('hide');
    }

    let correct = selectedBtn.dataset.correct;
    
    setClassStatus(document.body, correct);
    Array.from(answerElement.children).forEach(button => {
        setClassStatus(button, button.dataset.correct);
    });

    if(correct){
        incrementCorrectScore();
    } else{
        incrementIncorrectScore();
    }

    hideStart();
}

/** this function helps to display restart button at the end of the quiz */
function hideStart(){
    if(shuffledQuestions.length > currentIndex + 1){
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
        document.body.textContent = "Quiz over!, please refresh the page to start again.";
        document.body.color = "red"
    }  
}

/** function to check correct answer */
function setClassStatus(element, correct){
    clearClassStatus(element);
    if(correct){
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearClassStatus(element){
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

/** this variable holds the questions for the quiz */
let questions = [
    {
        question: 'What is the capital of Ireland?',
        answers: [
          { text: 'Dublin', correct: true },
          { text: 'Cork', correct: false },
          { text: 'Galway', correct: false },
          { text: 'Mayo', correct: false },
        ]
    },

    {
        question: 'When is St. Patricks day?',
        answers: [
          { text: '16th March', correct: false },
          { text: '17th March', correct: true },
          { text: '18th March', correct: false },
          { text: '20th March', correct: false },
        ]
    },

    {
        question: 'Which of these county has biggest population?',
        answers: [
          { text: 'Tipperary', correct: false },
          { text: 'Galway', correct: false },
          { text: 'Cork', correct: false },
          { text: 'Dublin', correct: true },
        ]
    },

    {
        question: 'Which is the smallest county in Ireland?',
        answers: [
          { text: 'Sligo', correct: false },
          { text: 'Donegal', correct: false },
          { text: 'Louth', correct: true },
          { text: 'Meath', correct: false },
        ]
    },
    {
        question: 'What is the current population of Ireland?',
        answers: [
          { text: '6.6 Million', correct: true },
          { text: '5.5 Million', correct: false },
          { text: '6.0 Million', correct: false },
          { text: '6.3 Million', correct: false },
        ]
    },
    {
        question: 'The book of Kells is written in which language?',
        answers: [
          { text: 'Irish', correct: false },
          { text: 'Celtic', correct: false },
          { text: 'English', correct: false },
          { text: 'Latin', correct: true },
        ]
    },
    {
        question: 'Name the highest mountain in Ireland?',
        answers: [
          { text: 'Carrauntoohil', correct: true },
          { text: 'Slieve Donard', correct: false },
          { text: 'Mount Brandon', correct: false },
          { text: 'Mourne mountains', correct: false },
        ]
    },
    {
        question: 'Whats the longest river in Ireland?',
        answers: [
          { text: 'Liffey', correct: false },
          { text: 'Shannon', correct: true },
          { text: 'Barrow', correct: false },
          { text: 'Slaney', correct: false },
        ]
    },
    {
        question: 'What is Irelands biggest export?',
        answers: [
          { text: 'Meat', correct: false },
          { text: 'Butter', correct: false },
          { text: 'Malt extract', correct: true },
          { text: 'Cheese', correct: false },
        ]
    },
    {
        question: 'What is the national animal of Ireland?',
        answers: [
          { text: 'Puffin', correct: false },
          { text: 'Irish Hare', correct: true },
          { text: 'Hedgehog', correct: false },
          { text: 'Irish Stoat', correct: false },
        ]
    },

];