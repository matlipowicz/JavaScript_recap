"use strict";
//TODO: Arrays

// //! EX.1
// let tabOne = ["Lana", "Lila", "Azor", "Jolie", "Sasha", "Gatsby", "Skubencjusz"];

// console.log(tabOne[0], tabOne[2], tabOne[(tabOne.length - 1) / 2], tabOne[tabOne.length - 1], tabOne[tabOne.length - 2], tabOne.length);

// tabOne.unshift("Neptun"); // Można też tabOne[0] = "Neptun"
// tabOne.push("Saturn");

// Można też tabOne[0] = "Neptun" --> ta metoda nadpisuje obecny element a nie dodaje nowy
// // tabOne[0] = "Owieczka";
// // tabOne[tabOne.length] = "Baran"; // no raczej nie xD

// console.log(tabOne[0], tabOne[2], tabOne[(tabOne.length - 1) / 2], tabOne[tabOne.length - 1], tabOne[tabOne.length - 2], tabOne.length);

// tabOne.pop();

// console.log(tabOne[0], tabOne[2], tabOne[tabOne.length / 2], tabOne[tabOne.length - 1], tabOne[tabOne.length - 2], tabOne.length);

//?? Tutaj po usunięciu ostatniego elementu wyszukanie najbardziej środkowego elementu tablicy przez metode arr.length - 1 / 2, wylogowało undefined, dopiero po usunięciu odnoesienia do ostatniego elementu tablicy wróciło do normy. WIEM, ŻE ZMIENIA DŁUGOŚĆ TABLICY, ALE NIE WIEM CZEMU ZWRÓCIŁO UNDEFINED. BO NAWET GDY MAMY DŁUGOŚĆ TABLICY - 1 TO JEST 7 I WTEDY DZIELONE PRZEZ DWA DAJE NAN 3,5 --> ZAOKRĄGLAMY W GÓRE CZYLI POWINNO WYLOGOWAĆ TAK CZY TAK 4 ELEMENT TABLICY.

//* Trzeba zaokrąglać bo edytor sam tego nie zrobi i nie wyszuka środkowej liczby

// tabOne.shift();

// console.log(tabOne[0], tabOne[2], tabOne[(tabOne.length - 1) / 2], tabOne[tabOne.length - 1], tabOne[tabOne.length - 2], tabOne.length);

// const tabTwo = tabOne; // Albo tabOne.slice();

// const tabThree = [...tabOne];

// console.log(tabTwo, tabThree);

// tabTwo.shift();
// tabThree.shift();

// console.log(tabOne, tabThree);

const arrOne = ["Kamil", "Mateusz", "Jan"];

const arrTwo = arrOne.slice();

arrTwo[0] = "Waldek";

console.log(arrOne);
console.log(arrTwo);

//? Powiedz mi czy dobrze to rozumiem --> Tablice są typami referencyjnymi i zapisanie ich pod zmienną powoduję, że właściwie wskazujemy tylko na wartość w pamięci i generalnie tablice nie przechowują wartości tylko tzw referencje do nich? Dlatego kopiowanie "shallow" - przy użyciu spread-operatora nie nadaje się do znestowanych tablic bo jej nie "spłaszcza". Trzeba tutaj użyć JSON.parse(JSON.stringify(arr)).

// tabOne.reverse();
// console.log(tabOne, tabTwo);

//! EX.2

// const storeCatsNames = function () {
//     const cats = [];

//     do {
//         let catName = prompt("Enter cat's name");
//         if (catName === null || catName === "" || !isNaN(catName)) {
//             alert("Enter name in text format");
//         } else {
//             cats.push(catName);
//         }
//     } while (cats.length !== 5);

//     for (let i = 0; i < cats.length; i++) {
//         if (cats[i].length > 3 && cats[i].includes("b")) {
//             console.log(cats[i]);
//         }
//     }

//     // return cats;
//     console.log(cats);
// };

// // console.log(storeCatsNames());
// storeCatsNames();

//! EX.3

const temps = [45, 21, 41, 11, -2, 13, 50, 52, 22];

//? spread operator

console.log(Math.max(...temps));
console.log(Math.min(...temps));

//* Method >= ES6
// console.log(Math.max(...temps), Math.min(...temps));
//* Wiem, że są jeszcze metody z reduce czy forEach, ale to nie ta lekcja xD --> Poniżej są inne podejścia
// const average = (arr) => {
//     let total = 0;
//     let sum = [];

//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];

//         sum.push(total);

//         if (sum.length === arr.length) {
//             let sumMax = Math.max(...sum);
//             return Math.round(sumMax / sum.length);
//         }
//     }
// };

// const result = average(temps);
// console.log(result);

//TODO: metoda forEach

// const average = (arr) => {
//     let total = 0;
//     let counter = 0;

//     arr.forEach((el, i) => {
//         total += el;
//         counter++;
//     });
//     return Math.round(total / counter);
// };

// const result = average(temps);
// console.log(result);

//TODO: metoda reduce

// const average = (arr) => {
//     let sum = arr.reduce((prev, curr) => prev + curr);

//     return Math.round(sum / arr.length);
// };

// console.log(average(temps));

// const disparity = (arr) => {
//     let maxValue = Math.max(...arr);
//     let minValue = Math.min(...arr);

//     return maxValue - minValue;
// };

// console.log(disparity(temps));

// const indexMin = (arr) => {
//     const index = arr.indexOf(Math.min(...arr));

//     return index;
// };

// console.log(indexMin(temps));
//* indexOf zwraca najbliższą wartość od lewej w tablicy a lastIndexOf po prawej

// const containsFirstMethod = temps.includes(20);
// console.log(containsFirstMethod); //* zwróci false

