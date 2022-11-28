"use strict";

//# Zadania HoF, localStorage, sessionStorage, cookies

//! Obiekt będzie wykorzystywany w wielu zadaniach

const sampleObj = [
    { name: "Alex", age: 30 },
    { name: "Piotr", age: 26 },
    { name: "Patryk", age: 45 },
    { name: "Agnieszka", age: 20 },
];

// for (let i = 0; i < sampleObj.length; i++) {
//     let aging = sampleObj[i].age;
//     console.log(aging);
// }

//!## Zadanie 1
// Za pomocą map stwórz tablicę stringów zawierających tekst "Jestem (name) i mam (age) lat", wykorzystaj tablicę sampleObj.

// const stringsArr = (array) => {
//     const strings = array.map((e) => {
//         return `Jestem ${e.name} i mam ${e.age} lat`;
//     });
//     console.log(strings);
//     console.log(sampleObj);
// };

// stringsArr(sampleObj);

//!## Zadanie 2
// Za pomocą map stwórz tablicę obiektów, która zawiera name, age oraz nowy klucz bornYear, który zostanie obliczony na podstawie wieku i dodany do obiektu, w nowo tworzonej tablicy. Wykorzystaj tablicę sampleObj.

// function x() {
//     let bornIn;
//     const date = new Date();
//     const currYear = date.getFullYear();
//     for (const element of sampleObj) {
//         let aging = element.age;
//         bornIn = currYear - aging;
//         console.log(bornIn);
//     }
// }
// x();

// const birth = sampleObj.map((e) => {
//     const date = new Date();
//     const currYear = date.getFullYear();

//     let aging = e.age;
//     let bornIn = currYear - aging;

//     return { ...e, bornYear: bornIn };
// });

// console.log(birth);

//!## Zadanie 3
// Za pomocą filter wyciągnij z tabliy sampleObj osoby które mają więcej niż 25 lat.

// const moreThan = (arr) => {
//     let age = arr.filter((e) => e.age > 25);

//     console.log(age);
// };

// moreThan(sampleObj);

//!## Zadanie 4
// Za pomocą filter wyciągnij z tablicy sampleObj osoby który imię kończy się na a lub r.

// const nameEnding = () => {

//     let x = sampleObj.filter((e) => e.name.at(-1) === "a" || e.name.at(-1) === "r");
//     console.log(x);
// };

// nameEnding();

//!## Zadanie 5
// Za pomocą map połącz osoby z sampleObj i książki z books tak aby pierwsza osoba miała pierwszą książkę, druga drugą itd.
//? Nie wiem jak to mam ugryźć, żeby mi dodawało inne książki
const books = [
    { name: "Wojna i pokoj", price: "30" },
    { name: "Encyklopedia", price: 100 },
    { name: "Kosmos", price: 65 },
];

// const bookOwner = () => {
//     let x = sampleObj.map((e) => {
//         let bookName;

//         books.forEach((e) => {
//             bookName = e.name;
//         });
//         return { ...e, bookAssign: bookName };
//     });

//     console.log(x);
// };

// bookOwner();

//!## Zadanie 6
// Przefiltruj książki tak aby znaleźć książkę, której cena jest stringiem

// const findPriceString = (arr) => {
//     let findString = arr.filter((e) => typeof e.price === "string");
//     console.log(findString);
// };

// findPriceString(books);
//!## Zadanie 7
// Za pomocą find znajdź cenę książki Kosmos.

// const findBookPrice = (arr) => {
//     arr.find((e) => {
//         if (e.name === "Kosmos") {
//             console.log(e.price);
//         }
//     });
// };
// findBookPrice(books);

//!## Zadanie 8
// Sprawdź za pomocą every czy każda książka kosztuje powyżej 50

// const checkPrice = (arr) => {
//     arr.every((e) => {
//         console.log(e.price > 50);
//     });
// };
// checkPrice(books);

//!## Zadanie 9
// Sprawdź za pomocą some czy jakaś książka kosztuje poniżej 40

// const checkPrice = (arr) => {
//     return arr.some((e) => e.price < 40);
// };
// console.log(checkPrice(books));

//!## Zadanie 10
// Sprawdż czy każda osoba z sampleObj jest pełnoletnia

// const isMature = (arr) => {
//     return arr.every((e) => e.age >= 18);
// };
// console.log(isMature(sampleObj));

//!## Zadanie 11
// Zsumuj wiek wszystkich osób za pomocą reduce i oblicz średnią wieku

//* Z destrukturyzacją

// const ageAverage = (arr) => {
//     let ageSum = arr.reduce((prev, { age }) => prev + age, 0);
//     let people = arr.length;

