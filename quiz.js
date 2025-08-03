// 1. Define function
function checkAnswer() {

// 2. Identify correct answer
    let correctAnswer = "4";
}


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

// 4. Compare userAnswer with correctAnswer and give feedback
    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = "Correct! Well done.";
    } else {
        feedbackEl.textContent = "That's incorrect. Try again!";
    }
}

//Add event listener to submit button
document.getElementById("submit-answer")?.addEventListener("click", checkAnswer);
