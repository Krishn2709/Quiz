const questions = [
  { question: "What is 3 + 5?", options: ["7", "8", "9", "10"], correct: 1 },
  { question: "What is 12 - 4?", options: ["6", "7", "8", "9"], correct: 0 },
  { question: "What is 6 x 7?", options: ["42", "40", "48", "45"], correct: 0 },
  { question: "What is 9 ÷ 3?", options: ["3", "4", "2", "5"], correct: 0 },
  {
    question: "What is 15 + 10?",
    options: ["20", "25", "30", "35"],
    correct: 1,
  },
  { question: "What is 18 ÷ 2?", options: ["7", "8", "9", "10"], correct: 2 },
  { question: "What is 5 x 5?", options: ["20", "25", "30", "35"], correct: 1 },
  { question: "What is 14 - 6?", options: ["7", "8", "9", "10"], correct: 0 },
  { question: "What is 8 + 6?", options: ["12", "13", "14", "15"], correct: 2 },
  { question: "What is 16 ÷ 4?", options: ["3", "4", "5", "6"], correct: 1 },
];

let queIndex = 0;
let score = 0;
let ans = new Array(questions.length).fill(null);

const questionsElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const progressBar = document.querySelector(".progress-bar .progress");
const nextBtn = document.getElementById("nextBtn");
const numberContainer = document.querySelector(".question-numbers");
const rocket = document.querySelector(".rocket");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result");
const scoreElement = document.getElementById("score");

for (let i = 0; i < questions.length; i++) {
  const queNumber = document.createElement("div");
  queNumber.className = "number";
  queNumber.textContent = i + 1;
  numberContainer.appendChild(queNumber);
}

function updateQuestionNumber() {
  const numbers = document.querySelectorAll(".number");
  numbers.forEach((number, i) => {
    number.classList.remove("active", "correct", "incorrect");
    if (i === queIndex) {
      number.classList.add("active");
    } else if (ans[i] !== null) {
      if (ans[i] === questions[i].correct) {
        number.classList.add("correct");
      } else {
        number.classList.add("incorrect");
      }
    }
  });
}

function updateProgressBar() {
  const progress = (queIndex + 1) * 10;
  progressBar.style.width = `${progress}%`;
  if (ans[queIndex] === questions[queIndex].correct) {
    progressBar.style.background = "#28a745";
  } else {
    progressBar.style.background = "#dc3545";
  }
  rocket.style.left = `${progress}%`;
}

function displayQuestion() {
  const question = questions[queIndex];
  questionsElement.textContent = `${queIndex + 1}. ${question.question}`;

  optionsElement.innerHTML = "";
  question.options.forEach((option, i) => {
    const button = document.createElement("div");
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(i));
    optionsElement.appendChild(button);
  });

  if (queIndex === 9) {
    nextBtn.textContent = "Submit";
  } else {
    nextBtn.textContent = "Next";
  }

  nextBtn.disabled = ans[queIndex] === null;
  updateQuestionNumber();
}

function selectOption(index) {
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.classList.remove("selected");
  });
  options[index].classList.add("selected");
  ans[queIndex] = index;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  if (queIndex < questions.length - 1) {
    queIndex++;
    updateProgressBar();
    displayQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  score = ans.reduce((result, answer, index) => {
    if (answer === questions[index].correct) {
      return result + 1;
    } else {
      return result;
    }
  }, 0);

  questionContainer.style.display = "none";
  resultContainer.style.display = "block";
  scoreElement.textContent = score;
}

displayQuestion();
updateQuestionNumber();