//     return ageSum / people;
// };
// console.log(ageAverage(sampleObj));

//* Bez destrukturyzacji

// const ageAverage = (arr) => {
//     let ageSum = arr.reduce((prev, curr) => prev + curr.age, 0);

//     let people = arr.length;

//     return ageSum / people;
// };
// console.log(ageAverage(sampleObj));

//!## Zadanie 12
// Za pomocą forEach znajdź najmłodszą i najstarszą osobę i oblicz ich różnicę wieku

//? Czy o to chodziło? --> Jeżeli inny był zamysł podaj hinta jakiegoś ;D

// const ageDifference = () => {
//     let ageOrder = [];
//     // for (const val of sampleObj) {
//     //     let age = val.age;
//     //     ageOrder.push(age);
//     // }

//     sampleObj.forEach((e) => {
//         ageOrder.push(e.age);
//     });
//     const ascendingAgeOrder = ageOrder.sort((a, b) => a - b);
//     let youngest = ascendingAgeOrder.at(0);
//     let oldest = ascendingAgeOrder.at(-1);
//     const difference = oldest - youngest;
//     return difference;
// };

// console.log(ageDifference());

//!## Zadanie 13
// Wyświetl nazwę książki która jest najtańsza i najdroższa

//* 1 sposób
// let priceOrder = [];
// const price = books.forEach((e) => {
//     priceOrder.push(parseFloat(e.price));
// });

// const sortedPrice = priceOrder.sort((a, b) => a - b);
// console.log(sortedPrice.at(1), sortedPrice.at(-1));

//* 2 sposób

// const compare = (arr) =>{
//     let price = arr.forEach()
// }

//!## Zadanie 14
// Zsumuj cenę wszystkich książek

// const priceSum = (arr) => {
//     let sum = arr.reduce((prev, curr) => {
//         return parseFloat(prev + curr.price);
//     }, 0);
//     console.log(sum);
// };
// priceSum(books);
//!## Zadanie 15
// Stwórz funckję zapisującą do localStorage, sessionStorage lub ciastka
//* sessionStorage
// const setItemSession = () => {
//     // set value into sessionStorage
//     let mail = "matlipowicz@gmail.com";
//     sessionStorage.setItem("email", mail);
// };

// setItemSession();

//* localStorage
// const setItemLocal = () => {
//     // set value into sessionStorage
//     let mail = "matlipowicz@gmail.com";
//     localStorage.setItem("email", mail);
// };

// setItemLocal();

//* cookies

// const cookies = () => {
//     let date = new Date("2022, 12, 02");

//     const cookie = (document.cookie = `email=matlipowicz@gmail.com; expires= ${date}`);
//     console.log(cookie);
// };
// cookies();
setCookie("email", "matlipowicz@gmail.com", 122.5);
setCookie("teacher", "Adam Jochemczyk", 122.5);
console.log(document.cookie);
function setCookie(name, value, livingDays) {
    const date = new Date();
    date.setTime(date.getTime() + livingDays * 24 * 60 * 60 * 1000); // zamiana na dni od dziś
    let expires = "expires=" + date.toUTCString(); // w cookie musi być w takim formacie dlatego cała data musi zostać zamieniona

    // Ustawianie cookie

    document.cookie = `${name} = ${value}; ${expires}; path=/`;
}
//!## Zadanie 16
// Stwórz funkcję odczytującą ciasteczka z przeglądarki i tworzącą z nich obiekt wygodny do odczytu. Ciasteczka są zapisywane jako string. W stworzonym obiekcie niech kluczem będzie nazwa, a value wartością w obiekcie
// ```js
// {name}={value};
// ```;
//* Nie będe ukrywał rozwiązanie z yt ;D link: https://www.youtube.com/watch?v=8tL5P-RtAH0
const readProperties = () => {
    const cookie = document.cookie; // odczytanie cookie
    const cookieArr = cookie.split("; "); // wrzucenie do tablicy elementów oddzielonych separatorem ";"

    let pairs = cookieArr.map((e) => e.split("=")); // wrzucenie do tablicy osobno elementów w których jest znak "="

    console.log(pairs.reduce((prev, [key, value]) => ({ ...prev, [key]: value }), 0)); // To rozumiem jako prev czyli tablica, na której używamy spread operatora, tablice destrukturyzujemy na [key, value]

    //? Nie rozumiemczemu zapisujemy w nawiasie [key]. Czy tu chodzi może o to, że też tak jakby destrukturyzujemy i wyciągamy wartość z tego klucza, która jest nazwana email i name?
};

readProperties();
