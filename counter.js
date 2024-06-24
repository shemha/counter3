(() => {
    const $counter = document.getElementById("js-counter");

    const $step = document.getElementById("js-step-num");

    let setNum = 1;
    $step.addEventListener("input", (e) => {
        setNum = parseInt(e.currentTarget.textContent);
    });

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);

        console.log(setNum);

        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + setNum;
        } else {
            $counter.textContent = currentCount - setNum;
        }
    }

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e))
    }
})();