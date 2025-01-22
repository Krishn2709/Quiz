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

const questionsElement = document.getElementById("question");
const options = document.getElementById("options");
const progressBar = document.getElementById("progression-bar");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const progressIndicator = document.getElementById("progress-indicator");
const numberContainer = document.getElementById("question-numbers");

for (let i = 0; i < questions.length; i++) {
  const queNumber = document.createElement("div");
  queNumber.className = "number";
  queNumber.textContent = i + 1;
  numberContainer.appendChild(queNumber);
}

function updateNumber() {
  const number = document.querySelectorAll(".number");
}
