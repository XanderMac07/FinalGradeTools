function estimateGrade() {
  const current = parseFloat(document.getElementById("currentGrade").value);
  const desired = parseFloat(document.getElementById("desiredGrade").value);
  const weight = parseFloat(document.getElementById("finalWeight").value);

  const result = document.getElementById("estimateResult");

  if (isNaN(current) || isNaN(desired) || isNaN(weight)) {
    return result.innerText = "⚠️ Fill all fields.";
  }
  if (current < 0 || current > 200) return result.innerText = "⚠️ Current Grade must be 0–200.";
  if (desired < 0 || desired > 200) return result.innerText = "⚠️ Desired Final Grade must be 0–200.";
  if (weight < 0 || weight > 100) return result.innerText = "⚠️ Final Weight must be 0–100.";

  const w = weight / 100;
  if (w === 0) {
    return result.innerText =
      desired > current ? "Final has no weight, cannot raise grade." :
      "Final has no weight, goal already met.";
  }

  const needed = (desired - current * (1 - w)) / w;
  result.innerText =
    needed > 100 ? `Need ${needed.toFixed(2)}% (over 100%).` :
    needed < 0 ? "Already safe, even with 0% on final." :
    `Need ${needed.toFixed(2)}% on final.`;
}

function calculateFinal() {
  const semester = parseFloat(document.getElementById("semesterGrade").value);
  const finalExam = parseFloat(document.getElementById("finalExamGrade").value);
  const weight = parseFloat(document.getElementById("calcFinalWeight").value);

  const result = document.getElementById("calcResult");

  if (isNaN(semester) || isNaN(finalExam) || isNaN(weight)) {
    return result.innerText = "⚠️ Fill all fields.";
  }
  if (semester < 0 || semester > 200) return result.innerText = "⚠️ Semester Grade must be 0–200.";
  if (finalExam < 0 || finalExam > 200) return result.innerText = "⚠️ Final Exam Grade must be 0–200.";
  if (weight < 0 || weight > 100) return result.innerText = "⚠️ Final Weight must be 0–100.";

  const w = weight / 100;
  const finalGrade = semester * (1 - w) + finalExam * w;
  result.innerText = `Your final grade is ${finalGrade.toFixed(2)}%.`;
}
