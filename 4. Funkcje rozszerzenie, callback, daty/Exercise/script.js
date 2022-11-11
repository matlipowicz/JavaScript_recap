"use strict";

//! EX.1

const user1 = {
    phone: "123456",
    mail: "123@mail.pl",
    contactMethod: "mail",
};
const user2 = {
    phone: "123456",
    mail: "123@mail.pl",
    contactMethod: "phone",
};
const user3 = {
    phone: "",
    mail: "123@mail.pl",
    contactMethod: "both",
};
const user4 = {
    phone: "123456",
    mail: "",
    contactMethod: "both",
};
const user5 = {
    phone: "",
    mail: "123@mail.pl",
    contactMethod: "phone",
};
const user6 = {
    phone: "123456",
    mail: "",
    contactMethod: "mail",
};
const user7 = {
    phone: "",
    mail: "",
    contactMethod: "mail",
};

function mail(mail) {
    return `Mailed to ${mail}`;
}

function phone(phoneNumber) {
    return `Phoned to ${phoneNumber}`;
}

const clientContact = (phoneFunction, mailFunction, user) => {
    if (user.contactMethod === "phone" || user.contactMethod === "both") {
        if (user.contactMethod === "both") {
            if (user.mail !== "" && user.phone !== "") {
                return phoneFunction(user.phone);
            } else if (user.phone === "" && user.mail !== "") {
                return mailFunction(user.mail);
            } else if (user.mail === "" && user.phone !== "") {
                return phoneFunction(user.phone);
            }
        }
        if (user.contactMethod === "phone") {
            if (user.phone !== "") {
                return phoneFunction(user.phone);
            } else if (user.phone === "" && user.mail !== "") {
                return mailFunction(user.mail);
            }
        }
    } else if (user.contactMethod === "mail") {
        if (user.mail === "" && user.phone !== "") {
            return phoneFunction(user.phone);
        } else if (user.mail === "" && user.phone === "") {
            return alert("Enter one of these two ways to contact with you");
        }
        return mailFunction(user.mail);
    }
};

console.log(clientContact(phone, mail, user7));

//! EX.2

/*//TODO: Stwórz funkcję (webSocketInit) przyjmującą jako parametr:

-   adres - adres webSocketu np. ws://localhost:3000,
-   cb - inną funkcję, która ma się wykonać przed zamknięciem socketa,
-   time - czas po jakim socket się zamyka 

Funkcja wyświetla w konsoli stringa:

-   "web socket open on " i na koniec zdania dopisz adres podany jako paramter.
-   czeka podany czas za pomoca setTimeout i wykorzystuje funkcje connectionClosed,
-   wykonuje funkcję mu podaną nad setTimeout,

Stwórz funkcję connectionClosed która przyjmuje paramter connectionName będący adresem web socketu i wyświetla komunikat w konsoli "web socket closed " + connectionName z paramteru, użyj tej funkcji po setTimeout

Stwórz funkcję emitMessage, która przyjmuje jako paramter message wiadomość będącą stringiemi wyświetla ją w konsoli.

Do funkcji webSocketInit podaj funkcję emitMessage jako callback (aby zrobić to z parametrem należy użyć składni ()=>emitMessage("message"))
*/
//? Nie mam pojęcia jak to inaczej zrobić na ten moment --> porobię sobie jeszcze jakieś zadania z callbacków, bo teorię znam ale średnio z głębszym zrozumieniem
const connectionClosed = (connectionName) => {
    setTimeout(() => console.log(`Web socket closed ${connectionName}`), 11000);
};

const emitMessage = (message) => {
    console.log(`${message}`);
};

const timeCount = () => {
    let tenSeconds = 11;
    const down = setInterval(() => {
        if (tenSeconds === 2) {
            clearInterval(down);
        }
        let value = (tenSeconds -= 1);
        console.log(value);
    }, 1000);
};

const webSocketInit = (address, callback, time) => {
    console.log(`Websocket open on ${address}`);
    time();
};

webSocketInit("127.0.0.1:3000", connectionClosed("127.0.0.1:3000"), timeCount);

//! EX.3

/*

Uzupełnij zadanie 2 o parametry domyślne:

-   w funkcji webSocketInit adres="127.0.0.1:3000",
-   cb - inna funkcja to domyślnie funkcja emitMessage,
-   time - 300,
-   w funkcji connectionClosed parametr domyślny to 127.0.0.1:3000,
-   emitMessage - domyślny message to "I'm live",

*/

//! EX.4

/*
Napisz funkcję, która dla podanej daty zwraca:

-   jaki to był dzień tygodnia, miesiąc i jaka pora roku,
*/
const season = (num) => {
    switch (num) {
        case 2:
        case 3:
        case 4:
            return "Spring";
        case 5:
        case 6:
        case 7:
            return "Summer";
        case 8:
        case 9:
            return "Autumn";
        case 10:
        case 11:
        case 0:
        case 1:
            return "Winter";
        default:
            return alert("Enter value in format 00");
    }
};

