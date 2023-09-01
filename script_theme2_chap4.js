// Barre de progression
window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
    });
  };


document.addEventListener('DOMContentLoaded', function() {
  const advertisements = document.querySelectorAll('.advertisement');
  const validateBtn = document.getElementById('validateBtn');
  const resultDisplay = document.getElementById('result');

  advertisements.forEach(advertisement => {
    advertisement.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/plain', advertisement.dataset.category);
    });

    advertisement.addEventListener('dragend', function() {
      advertisement.style.opacity = '0.5';
    });
  });

  validateBtn.addEventListener('click', function() {
    let score = 0;
    advertisements.forEach(advertisement => {
      const ad_category = advertisement.dataset.category;
      const matchedCategory = document.querySelector(`.category[data-category="${category}"]`);

      if (ad_category==matchedCategory) {
        advertisement.style.opacity = '0.5';
        advertisement.style.boxShadow = '0 0 10px green';
        score++;
      } else {
        advertisement.style.opacity = '1';
        advertisement.style.boxShadow = '0 0 10px red';
      }
    });
    resultDisplay.textContent = `Score: ${score} / ${advertisements.length}`;
  });
});
