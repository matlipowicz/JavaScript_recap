//! EX.1

//* Boolean conversion: NaN, undefined, "", null, 0, false

//! EX.2

// - [ ] 10==10 //* true
// - [ ] 5>2 //* true
// - [ ] 10<4 //* false
// - [ ] 'a'==='a' //* true
// - [ ] 3=='3' //* true
// - [ ] true==1 //* true
// - [ ] true===1 //* false
// - [ ] false==undefined //* false, bo undefined nie przetrzymuje żadnej wartośći a false już tak
// - [ ] null==undefined //* true, bo te wartości nie powinny zwaracać nam żadnych wartośic (są "puste")

//! EX.3

// const giveValue = function () {
//     let enterValue = prompt("Type some value in this field");

//     if (Number(enterValue % 5 === 0)) {
//         alert("Your value is devisable without change");
//     } else {
//         alert("Enter proper value :)");
//     }
//     return enterValue;
// };

// console.log(giveValue());

//! EX.4 - DO DOPRACOWANIA (metoda z sort())

// const shortestString = (array) => {
//     // const enterThreeStrings = prompt("Enter three the most meaningful words in your life (!enter after a comma!)");

//     // const arrayOfThreeWords = enterThreeStrings.split(",");

//     let wordLength = Infinity;
//     let shortest = "";

//     if (array.length > 0) {
//         for (let i = 0; i < array.length; i++) {
//             if (typeof array[i] === "string" && array[i].length < wordLength) {
//                 wordLength = array[i].length;
//                 shortest = array[i];
//             }
//         }
//     }
//     return shortest;
// };

// console.log(shortestString(["Kocham", 150, "Paulinke", "Bardzo heheehhe"]));

//! EX.5 (math.random())

// const randomNumber = () => {
//     let result = [];
//     for (let i = 0; i < 6; i++) {
//         result.push(Math.floor(Math.random() * 6 + 1));
//     }
//     return result;
// };

// console.log(randomNumber());

//! EX.6

/*
-   [ ] true && true //* true
-   [ ] false && true //* false
-   [ ] false || true //* true
-   [ ] !false || false //* true
-   [ ] !!true //* true
-   [ ] true && !false //* true
*/

// console.log(!false || true, !!true, true && !false);

//! EX.7

//* Teranary operator (operator warunkowy): jest to alternatywa dla if...else, które mogą zostać napisane w jednej linijce. Wykorzystuje dwa argumenty (? jako sprawdzenie prawdziwości warunku oraz : jeżeli warunek jest nieprawdziwy to dajemy taki output)

// function ageValidation() {
//     let birthYear = Number(prompt("Enter your birth year"));

//* Wersja z if
// if (birthYear < 2004) {
//     alert("You're free to go");
// } else {
//     alert("You cannot enter here");
// }

//     //* Werjsa z teranary operator

//     birthYear < 2004 ? alert("You're free to go") : alert("You cannot enter here");

//     return birthYear;
// }
// console.log(ageValidation());

//! EX.8

// const monthsSet = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const seasonChecker = (value) => {
//     let month = "January";
//     if (monthsSet.includes(month)) {
//         switch (value) {
//             case "December":
//             case "January":
//             case "February":
//                 return "Winter";
//                 break;
//             case "March":
//             case "April":
//             case "May":
//                 return "Spring";
//                 break;
//             case "June":
//             case "July":
//             case "August":
//                 return "Summer";
//                 break;
//             case "September":
//             case "October":
//             case "November":
//                 return "Autumn";
//                 break;
//             default:
//                 alert("There is no such month");
//         }
//     }
// };

// console.log(seasonChecker("Septjanember"));

//! EX.9

//stwórz pętlę wyświetlającą liczby od 0 do 10

// for (i = 0; i < 11; i++) {
//     console.log(i);
// }
//stwórz pętlę wyświetlającą liczby od 10 do 0
// for (i = 10; i > -1; i--) {
//     console.log(i);
// }

// stwórz program pobierający za pomocą prompta liczbę startową w pętli i liczbę końcową w pętli, która wyświetli liczby od startowej do końcowej po kolei

// let start = Number(prompt("What was your previous weight?"));
// let end = Number(prompt("What was your previous weight?"));

// for (i = start; i <= end; i++) {
//     console.log(i);
// }

// napisz pętlę wyświetlającą liczby od 0 do 120, co 3 np. 3, 6, 9, 12 itd.
// for (i = 0; i <= 120; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

//! EX.10
//? NIE WIEM NI CHOLERCI JAK TO ZROBIĆ -- DOBRA ZROBIŁEM ALE NA CZUJA XD

// let shape = "";
// let column = 8;
// let row = 4;
// for (let i = 0; i < row; i++) {
//     for (let j = 0; j < column; j++) {
//         if (i === 0 || i === 3) {
//             shape += "*";
//         } else if (i === 1 || i === 2) {
//             shape += "-";
//         }
//     }
//     shape += "\n";
// }

// console.log(shape);

//! EX.11
//! EX.12
//! EX.13 //? wiem, że powinna to być pętla z while, tylko nie wiem jak to zwarzeć żeby się zatrzymała po wpisaniu tych numerycznych wartości

//* Słownie:  pętla powinna mieć warunek gdzie sprawdzana jest wartość przesyłana i wtedy doperio wartości mogą zostać np. przesłane do tablicy, jeżeli to nie będzie prawdą wykonuj pętle bez końca aż do otrzymania numerycznych JAK BYM TO ZROBIŁ:

//TODO: tutaj sprawdzam czy przekazywana wartość to jest liczba, metoda isNaN(); w momencie spradzania patrzy czy input nie jest liczbą, jeśli jest to ma nam przekazać te wartości do pustej tablicy i zwrócić tą tablice.

function numbers() {
    let valueOne, valueTwo;
    let valueArr = [];
    do {
        valueOne = prompt("enter numeric value");
        if (isNaN(valueOne)) {
            alert("Podaj wartość numeryczną");
        } else {
            valueTwo = prompt("enter second numeric value");
        }
        if (isNaN(valueTwo)) {
            alert("Podaj drugą wartość numeryczną");
        }
    } while (isNaN(valueOne) && isNaN(valueTwo));
    valueArr.push(valueOne, valueTwo);
    return valueArr;
    alert(`The values are ${valueOne} and ${valueTwo}`);
}
console.log(numbers());

//! EX.14

// let i = 0;
// while (i <= 1000) {
//     console.log(i);
//     i++;
// }
