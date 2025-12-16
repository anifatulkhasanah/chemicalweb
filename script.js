/* NAVIGASI */
function goHome() {
    window.location.href = "index.html";
}

function goBack() {
    window.location.href = "index.html";
}

/* QUIZ */
let score = 0;
let currentQuestion = 0;

function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
        alert("Jawaban benar ✅");
    } else {
        alert("Jawaban salah ❌");
    }
    currentQuestion++;
}

/* ALERT GLOBAL */
function showMessage(msg) {
    alert(msg);
}
