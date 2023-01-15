"use strict";

//Inputs

const billInput = document.querySelector(".bill_input");
const peopleInput = document.querySelector(".people_input");
const customTip = document.querySelector(".tip_custom-percentage");

//Error paragraph

const peopleErrorInput = document.querySelector(".paragraph_invalid");

//Buttons

const btnReset = document.querySelector(".reset_btn");
const btnTip = document.querySelectorAll(".tip_percentage");
const btnCustom = document.querySelector(".tip_custom-percentage");
//Results

const tipAmount = document.querySelector("#tip_amount");
const totalAmount = document.querySelector("#total");

//! Left side of tip calc
//Parsing to number form input string

let billValue;
let peopleValue;

billInput.addEventListener("input", () => {
    billValue = parseFloat(billInput.value).toFixed(2);
    console.log(billValue);

    if (billInput.value <= 0 || isNaN(billValue)) {
        billInput.classList.add("bill_input-error");
    } else {
        billInput.classList.remove("bill_input-error");
    }
    getBill();
});

peopleInput.addEventListener("input", () => {
    peopleValue = parseFloat(peopleInput.value, 2) || 0;

    console.log(peopleValue);

    if (peopleInput.value <= 0 || peopleInput.value === "") {
        peopleInput.classList.add("people_input-error");
        peopleErrorInput.removeAttribute("hidden");
    } else {
        peopleInput.classList.remove("people_input-error");
        peopleErrorInput.setAttribute("hidden", true);
    }
    getBill();
});

//Tips percentage and click events handling
//! item = btn

let tipValue;

btnTip.forEach((item) => {
    item.addEventListener("click", handleClick);
});

function handleClick(event) {
    btnTip.forEach((btn) => {
        // clear active state
        btn.classList.remove("active_btn");

        if (event.target.innerHTML == btn.innerHTML) {
            btn.classList.add("active_btn");
            console.log(event.target.innerHTML);
            tipValue = parseFloat(event.target.innerHTML) / 100;
            console.log(tipValue);
        }
    });
    calc();
    getBill();
}
// Fixed tip value
function calc() {
    let total = tipValue * billValue;
    console.log(total);
}
// Custom tip value
function calcCustom() {
    let totalCustom = customValue * billValue;
    console.log(totalCustom);
}

// Custom btn

let customValue;

btnCustom.addEventListener("input", (e) => {
    if (e.target.innerHTML === btnCustom.innerHTML) {
        customValue = parseFloat(Number(btnCustom.value)) / 100;
        tipValue = customValue;
    }

    calcCustom();
    getBill();
});

//! Right side of tip calc

// Injecting values to the total & tip amount

function getBill() {
    if (peopleValue >= 1 && billValue > 0) {
        let tip = (billValue * tipValue) / peopleValue;
        let total = (Number(billValue) + tip) / peopleValue;
        console.log(total);

        tipAmount.innerHTML = `$${tip.toFixed(2)}`;
        totalAmount.innerHTML = `$${total.toFixed(2)}`;
    }
}

// Reset

btnReset.addEventListener("click", reset);

function reset() {
    tipAmount.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
    btnCustom.value = "";
    billInput.value = "";
    peopleInput.value = "";

    btnTip.forEach((e) => {
        e.classList.remove("active_btn");
    });
}
