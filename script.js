/* 
  ============================
  GRADE TOOL JAVASCRIPT
  Two main functions:
   - estimateGrade(): What you need on the final to reach a goal
   - calculateFinal(): What your final grade is after the exam
  ============================
*/

/**
 * Estimate the grade needed on the final exam
 * Formula: 
 *   needed = (desired - current*(1 - weight)) / weight
 */
function estimateGrade() {
  // Grab values from inputs
  const current = parseFloat(document.getElementById("currentGrade").value);
  const desired = parseFloat(document.getElementById("desiredGrade").value);
  const weight = parseFloat(document.getElementById("finalWeight").value) / 100;

  // Validate input
  if (isNaN(current) || isNaN(desired) || isNaN(weight)) {
    document.getElementById("estimateResult").innerText = "⚠️ Please fill all fields.";
    return;
  }
  // Check ranges (grades 0–200, weight 0–100)
  if (semester < 0 || semester > 200 || finalExam < 0 || finalExam > 200) {
    document.getElementById("calcResult").innerText = "⚠️ Grades must be between 0 and 200.";
    return;
    
  }
  if (weight < 0 || weight > 1) { // divided by 100 earlier
    document.getElementById("calcResult").innerText = "⚠️ Weight must be between 0 and 100.";
    return;
  }

  // Calculate grade needed on final
  const needed = (desired - current * (1 - weight)) / weight;

  // Show result
  if (needed > 100) {
    document.getElementById("estimateResult").innerText =
      "You would need " + needed.toFixed(2) + "% on the final (over 100% possible).";
  } else if (needed < 0) {
    document.getElementById("estimateResult").innerText =
      "You already have enough! Even a 0% on the final gives you your goal.";
  } else {
    document.getElementById("estimateResult").innerText =
      "You need " + needed.toFixed(2) + "% on the final.";
  }
}

/**
 * Calculate final grade after the exam
 * Formula:
 *   final = semester*(1 - weight) + exam*weight
 */
function calculateFinal() {
  // Grab values from inputs
  const semester = parseFloat(document.getElementById("semesterGrade").value);
  const finalExam = parseFloat(document.getElementById("finalExamGrade").value);
  const weight = parseFloat(document.getElementById("calcFinalWeight").value) / 100;

  // Validate input
  if (isNaN(semester) || isNaN(finalExam) || isNaN(weight)) {
    document.getElementById("calcResult").innerText = "⚠️ Please fill all fields.";
    return;
  }

  // Calculate weighted final grade
  const finalGrade = semester * (1 - weight) + finalExam * weight;

  // Show result
  document.getElementById("calcResult").innerText =
    "Your final grade is " + finalGrade.toFixed(2) + "%.";
}
