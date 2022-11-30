"use strict";

//! EX.1

/*
- [ ] złap elementy za pomocą querySelectora
- [ ] do buttona z tekstem start przypnij funkcje start ktora uruchamia sterowanie swiatlami drogowymi,
- [ ] do buttona z tekstem stop przypnij funkcje stop ktora zatrzymuje strowanie swiatlami drogowymi,<br />
      Zatrzymanie sterowania swiatlami uruchamia miganie pomaranczowego światła.<br />
      Uruchamianie świateł polega na zmianie stanów, kolorami możesz manipulować za pomocą przełączania klas lub zmianą koloru z poziomu css.
- [ ] stan 1 to czerwone swiatlo przez 3 sekundy, reszta czarna,
- [ ] stan 2 to czerwone i pomaranczowe przez 2 sekudy, reszta czarna
- [ ] stan 3 to światło zielone przez 2 sekundy, reszta czarna,
- [ ] stan 4 to świtało pomaranczowe przez sekude, reszta czarna,
- [ ] powrot do stanu 1 i rozpoczecie cyklu

*/

// const container = document.querySelector(".container");
// const boxes = document.querySelectorAll(".box");
// const boxOne = document.querySelector(".box1");
// const boxTwo = document.querySelector("#box2");
// const boxThree = document.querySelector("#box2").nextElementSibling;
// const buttonStart = document.querySelector(".btn_start");
// const buttonStop = document.querySelector(".btn_stop");

// Start event
buttonStart.addEventListener("click", () => {
    clearInterval(blink);
    blinkArr.forEach(clearTimeout);
    start();
    state = setInterval(start, 9000);
});

// Stop event
buttonStop.addEventListener("click", () => {
    clearTimeoutArr.forEach(clearTimeout);
    clearInterval(state);
    handleLight();
});

// Sequence start

let state;
let clearTimeoutArr = [];

const start = () => {
    clearTimeoutArr.push(setTimeout(firstState, 1000));
    clearTimeoutArr.push(setTimeout(secondState, 4000));
    clearTimeoutArr.push(setTimeout(thirdState, 6000));
    clearTimeoutArr.push(setTimeout(fourthState, 8000));
    console.log(clearTimeoutArr);
};

function firstState() {
    boxOne.style.backgroundColor = "#ff0000";
    boxTwo.style.backgroundColor = "#000";
    boxThree.style.backgroundColor = "#000";
}

function secondState() {
    boxOne.style.backgroundColor = "#ff0000";
    boxTwo.style.backgroundColor = "#ffa500";
}

function thirdState() {
    boxOne.style.backgroundColor = "#000";
    boxTwo.style.backgroundColor = "#000";
    boxThree.style.backgroundColor = "green";
}

function fourthState() {
    boxOne.style.backgroundColor = "#000";
    boxTwo.style.backgroundColor = "#ffa500";
    boxThree.style.backgroundColor = "#000";
}

// Blinking light
let blink;
let blinkArr = [];
const handleLight = () => {
    blinkArr.push(
        setTimeout(() => {
            boxOne.style.backgroundColor = "#000";
            boxThree.style.backgroundColor = "#000";
        }, 2000)
    );

    const lightBlink = () => {
        blinkArr.push(
            setTimeout(() => {
                boxTwo.style.backgroundColor = "#000";
                console.log("Czarny");
            }, 500)
        );

        blinkArr.push(
            setTimeout(() => {
                boxTwo.style.backgroundColor = "#ffa500";
                console.log("Pomarańcz");
            }, 1000)
        );
    };

    blink = setInterval(lightBlink, 2000);
};

//! EX.2
/*
Zaimplementuj stronę z frontendmentor dostępną pod tym [linkiem](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX)

*/
//! EX.3
/*
Stwórz funkcję walidującą numer ISBN, numer ISBN musi mieć 13 cyfr.
*/

function validateISBN() {
    let regexp = /^([0-9]{13})$/g;

    if (ISBN.value.match(regexp)) {
        ISBN.style.borderColor = "green";
    } else {
        ISBN.style.borderColor = "red";
    }
}

// validateISBN(123456789012);
//! EX.4
/*
Stwórz funkcję walidującą numer telefonu, musi zaczynać się od + i zawierać 11 cyfr.

*/
function phoneValidation() {
    let regexp = /^[\+][1-9]{2}[\s][0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{3}$/g; //* Jezu nie wiem co tu się dzieje (dobra mniej wiecej wiem XD)

    if (phone.value.match(regexp)) {
        phone.style.borderColor = "green";
    } else {
        phone.style.borderColor = "red";
    }
}

// phoneValidation("+48 796-437-090");
//! EX.5
/*
Stwórz funkcę walidującą czy podany tekst nie zawiera cyfr.

*/
// //? Czy o to chodziło?
function notNumberText() {
    let regexp = /^[a-zA-Z\s]*$/;

    if (notname.value.match(regexp)) {
        notname.style.borderColor = "green";
    } else {
        notname.style.borderColor = "red";
    }
}

// notNumberText("Co ja tam wiem");
//! EX.6
/*
Strona podziel się książką. <br />
Stwórz formularz z polami do podania:
- [ ] numeru ISBN,
- [ ] numeru telefonu,
- [ ] imie i nazwisko,
- [ ] link do okladki, (pole opcjonalne)
Do formularza na zdarzenie onSubmit podepnij stworzone wczesniej funkcje walidujące. <br />
Na zdarzeniu powstrzymaj domyślne zachowanie formularza za pomocą e.preventDefault() aby strona sie nie odswiezyla.
Podane dane dodaj do tablicy jako obiekt i wygeneruj na ich podstawie UI, które na górze ma zdjęcie książki a pod spodem numer ISBN, imie i nazwiso oraz numer telefonu.
*/

const submit = document.querySelector(".submit");
const ISBN = document.querySelector(".ISBN_input");
const phone = document.querySelector(".phone_input");
const notname = document.querySelector(".name_input");
const link = document.querySelector(".link_input");
const bookForm = document.querySelector(".book");

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let bookArr = [];

    validateISBN();
    phoneValidation();
    notNumberText();

    bookArr.push({
        ISBN: `${ISBN.value}`,
        phone: `${phone.value}`,
        name: `${notname.value}`,
    });

    console.log(bookArr);

    const bookElement = document.createElement("div");
    bookElement.classList.add("user_bio");
    bookElement.innerHTML = "<picture>TUTAJ MA BYĆ ZDJĘCIE</picture>";

    const content = document.createElement("p");
    content.classList.add("ISBN");
    content.innerText = `${bookArr[0].ISBN}`;
    console.log(content.innerHTML);

    const contentOne = document.createElement("p");
    contentOne.classList.add("name");
    contentOne.innerText = `${bookArr[0].name}`;
    console.log(contentOne.innerHTML);

    const contentTwo = document.createElement("p");
    contentTwo.classList.add("phone");
    contentTwo.innerText = `${bookArr[0].phone}`;
    console.log(contentTwo.innerHTML);

    bookElement.append(content, contentOne, contentTwo);

    bookForm.after(bookElement);
});