// const containsSecondMethod = temps.find((el) => el === 20);
// console.log(containsSecondMethod); //* zwróci undefined bo tego elementu nie ma w tablicy

// const containsThirdMethod = temps.filter((el) => el === 20);
// console.log(containsThirdMethod); //* zwróci pustą tablicę bo nie ma tego elementu w tablicy temps

// for (let i = 0; i < temps.length; i++) {
//     console.log(temps[i]);
// }

// const arrElements = temps.forEach((el, i) => {
//     console.log(`This ${el} has a index of ${i}`);
// });

//! EX.4 -- Map

// const firstMap = new Map();

// firstMap.set(1, "Mateusz");

// console.log(firstMap.get(1));
// console.log(firstMap.get(2)); //* undefined - czyli nie ma klucza w zbiorze

// firstMap.set(2, "Paulina");
// firstMap.set(3, "Adam");

// console.log(firstMap.size);
// console.log(firstMap.keys(), firstMap.values(), firstMap.entries());

// firstMap.forEach((value, key, map) => {
//     console.log(`
//         Wartość: ${value}
//         Klucz: ${key}
//     `);
// });

// for (const pairs of firstMap.entries()) {
//     console.log(pairs);
// }

//! EX.5 -- Set

// const peselID = new Set();

// peselID.add(79120594298);
// peselID.add(76062014778);
// peselID.add(59012782347);

// console.log(peselID.size);

// peselID.add(79120594298); // ta wartość nie zostanie zduplikowana --> do tego głownie jest wykorzystywany ten zbiór

// console.log(peselID.has(810321864545)); // wyrzuci false

// peselID.delete(59012782347);

// console.log(peselID.size);

// //* --> Można od razu dodać jako tablice

// const pesel = new Set([89111463182, 62040383925, 88100855694]);

// console.log(pesel);

// for (const val of pesel) {
//     console.log(val);
// }

// pesel.forEach((value, valueAgain, set) => {
//     console.log(value);
// });

//! EX.6

// const temp = [1, 5, 7, 9, 13, 1, 7, 4, 6, 3, 1, 2];

// console.log(temp.length);

// const tempOne = new Set(temp);

// console.log(tempOne, tempOne.size);

//! EX.7 -- Obiekty
// const person = {
//     name: "Adam",
//     surname: "Jochemczyk",
//     devices: [
//         {
//             name: "phone",
//             memory: "64GB",
//         },
//         {
//             name: "laptop",
//             memory: "512GB",
//         },
//     ],
//     bloodPressure: ["120/80", "121/81"],
// };

// person.devices.push({ name: "camera", memory: "1TB" });

// console.log(person.name, person.surname);

// const getDeviceOwner = (x) => {
//     person.devices.forEach((el) => {
//         console.log(`The ${x.name} is owner of a ${el.name} witha a memory of ${el.memory} `);
//     });
// };

// getDeviceOwner(person);

// console.log(`Name: ${person.name}, Surname: ${person.surname} has blood pressure on level of ${person.bloodPressure[0]}
// `);

//! --> Funkcje

//! EX.8

const isPeselValid = (pesel) => {
    let month = parseInt(pesel.substring(2, 3)); //* Można użyć Number()
    if (typeof pesel === "string" && pesel.length === 11) {
        if (month >= 0 && month <= 12) {
            return true;
        }
    } else {
        return alert("Enter valid value");
    }
};

console.log(isPeselValid("97051066942"));

//! EX.9

// const calculator = (a, b, operand) => {
//     let value;
//     switch (operand) {
//         case "+":
//             value = a + b;
//             break;
//         case "-":
//             value = a - b;
//             break;
//         case "*":
//             value = a * b;
//             break;
//         case "/":
//             value = a / b;
//             break;
//     }

//     return value;
// };

const calculator = (a, b, operand) => {
    switch (operand) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
};

console.log(calculator(12, 4, "*"));

//! EX.10
const pascalConverter = (pressure) => {
    return `Converterd ${pressure}Pa to ${pressure / 100}hPa`;
};

console.log(pascalConverter(1100));

//! EX.11
//? Nie wiem jak do tego podejść ;/

const timeFormat = (hours, minutes, format) => {
    if (format === "PM" || format === "AM") {
        if (format === "PM") {
            hours += 12;

            return `${hours}:${minutes}`;
        }
    } else {
        return `${hours}:${minutes}`;
    }
};

const hour = timeFormat(12, 23, "PM");
console.log(hour);

//! EX.12

const greetingsOrGoodbyes = (num) => {
    if (num % 5 === 0) {
        alert("Hi");
    } else if (num % 6 === 0) {
        alert("Hello");
    } else if (num % 6 !== 0 && num % 5 !== 0) {
        alert("Bye - maybe try again :)");
    }
    return num;
};

console.log(greetingsOrGoodbyes(13));

//! EX.13

const numArr = [3, 11, 14, 9, 1233, 1222, 823];

// const onlyEvenNumbers = (arr) => {
//     let evenNum = arr.filter((el) => el % 2 === 0);

//     return evenNum;
// };

// console.log(onlyEvenNumbers(numArr));
// const onlyEvenNumbersTwo = (arr) => {
//     let evenNumTwo = arr.forEach((el) => el % 2 === 0);

//     return evenNumTwo;
// };
// console.log(onlyEvenNumbers(numArr));

//! EX.14

// const onlyOddNumbersTwo = (arr) => {
//     let odd = arr.filter((el) => {
//         if (el % 2 !== 0) {
//             return el;
//         }
//     });

//     return odd;
// };
// console.log(onlyOddNumbersTwo(numArr));

//! EX.15

// const objectMinMax = (arr) => {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     return { min: min, max: max };
// };

// console.log(objectMinMax(numArr));
