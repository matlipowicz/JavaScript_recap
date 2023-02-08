export {};
import { RootObject } from "./types";
/*

# Generator formularzy

## Story

Klient chciałby otrzymać możliwość generowania formularzy na podstawie parametrów konfiguracyjnych w pliku JSON.

## Podpowiedź

Stwórz funkcję która zmieni podanego jej JSONa w formularz, który potem pojawi się na stronie. JSON powienien zawierać nazwę pola, label, typ i walidację. Funkcja ma generować formularz na stronie internetowej.
Kształt obiektu konfiguracyjnego definiowany jest podczas wykonywania zadania przez programistę/kę

## Dodatkowe

Funkcja na podstawie walidacji sprawdza formularz przed wysłaniem i jeżeli pola są nieprawidłowo wypełnione to wskazuje użytkownikowi które.

https://www.youtube.com/watch?v=JKey68BKex8

*/

const main = document.querySelector(".generator") as HTMLDivElement;

window.addEventListener("load", validateEmail);

//! Validation

async function validateEmail() {
    const data: RootObject = await collectDataJSON("./form.json");
    const formData = await generateContent(data);

    const emailInput = document.querySelector(".input__email") as HTMLInputElement;
    const firstNameInput = document.querySelector(".input__firstname") as HTMLInputElement;
    const lastNameInput = document.querySelector(".input__lastname") as HTMLInputElement;
    const formBtn = document.querySelector(".form-submit__btn") as HTMLInputElement;

    const pattern = new RegExp(formData.form.properties.email.pattern);

    emailInput.addEventListener("keyup", () => {
        if (!emailInput.value.match(pattern)) {
            emailInput.style.outlineColor = "red";
            emailInput.style.borderColor = "red";

            return false;
        } else if (emailInput.value.match(pattern)) {
            emailInput.style.outlineColor = "#646cff";
            emailInput.style.borderColor = "transparent";
            return true;
        }
    });

    firstNameInput.addEventListener("keyup", () => {
        if (firstNameInput.value.length <= 3) {
            firstNameInput.style.outlineColor = "red";
            firstNameInput.style.borderColor = "red";
            return false;
        } else if (firstNameInput.value.length > 3) {
            firstNameInput.style.outlineColor = "#646cff";
            firstNameInput.style.borderColor = "transparent";
            return true;
        }
    });

    lastNameInput.addEventListener("keyup", () => {
        if (lastNameInput.value.length <= 3) {
            lastNameInput.style.outlineColor = "red";
            lastNameInput.style.borderColor = "red";
            return false;
        } else if (lastNameInput.value.length > 3) {
            lastNameInput.style.outlineColor = "#646cff";
            lastNameInput.style.borderColor = "transparent";
            return true;
        }
    });

    formBtn.addEventListener("click", (e: Event) => {
        e.preventDefault();
    });
}

async function generateContent<T extends RootObject>(data: T) {
    data = await collectDataJSON("./form.json");

    const form = document.createElement("form");

    //! Create name input + label

    const divFirstName = document.createElement("div");
    const labelFirstName = document.createElement("label");
    const inputFirstName = document.createElement("input");

    labelFirstName.innerText = data.form.properties.firstName.title;
    inputFirstName.setAttribute("type", `${data.form.properties.firstName.input_type}`);
    inputFirstName.setAttribute("required", "");
    inputFirstName.setAttribute("name", `${data.form.properties.firstName.name}`);
    inputFirstName.setAttribute("placeholder", "Enter name");
    inputFirstName.classList.add("input__firstname");
    divFirstName.append(labelFirstName, inputFirstName);
    //! Create surname input + label

    const divLastName = document.createElement("div");
    const labelLastName = document.createElement("label");
    const inputLastName = document.createElement("input");

    labelLastName.innerText = data.form.properties.lastName.title;
    inputLastName.setAttribute("type", `${data.form.properties.lastName.input_type}`);
    inputLastName.setAttribute("required", "");
    inputLastName.setAttribute("name", `${data.form.properties.lastName.name}`);
    inputLastName.setAttribute("placeholder", "Enter surname");
    inputLastName.classList.add("input__lastname");
    divLastName.append(labelLastName, inputLastName);

    //! Create email input + label

    const divEmail = document.createElement("div");
    const labelEmail = document.createElement("label");
    const inputEmail = document.createElement("input");

    labelEmail.innerText = data.form.properties.email.title;
    inputEmail.setAttribute("type", `${data.form.properties.email.input_type}`);
    inputEmail.setAttribute("required", "");
    inputEmail.setAttribute("name", `${data.form.properties.email.name}`);
    inputEmail.setAttribute("placeholder", "Enter email");
    inputEmail.classList.add("input__email");
    divEmail.append(labelEmail, inputEmail);

    //! Create message input + label

    const divMessage = document.createElement("div");
    const labelMessage = document.createElement("label");
    const textareaMessage = document.createElement("textarea");

    labelMessage.innerText = data.form.properties.question.title;
    textareaMessage.setAttribute("type", `${data.form.properties.question.input_type}`);
    textareaMessage.setAttribute("required", "");
    textareaMessage.setAttribute("name", `${data.form.properties.question.name}`);
    textareaMessage.setAttribute("placeholder", "Enter message");
    divMessage.append(labelMessage, textareaMessage);

    //! Headers
    const h2 = document.createElement("h2");
    const h4 = document.createElement("h4");

    h2.innerText = data.form.title;
    h4.innerText = data.form.description;

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.classList.add("form-submit__btn");
    submitBtn.innerText = "Submit";

    form.append(h2, h4, divFirstName, divLastName, divEmail, divMessage, submitBtn);

    main.appendChild(form);

    return data;
}

async function collectDataJSON<T>(path: string): Promise<T> {
    try {
        const response = await fetch(path);
        const data = await response.json();
        return data;
    } catch {
        throw Error("Promise rejected");
    }
}
