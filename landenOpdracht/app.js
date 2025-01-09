function submitQuiz() {
    // Verzamel alle antwoorden
    const form = document.getElementById('quizForm');
    const answers = {
        q1: form.querySelector('input[name="q1"]:checked')?.value,
        q2: form.querySelector('input[name="q2"]:checked')?.value,
        q3: form.querySelector('input[name="q3"]:checked')?.value,
        q4: form.querySelector('input[name="q4"]:checked')?.value,
        q6: form.querySelector('input[name="q6"]:checked')?.value,
        q7: form.querySelector('input[name="q7"]:checked')?.value,
        q8: form.querySelector('input[name="q8"]:checked')?.value,
        q9: form.querySelector('input[name="q9"]:checked')?.value,
        q10: form.querySelector('input[name="q10"]:checked')?.value,
        q11: form.querySelector('input[name="q11"]:checked')?.value,
        q12: form.querySelector('input[name="q12"]:checked')?.value,
    };

    // Controleer of alle vragen beantwoord zijn
    for (let question in answers) {
        if (!answers[question]) {
            alert(`Beantwoord alle vragen!`);
            return;
        }
    }

    // Definieer de juiste antwoorden (bijvoorbeeld 'b' voor alle vragen)
    const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'b',
        q5: 'a',
        q6: 'a',
        q7: 'b',
        q8: 'b',
        q9: 'a',
        q10: 'b',
        q11: 'b',
        q12: 'b',
    };

    // Tel het aantal juiste antwoorden
    let score = 0;
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Toon het resultaat
    alert(`Je hebt ${score} van de 12 vragen goed beantwoord!`);
}
