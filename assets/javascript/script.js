// FILE: assets/javascript/script.js

const questions = [
    {
        question: "What is the interval between C and E?",
        options: ["Major Third", "Perfect Fourth", "Minor Third", "Perfect Fifth"],
        answer: "Major Third"
    },
    {
        question: "What is the interval between A and C?",
        options: ["Major Third", "Perfect Fourth", "Minor Third", "Perfect Fifth"],
        answer: "Minor Third"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn', 'btn-outline-primary', 'btn-block');
        button.onclick = () => selectOption(option);
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    const resultElement = document.getElementById('result');
    quizContainer.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
}

document.getElementById('submit-btn').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        selectOption(selectedOption.value);
    }
});

loadQuestion();