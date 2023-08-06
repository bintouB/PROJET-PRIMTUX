let points=0;
window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
      let value = progress.getAttribute('data-value');
      progress.style.width = `${value}%`;
      let count = 0;
      let progressAnimation = setInterval(() => {
        count++;
      if (count >= value) {
        clearInterval(progressAnimation);
      }
    }, 15);
    });
  };
