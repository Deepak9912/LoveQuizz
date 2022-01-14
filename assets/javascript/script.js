let questionContainer = document.getElementById('question-container');
let startButton = document.getElementById('start-btn');

let questionElement = document.getElementById('question')
let answerElement = document.getElementById('answer-button')

let shuffledQuestions currentIndex

startButton.addEventListener('click', quizStart)

function quizStart(){
    startButton.classList.add('hide')

    //to shuffle the questions
    shuffledQuestions = questions.sort(() => Math.random() - .5)

    // current index set at 0
    currentIndex = 0

    questionContainer.classList.remove('hide')

    //show next question
    showNextQuestion()

}

function showNextQuestion(){
    setQuestion(shuffledQuestions[currentIndex])
}

function setQuestion(question){
    questionElement.innerText = question.question
}

function chooseAnswer(){

}

let questions = [
    {
        question: "What is the capital of Ireland"
        answers: [
            { text: 'Galway', correct: false },
            { text: 'Dublin', correct: True },
            { text: 'Cork', correct: false },
            { text: 'Mayo', correct: false }
        ]
    }
]