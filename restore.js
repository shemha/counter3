(() => {
  const $step = document.getElementById("js-step-num");

  const clickHandler = () => {
      $step.textContent = 1;
  }

  document.getElementById("js-restore-button").addEventListener("click", clickHandler)
})();