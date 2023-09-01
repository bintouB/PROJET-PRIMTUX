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

document.addEventListener('DOMContentLoaded', function() {
  const themeElements = document.querySelectorAll('.theme');
  
  themeElements.forEach(themeElement => {
    const themeName = themeElement.classList[1].replace('theme-', '');

    themeElement.addEventListener('click', function(event) {
      event.preventDefault();

      if (themeState[themeName]) {
        let themePage ;
        if (themeName == 'maPrecieuseAttention') {
          themePage = 'theme2';
        } else if (themeName == 'selfiestime') {
          themePage = 'theme3';
        } else {
          themePage = 'theme1';
        }
        // Thème débloqué, rediriger vers la page du thème
        window.location.href = `${themePage}.html`;
      } else {
        // Thème bloqué, afficher un message d'alerte
        alert("Le thème est bloqué.");
      }
    });
  });

  // Débloquer le thème maPrecieuseAttention au chargement de la page
  debloquerTheme('maPrecieuseAttention');
  // Débloquer le thème maPrecieuseAttention au chargement de la page
  debloquerTheme('selfiestime');
  //le débloquage ce fait par rapport au point
});
