const userInput = document.getElementById("num");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");

const runMultiplier = (userInput) => {
    result.innerHTML = "";

    for(let i = 1; i <= 10; i++){
        const col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML = `
            <div class="num">${i}</div>
            <div class="times">&times;</div>
            <div class="multi">${userInput}</div>
            <div class="equal">&equals;</div>
            <div class="output">${i * userInput}</div>
        `;

        col.style.animationDelay = `${i * 0.2}s`;
        result.appendChild(col);
    }
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValue = Number(userInput.value);
    if(!inputValue || inputValue < 1) return;
    runMultiplier(inputValue);
    userInput.value = "";
});

btn.disabled = true;

userInput.addEventListener("input", () => {
    btn.disabled = !userInput.value;
});