const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

console.log(startButton);

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

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

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Andrew Tate is a...?',
        answers: [
            {text: 'A Top G', correct: true},
            {text: 'A women beater', correct: false},
            {text: 'A misogynist', correct: false},
            {text: 'A brokey', correct: false},
        ]
    },
    {
        question: 'Zyzz was...?',
        answers: [
            {text: 'Was a sickkunt', correct: true},
            {text: 'Was the god of aesthetics', correct: true},
            {text: 'Was a Sadkunt', correct: false},
            {text: 'Was the son of Zeus, brother of Hercules, father of aesthetics', correct: true},
        ]
    },
    {
        question: 'Who was Steve Jobs?',
        answers: [
            {text: 'Was the founder of Apple', correct: true},
            {text: 'Was the founder of Nokia', correct: false},
            {text: 'Was the founder of Microsoft', correct: false},
            {text: 'Was the founder of Samsung', correct: false},
        ]
    },
    {
        question: 'What is James Dean known for?',
        answers: [
            {text: 'Was a sigma male before the term existed', correct: true},
            {text: 'Was a model for vogue', correct: false},
            {text: 'Was the first James Bond actor', correct: false},
            {text: 'Was a cousin to Elvis Presley', correct: false},
        ]
    },
    {
        question: 'What is Muhammad Ali known for?',
        answers: [
            {text: 'Was a singer', correct: false},
            {text: 'Was a world-famous boxer ', correct: true},
            {text: 'Was a scientist', correct: false},
            {text: 'Was a world-famous muay thai fighter', correct: false},
        ]
    },
    {
        question: 'What is known about Bruce Lee?',
        answers: [
            {text: 'Was a martial art legend', correct: true},
            {text: 'Was a stand-up comedian', correct: false},
            {text: 'Was a world-famous painter', correct: false},
            {text: 'Was a student of the famous kung fu master Ip Man', correct: true},
        ]
    },
    {
        question: 'Leonardo Da Vinci, well-known expertise?',
        answers: [
            {text: 'Was a painter, sculptor, architect, dancer and scientist', correct: false},
            {text: 'Was a painter, sculptor, architect, musician and scientist', correct: true},
            {text: 'Was a painter, martial artist, architect, musician and scientist', correct: false},
            {text: 'Was a painter, sculptor, architect, musician and president', correct: false},
        ]
    },
    {
        question: 'Leonidas (I) was...?',
        answers: [
            {text: 'Was a king of the Greek city-state of Sparta', correct: true},
            {text: 'Was the king of Persia', correct: false},
            {text: 'Was the king who Led a small band of Greek allies at the Battle of Thermopylae', correct: true},
            {text: 'Was the king of Greek', correct: false},
        ]
    },
    {
        question: 'What is Arnold Schwarzenegger known for?',
        answers: [
            {text: 'Is known for his eight times Mr. Olympia', correct: false},
            {text: 'The first man on the moon', correct: false},
            {text: 'Bodybuilder, film actor and politician ', correct: true},
            {text: 'The CEO of Tesla', correct: false},
        ]
    },
    {
        question: 'Who is Micheal Jordan?',
        answers: [
            {text: 'The greatest basketball player of all time', correct: true},
            {text: 'the second greatest basketball player of all time', correct: false},
            {text: 'He switched his career from basketball to swimming and returned back to basketball again', correct: false},
            {text: 'He switched his career from basketball to baseball and returned back to basketball again', correct: true},
        ]
    },
]