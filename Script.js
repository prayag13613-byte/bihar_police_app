window.onload = function () {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main-menu").style.display = "block";
  }, 3000);
};

function startToday() {
  document.getElementById("content").innerHTML = `
    <h3>आज का प्रश्न (Set 1)</h3>
    <div id="timer"></div>
    <h2 id="question"></h2>
    <div id="options"></div>
    <div id="score" style="margin-top: 20px; font-size: 20px;"></div>
  `;
  startQuiz();
}

function showPrevious() {
  document.getElementById("content").innerHTML = `
    <h3>पिछले प्रश्न (Set 1, Set 2)</h3>
    <p>🚧 जल्द आएंगे...</p>
  `;
}

function showRank() {
  document.getElementById("content").innerHTML = `
    <h3>आज की Rank List</h3>
    <p>🚧 उपलब्ध नहीं है (Demo)</p>
  `;
}

const questions = [
  {
    question: "भारत के पहले प्रधानमंत्री कौन थे?",
    options: ["राजेन्द्र प्रसाद", "महात्मा गांधी", "नेहरू", "सरदार पटेल"],
    answer: "नेहरू"
  },
  {
    question: "भारत का राष्ट्रीय पशु कौन सा है?",
    options: ["शेर", "हाथी", "गैंडा", "चीता"],
    answer: "शेर"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById("timer").textContent = `समय: ${timeLeft} सेकंड`;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = `समय: ${timeLeft} सेकंड`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function showQuestion() {
  clearInterval(timer);
  if (currentQuestionIndex >= questions.length) {
    showScore();
    return;
  }
  const q = questions[currentQuestionIndex];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.style.display = "block";
    btn.style.margin = "10px auto";
    btn.style.padding = "15px";
    btn.style.width = "80%";
    btn.style.fontSize = "18px";
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
  startTimer();
}

function checkAnswer(selected) {
  clearInterval(timer);
  const correct = questions[currentQuestionIndex].answer;
  if (selected === correct) {
    score++;
  }
  currentQuestionIndex++;
  showQuestion();
}

function showScore() {
  document.getElementById("question").textContent = "Quiz समाप्त हो गया!";
  document.getElementById("options").innerHTML = "";
  document.getElementById("timer").textContent = "";
  document.getElementById("score").textContent = `आपका स्कोर: ${score} / ${questions.length}`;
}
window.onload = function() {
  // Aapka JavaScript code yahan likhein
};
