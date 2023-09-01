const themeState = {
  internetEtMoi: true, // Premier thème débloqué initialement
  maPrecieuseAttention: false,
  selfiestime: false
};

function debloquerTheme(themeName) {
  if (!themeState[themeName]) {
    const cadnaElement = document.querySelector(`.theme-${themeName} .cadna`);
    if (cadnaElement) {
      cadnaElement.style.display = 'none';
    }
    themeState[themeName] = true;
  }
}

//dépot barre de progression Aminata
window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
    });
  };


//dépot du 8 Aout bintou
const pointsDisplay = document.querySelector('.points');

function handleQuestions() {
const questions = document.querySelectorAll('.question');
const validateBtn = document.getElementById('validateBtn');

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

// Depot Nele 31/08/23
 function test2(n){ // modification de la fonction test

  let score=0;  // le score est initialement a 0

  for(let i=1; i<=n;i++){ // pour i allant de 1 au nbre de questions posees

    let reponse=false;             // on initialise le resultat que l'eleve a considere pour une question a faux
    let toutvrai=true;             // on initialise une var qui verifie si il n'existe aucune reponse fausse cochee a vrai 
    let reponse_cochee=0;          // on initialise la reponse cochee par l'eleve a 0 (faux)

    const Tab_box = document.getElementsByName(`choix${i}`); // on insere dans un tableau les differentes cases a cocher pour une question

    for(let checkbox of Tab_box){ // on parcourt ces cases une par une

      let bonne_reponse=parseInt(checkbox.getAttribute("value")); // on prend la valeur qui correspond a la case (1 ou 0 = vrai ou faux)

      if(checkbox.checked){        // si l'eleve a coche cette case
        if (bonne_reponse === 0) { // mais que c'etait une reponse fausse
          toutvrai = false;        // alors on enregistre le fait qu'il y ai une erreur a cette question
        }
        reponse = true;            // on considere que l'eleve a trouve cette reponse juste
      } else {                     // sinon si l'eleve n'a pas coche cette case 
        if (bonne_reponse === 1) { // mais que c'etait une bonne reponse
          toutvrai = false;        // on enregistre l'erreur
        }
      }
    }

    if (reponse && toutvrai) {     // si l'eleve a considere des reponses justes et qu'il n'a faot aucune erreur dans celles-ci
      score++;                     // on lui accorde 1 points
    }
  }

  alert(`Score : ${score} / ${n}`);
}

