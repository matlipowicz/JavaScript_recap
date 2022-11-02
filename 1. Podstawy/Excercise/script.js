//!EX.1
// console.log("Mateo");

//!EX.2

// alert("Hello my friend!");
// confirm("Chcesz kontynuowac?");

// ? Ale zrobiłem kisz misz xD
// const ageValidity = function () {
//     let age = prompt("Podaj swój wiek");
//     if (age >= 18) {
//         sessionStorage.setItem("Age", age);

//         let getAge = sessionStorage.getItem("Age");
//         const changeText = document.querySelector(".box_caption");
//         changeText.innerHTML = getAge;
//         // alert("Chlapnij sobie");
//     } else {
//         let getBackText = document.querySelector(".box_caption");
//         getBackText.innerHTML = "Test - 1";
//         alert("Poproś Edka spod sklepu");
//     }

//     console.log(age);
// };
// ageValidity();

//!EX.3

// let hi = "Witaj";

// hi = "Hello";

// console.log(hi);

//!EX.4
// console.log(10 + 4);
// console.log("0" + "a"); // string + string 0a (dwa stringi)
// console.log(0 + "a"); // integer + string = 0a (Type coercion) - zamieni number na string
// console.log(false + false); // 0 + 0 = 0
// console.log(true + true); // 1 + 1 = 2

//!EX.5

// const PI = 3.14;
// const HELLO_WORLD = "hello world"; // helloWorld / welcome
// const importantThing = "important thing";
// let myAge = 88;
// let peopleInRoom = 3; // let zamiast vara bo nie da się nadpisać

//!EX.6

// let a = confirm("Do you want to continue?"); // *boolean
// console.log(a);

// let b = prompt("What is in the box?"); // *string bo to input przeca
// console.log(b);

//! EX.7

// console.log(2 + 6 + "1"); //*jeżeli jest chociaż jeden string zamienia całą resztę i "konkatenuje", czyli zachodzi type coercion
// console.log(2\*4+3+'3');// *Error "Unexpected token" - nie ma takich operatorów
// console.log(2 / 5); // *Normalne dzielenie ;D
// console.log(9 % 4); // *Modulus zwraca resztę albo daje 0 jeżeli jej nie ma
// console.log(4\*\*8); // *Nie ma takiego operatora

//! EX.8

// let x = 2;

// x--;  //* zły bo to jest dekrementacja o jeden, a nie przypisanie (x = 1 teraz)

// x = -1; // -1

// x=/2 --> x /= 2 // x = x /2

//! EX.9

// * Generalnie porównanie płytkie to tzw. type coercion czyli dynamiczna konwersja wartości, co może powodować czasami błędy. Strict equality porównuje wartosć i jej typ, a loose equality porównuję tylko wartości bez typów.

//? Jest jeszcze kwiestia przestrzeni w pamięci ram. Strict comparison działa dla prymitywnych zmiennych, ale w przypadku tablic i obiektów trzeba pamiętać o tej pamięci bo przy porównaniu dwóch takich samych obiektów wyrzuci nam false bo np const a znajduję się w innym miejscu niż const b. Ale jeśli porównamy to nawet strict equality w przypadku gdy const a jest równy jakiś obietkt i b = a i damy console.log(a === b) to da nam true bo chodzi też o referencję.

// let a = 1;

// console.log(a == "1"); // true
// console.log(a === 1); // true (strict)
// console.log(a !== 1); // false
// console.log(!!a);
// console.log(a < 10); // true
// console.log(a > 0); // true
// console.log(a >= 1); // true
// console.log(a <= 1); // true

// let b = true;

// console.log(b && true); //true
// console.log(b || false); // true
// console.log(false || true); //true
// console.log(!false); // true

//! EX.10

// const a = "1"; // *prymitywny - string
// const b = false; // *prymitywny - boolean
// const c = []; // *złożony - array(obiekt)
// const d = {}; // *złożony - obiekt
// const e = undefined; // *prymitywny - undefined
// const f = null; // *prymitywny - null (TEGO NIE WIEDZIAŁEM, ŻE JEST REPREZENTACJĄ BRAKU WARTOŚCI DLA OBIEKTU o.o)
// const g = new Set(); // *złożony - bo set to obiekt z unikalnymi watościami, które mogą pojawić się jednorazowo
// const h = NaN; // *prymitywne - Not a Number

// console.log(typeof h); // *wyświetla number

// //! EX.11

// console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g, typeof h);

//! EX.12

// const number = "102";
// const string = 10;
// const boolean = 0;
// const booleanSecond = [];
// const fixedValue = 123.4587;

// console.log(Number(number), string.toString(), Boolean(boolean), Boolean(booleanSecond), fixedValue.toFixed(3));

// ? Czemu po zmianie tablicy na boolean jest true (ZAKŁADAM, ŻE NIE JEST FALSY VALUE TYPU undefined, "", null itd. ?)

//! EX.13

const adres = "localhost:3000";
const endpoint = "/api";
const params = "?start=true";

let apiCall = "http://" + adres + endpoint + params;

console.log(apiCall);

//! EX.14

console.log(
    apiCall.toUpperCase(),
    apiCall.toLowerCase(),
    apiCall.length,
    apiCall.substring(4, 5),
    apiCall.replace("/", "*"),
    apiCall.startsWith("b"),
    apiCall.endsWith("e")
);

let newApiCall = apiCall.substring(0, 4);
console.log(newApiCall);

console.log(apiCall.split("/"));
