/**
 * Create the class Calculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */

class Calculator {
    #history = [];
    #historyList = document.getElementById("history-list");
    #calculatorScreen = document.querySelector("#calculator .screen");
    #equalsBtn = document.querySelector("#calculator .eval");
    #calculatorButtons = document.querySelectorAll("#calculator span");
    #clearButton = document.querySelector("#calculator .clear");
    constructor(calculatorScreen) {
        this.init();
    }

    init() {
        this.bindButtons();
        this.bindClear();
        this.bindEquals();
    }

    bindButtons() {
        //this code listen to every key on the calculator and add the value on the screen
        this.#calculatorButtons.forEach((key) => {
            if (key.innerText !== "=") {
                key.addEventListener("click", (e) => this.print(e.target.innerText));
            }
        });
    }

    bindClear() {
        this.#clearButton.addEventListener("click", e => this.clear());
    }

    //this code listen to every key on the calculator and add the value on the screen
    bindEquals() {
        this.#equalsBtn.addEventListener("click", e => this.equals());
    }

    //once the = key is pressed, it keeps the last value in memory in an array
    addToHistory(val) {
        this.#history.push(val);
        const li = document.createElement('li');
        li.innerText = val;
        this.#historyList.appendChild(li);
    }

    //returns the value (thanks to an 'eval' function)
    equals() {
        let value = this.#calculatorScreen.innerText;
        //we replace x => *
        if (value.indexOf("x")) value = value.replace(/x/g, "*");
        value = eval(value);
        this.addToHistory(this.#calculatorScreen.innerText);
        this.#calculatorScreen.innerHTML = value;
    }

    //clears the history
    clear() {
        this.#calculatorScreen.innerHTML = ""
    }

    //update calculator display
    print(val) {
        this.#calculatorScreen.innerHTML += val;
    }
}

const calculator = new Calculator();