let questionContainer = document.getElementById('question-container')
let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')

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
    resetQuiz()
    setQuestion(shuffledQuestions[currentIndex])
}

function resetQuiz(){
    nextButton.classList.add('hide')
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}

function setQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(correctAnswer => {
        let button = document.createElement('button')
        button.innerText = correctAnswer.text
        button.classList.add('btn')

        if(correctAnswer.correct){
            button.dataset.correct = correctAnswer.text
        }
        button.addEventListener('click', chooseAnswer)
        answerElement.appendChild(button)
    });
}

function chooseAnswer(e){
    let selectedBtn = e.target
    let correct = selectedBtn.dataset.correct

    setClassStatus(Document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setClassStatus.(button, button.dataset.correct)
    });
}

function setClassStatus(element, correct){
    clearClassStatus(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearClassStatus(element){
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

let questions = [
    {
        question: 'What is the capital of Ireland?',
        answers: [
          { text: 'Dublin', correct: true },
          { text: 'Cork', correct: false },
          { text: 'Galway', correct: false },
          { text: 'Mayo', correct: false },
        ]
      }
]