//dépot barre de progression Aminata
window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
    });
  };


//dépot du 8 Aout bintou

function handleQuestions() {
const questions = document.querySelectorAll('.question');
const validateBtn = document.getElementById('validateBtn');
const pointsDisplay = document.querySelector('.points');

let score = 0; // Score initial à 0

// Vérifier si le bouton de validation existe avant d'ajouter l'écouteur d'événement
if (validateBtn) {
    validateBtn.addEventListener('click', () => {

validateBtn.addEventListener('click', () => {
  let hasError = false;
  let allCorrect = true;  // Variable qui permet de me dire si l'élève à répondu bon a toutes les questions
  
  // test pour chaque question
  questions.forEach(question => {
    const radios = question.querySelectorAll('input[type="radio"]');
    const feedback = question.querySelector('.feedback');
    
    const correctAnswer = question.dataset.correct === 'true';
    const userAnswer = Array.from(radios).find(radio => radio.checked);
    
    // si aucune réponse n'est entrée
    if (!userAnswer) {
      feedback.textContent = 'Veuillez répondre à la question.';
      feedback.style.color = 'red';
      hasError = true;
    } 
    // si l'élève a bien répondu
    else if (userAnswer.value === correctAnswer.toString()) {
      feedback.textContent = 'Bonne réponse !';
      feedback.style.color = 'green';
      score += 10;
    } 
    // si l'élève n'a pas entré la bonne réponse
    else {
      feedback.textContent = 'Mauvaise réponse !';
      feedback.style.color = 'red';
      hasError = true;
    }


    // si l'élève n'a pas entré de réponse OU si la réponse qu'il a entré est fausse : la variable allCorrect prend la valeur false
    if (!userAnswer || userAnswer.value !== correctAnswer.toString()) {
        allCorrect = false;
      }
  });

    // Mise à jour l'affichage du score
    pointsDisplay.textContent = score + " pts";

   // j'hésite a le garder car dans tout les cas une autre page va s'ouvrir si il a répondu bon a toutes les questions
  if (!hasError) {
    alert('Toutes vos réponses sont correctes !');
  }

  if (allCorrect) {
    // Rediriger vers la nouvelle page si toutes les réponses sont correctes
    window.location.href = 'resultats1.html';
  }
    else{
        window.location.href = 'resultats2.html';
      }
});
});
}
}
  
// Appel de la fonction handleQuestions
handleQuestions();

function test(nom,n) {
  let points=0;
  var rep=true;
  let reponse_juste=0;
  for (i=0; i<n; i++) 
  {
    if (nom[i].value==0 && nom[i].checked==true) rep=false;
    if (nom[i].value==1 && nom[i].checked==true) 
    {
      points+=10; 
      reponse_juste++;
    }
  }
  if (reponse_juste!=0 && rep==false) points=0;
  pointsDisplay.textContent = points + " pts";
  return ;
  }

