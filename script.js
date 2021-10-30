const quizData = [
    {
        question: "Which is Most Used Programming Language",
        a: "Java",
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'a'
    },
    {
        question: 'Prime Minister of India?',
        a: 'Narender Modi',
        b: 'John Biden',
        c: 'Donald Trumph',
        d: 'Dr. Manmohan Singh',
        correct: 'a'
    }
];

const answerEls = document.querySelectorAll('.answer');

const quiz = document.getElementById('quiz');

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData
    [currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // Check To See The Answer..
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Your Score is ${score}/${quizData.length}</h2><button onClick = "location.reload()">Play Again :)</button>`;
        }
    }

})