// Barre de progression
window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
    });
  };

document.addEventListener('DOMContentLoaded', function() {
    const validateButton = document.getElementById('validateBtn');
    const resultDisplay = document.getElementById('result');
    
    validateButton.addEventListener('click', function() {
        const checkboxes = document.querySelectorAll('input[name="choix"]');
        const totalQuestions = checkboxes.length;
        let score = 0;
        
        for (let i = 0; i < checkboxes.length; i++) {
            if ((checkboxes[i].value === '1' && checkboxes[i].checked) ||
                (checkboxes[i].value === '0' && !checkboxes[i].checked)) {
                score += 1;
            }
        }
        
        resultDisplay.textContent = `Score: ${score} / ${totalQuestions}`;
    });
});
//voir code Nèle qui donne 0 ou 1
