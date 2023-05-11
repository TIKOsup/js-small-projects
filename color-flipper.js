const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.getElementById("color-id");
const btn = document.getElementById("upd-btn");

btn.addEventListener("click", function() {
    let hex_code = "#";
    for (let i = 0; i < 6; i++) {
        hex_code += HEX[Math.floor(Math.random() * HEX.length)];
    }
    document.body.style.backgroundColor = hex_code;
    color.textContent = hex_code;
})