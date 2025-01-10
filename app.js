// Functie die wordt aangeroepen wanneer de gebruiker de quiz verzendt
function submitQuiz() {
  const form = document.getElementById("quizForm"); // Haal het formulier op
  const formData = new FormData(form); // Verkrijg de ingevulde gegevens van het formulier
  let score = 0; // Begin met een score van 0

  // Antwoorden van de juiste antwoorden voor de vragen (pas aan indien nodig)
  const correctAnswers = {
    q1: "b", // Antwoord voor vraag 1 is B (Ongeveer 2 miljard)
    q2: "b", // Antwoord voor vraag 2 is B (Islam)
    q3: "a", // Antwoord voor vraag 3 is A (Behandelen op basis van ras/religie/geslacht)
    q4: "b", // Antwoord voor vraag 4 is B (Verdeeldheid en wantrouwen)
    q5: "a", // Antwoord voor vraag 5 is A (Minder kansen op werk en sociale acceptatie)
    q6: "a", // Antwoord voor vraag 6 is A (Moslims goedkeuren geen geweld)
    q7: "a", // Antwoord voor vraag 7 is A (Bevorderen van begrip en respect voor verschillende culturen)
  };

  // Controleer de antwoorden
  for (let [question, answer] of formData.entries()) {
    if (correctAnswers[question] === answer) {
      score++; // Verhoog de score als het antwoord correct is
    }
  }

  // Toon het resultaat
  const resultElement = document.getElementById("quizResult");
  resultElement.innerHTML = `<h3>Je score is: ${score} van de 7</h3>`;
  if (score === 7) {
    resultElement.innerHTML +=
      "<p>Uitstekend! Je hebt alles correct beantwoord!</p>";
  } else if (score >= 4) {
    resultElement.innerHTML +=
      "<p>Goed gedaan! Je hebt een goede score behaald!</p>";
  } else {
    resultElement.innerHTML +=
      "<p>Probeer het opnieuw! Je kunt meer leren over dit onderwerp.</p>";
  }
}
