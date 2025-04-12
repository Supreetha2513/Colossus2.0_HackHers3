const form = document.getElementById("quiz-form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  let score = 0;
  for (let [key, value] of formData.entries()) {
    score += parseInt(value);
  }

  let level = "";
  if (score <= 4) level = "🔰 Beginner";
  else if (score <= 7) level = "⚙️ Intermediate";
  else level = "🧠 Expert";

  result.innerText = `Your Score: ${score}/10\nYou are at the ${level} level!`;
});