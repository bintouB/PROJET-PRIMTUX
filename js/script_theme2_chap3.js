// Barre de progression
window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
    });
  };

document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitBtn');
  const resultDisplay = document.getElementById('result');

  submitButton.addEventListener('click', function() {
      const answers = ['c', 'b', 'c', 'b', 'c', 'b']; // Réponses correctes pour chaque question

      let score = 0;
      for (let i = 1; i <= answers.length; i++) {
          const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
          const question = document.getElementById(`q${i}`); // Ajout de la question correspondante

          if (selectedOption) {
              if (selectedOption.value === answers[i - 1]) {
                  score++;
                  selectedOption.parentElement.style.boxShadow = "0 0 5px green";
              } else {
                  // Ajouter une ombre rouge à l'option sélectionnée incorrectement
                  selectedOption.parentElement.style.boxShadow = "0 0 5px red"; // Appliquer le style à l'élément parent du radio input
              }
          }
      }

      resultDisplay.textContent = `Score: ${score} / ${answers.length}`;
  });
});