const getDate = (d, s) => {
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date(d);

    const day = date.getDay();
    const month = date.getMonth();

    console.log(`${dayName[day]}, ${monthName[month]}, ${s(month)}`);
};

getDate(new Date("2022-11-11"), season);

//! EX.5

const firstWeekDay = (d) => {
    let date = new Date(d);
    let day = date.getDay();

    const first = date.getDate() - day + (day === 0 ? -6 : 1);

    return new Date(date.setDate(first));
};

console.log(firstWeekDay(new Date(2022, 9, 31)));

//! EX.6

const weekOrWeekend = (d) => {
    let date = new Date(d);
    let day = date.getDay();

    if (day <= 6 && day > 0) {
        console.log("Work you lazy ass!");
    } else {
        console.log("You can rest now");
    }
};

! EX.7

const daysUntillWeekend = (d) => {
    let date = new Date(d);
    let day = date.getDay();

    if (day === 0 || day === 6) {
        alert("It's weekend!");
    } else {
        const weekend = 5 - day;
        return weekend;
    }
};

// console.log(daysUntillWeekend(new Date(2022, 10, 7)));

// //! EX.8

// //? Czemu po podaniu roku sprawdzi mi czy jest przestępny czy nie?

const leapYear = (year) => {
    return (year % 4 === 0 && year % 100) || year % 400 === 0 ? "leap year" : "not a leap year";
};

console.log(leapYear(2020));

//! EX.9
//TODO: Napisz funkcje addDays, która przyjmuje dwa parametry: obecną datę, ile dni ma dodać,i zwraca nową datę z dodanymi dniami

const addDays = (currDate, num) => {
    const test = new Date(currDate);
    test.setDate(test.getDate() + num);

    return test;
};

const date = new Date();
const newDays = addDays(date, 10);
console.log(newDays);

//! EX.10
//TODO: Napisz funkcję isAfter, która przyjmuje dwa parametry:  date1, date2,która zwraca true jeżeli data2 jest po dacie1

const isAfter = (date1, date2) => {
    const dateOne = date1;
    const dateTwo = date2;

    const good = dateOne < dateTwo ? true : false;
    return good;
};

const d1 = new Date("2022-11-");
const d2 = new Date("2022-11-22");
console.log(isAfter(d1, d2));

//! EX.11
//TODO: Napisz funkcję isBefore, która przyjmuje dwa parametry:   date1, date2,która zwraca true jeżeli data2 jest przed data1

const isBefore = (date1, date2) => {
    const dateOne = date1;
    const dateTwo = date2;

    const good = dateOne > dateTwo ? true : false;
    return good;
};

const d3 = new Date("2022-11-25");
const d4 = new Date("2022-11-22");
console.log(isAfter(d3, d4));

//! EX.12
//TODO: Napisz funkcję isFuture, która sprawdza czy podana data jest z przyszłości.

const isFuture = (d) => {
    const currDate = new Date();

    if (currDate < d) {
        return true;
    } else {
        return false;
    }
};

console.log(isFuture(new Date("2022-11-28")));

//! EX.13
//TODO: Napisz funkcje isPast, która sprawdza czy podana data jest z przeszłości.

const isPast = (d) => {
    const currDate = new Date();

    if (currDate > d) {
        return true;
    } else {
        return false;
    }
};

console.log(isPast(new Date("2022-11-02")));

//! EX.14
//TODO: Napisz funkcje która dla podanej liczby sekund zwraca ile to w godzinach.

const getHours = (sec) => {
    const hours = sec / 3600;
    if (hours < 1) {
        return hours.toFixed(5);
    } else if (hours >= 1) {
        return hours.toFixed(2);
    }
};

console.log(getHours(31600));
//! EX.15
//TODO: Napisz funkcję getToday, która zwraca dzisiejszą datę w formacie: nazwa dnia, data kalendarzowa

const name = () => {
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currDate = new Date();
    const day = currDate.getDay();
    switch (day) {
        case 0:
            return dayName.at(0);
        case 1:
            return dayName.at(1);
        case 2:
            return dayName.at(2);
        case 3:
            return dayName.at(3);
        case 4:
            return dayName.at(4);
        case 5:
            return dayName.at(5);
        case 6:
            return dayName.at(6);
    }
};

const getToday = (day) => {
    const currDate = new Date();
    const d = currDate.getDate();
    const month = currDate.getMonth();
    const year = currDate.getFullYear();

    console.log(`${day()}, ${d}.${month}.${year}`);
};

getToday(name);
