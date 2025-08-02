function checkAnswer() {
    let correctAnswer = "4";
}

// Identify correct answer
let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
console.log(userAnswer)

// 3. Retrieve the user's answer
    const selected = document.querySelector('input[name="quiz"]:checked'); 
    const feedbackEl = document.getElementById("feedback"); 

    if (!feedbackEl) return; // safety: if feedback element is missing, abort

    if (!selected) {
        // no selection made
        feedbackEl.textContent = "Please select an answer before submitting.";
        return;
    }
    //If the value is accessed,store in userAnswer variable
    const userAnswer = selected.value; 
