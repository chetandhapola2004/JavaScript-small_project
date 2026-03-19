function append(click) {
    document.getElementById("display").value += click;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deletee() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let answer = document.getElementById("display");
        answer.value = eval(answer.value);
}
