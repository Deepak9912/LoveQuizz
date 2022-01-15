let questionContainer = document.getElementById('question-container')
let startButton = document.getElementById('start-btn')

let questionElement = document.getElementById('question')
let answerElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentIndex

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
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.correct
        button.classList.add('btn')

        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerElement.appendChild(button)
    });
}

function chooseAnswer(e){

}

let questions = [
    {
        question: 'What is the capital of Ireland?',
        answers: [
          { text: 'Dublin', correct: true },
          { text: 'Cork', correct: false },
        ]
      }
]