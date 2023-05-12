const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

/* Takes variables from root in css file */
const styles = getComputedStyle(document.documentElement);
const posColor = styles.getPropertyValue("--green");
const negColor = styles.getPropertyValue("--red");
const defColor = styles.getPropertyValue("--paragraph");

increase.addEventListener("click", function() {
    UpdateCounter("increase");
});

decrease.addEventListener("click", function() {
    UpdateCounter("decrease");
});

reset.addEventListener("click", function() {
    UpdateCounter("reset");
})

function UpdateCounter(action) {
    let counter = document.getElementById("count");
    switch (action) {
        case "increase":
            counter.innerHTML = Number(counter.innerHTML) + 1;
            break;
        case "decrease":
            counter.innerHTML = Number(counter.innerHTML) - 1;
            break;
        case "reset":
            counter.innerHTML = 0;
            break;
    }
    SetCounterColor();
}

function SetCounterColor() {
    let counter = document.getElementById("count");
    let counterVal = Number(counter.innerHTML);
    if (counterVal > 0) counter.style.color = posColor;
    else if (counterVal < 0) counter.style.color = negColor;
    else counter.style.color = defColor;
}