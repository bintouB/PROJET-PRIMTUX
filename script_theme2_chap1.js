// Barre de progression
window.onload = function () {
  let bar = document.querySelectorAll('.bar');
  bar.forEach((progress) => {
    let value = progress.getAttribute('data-value');
    progress.style.width = `${value}%`;
  });
};

// Fonction pour gérer les questions
function handleQuestions() {
  const questions = document.querySelectorAll('.question');
  const validateBtn = document.getElementById('validateBtn');
  const pointsDisplay = document.querySelector('.points');

  let score = 0; // Score initial à 0

  
  if (validateBtn) {
    validateBtn.addEventListener('click', () => {
      let allCorrect = true;  // Variable qui permet de me dire si l'élève a répondu correctement à toutes les questions
      
      // Parcourir toutes les questions
      questions.forEach(question => {
        const radios = question.querySelectorAll('input[type="radio"]');
        const feedback = question.querySelector('.feedback');
        
        const correctAnswer = question.dataset.correct === 'true';
        const userAnswer = Array.from(radios).find(radio => radio.checked);
        
        // Gérer les réponses
        if (!userAnswer) {
          allCorrect = false;
        } else if (userAnswer.value === correctAnswer.toString()) {
          score += 10;
        } else {
          allCorrect = false;
        }
      });

      // Mettre à jour l'affichage du score
      pointsDisplay.textContent = score + " pts";

      // Redirection en fonction des réponses
      if (allCorrect) {
        // Rediriger vers la nouvelle page si toutes les réponses sont correctes
        
        window.location.href = 'resultats1.html';
      } else {
        // Rediriger vers la première page si au moins une réponse est incorrecte
        window.location.href = "resultat2.html"; 
      }
    });
  }
}

// Appel de la fonction handleQuestions
handleQuestions();
