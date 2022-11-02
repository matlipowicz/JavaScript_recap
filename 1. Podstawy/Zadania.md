# Zadania z podstaw

## Zadanie 1

Stwórz plik index.js w nim console.loga zawierającego Twoje imię podepnij go do pliku index.html i uruchom konsolę przeglądarki. Sprawdź wynik.

## Zadanie 2

Stwórz okno dialogowe typu:

-   [ ] alert wyswietlajace tekst: Witaj przybyszu
-   [ ] confirm wyswietlajace tekst: Czy chcesz kontynuowac?
-   [ ] prompt wyswietlajace tekst: Podaj swój wiek

## Zadanie 3

-   [ ] zadeklaruj zmienna hi typu string przechwoujaca tekst Witaj
-   [ ] zmien wartosc zmiennej hi na Hello
        (pamietaj jakiego typu zmiennej trzeba uzyc)

## Zadanie 4

Sprawdz dzialanie nastepujacych console.logow:

-   [ ] 10+4
-   [ ] '0'+'a'
-   [ ] 0+'a'
-   [ ] false+false
-   [ ] true+true

## Zadanie 5

Popraw nazewnictwo i typy zmiennych

```js
let PI=3.14;
const hello_world="hello world"
const importantthing="important thing"
const 2myAge=88;
var peopleInRoom=3;
```

## Zadanie 6

-   [ ] zapisz do zmiennej odpowiedz z confirm i wyswietl ja w console.logu
-   [ ] zapisz do zmiennej odpowiedz z prompt i wyswietl ja w konsoli. Jaki jest typ zmiennej?

## Zadanie 7

Operatory sprawdz dzialanie w console log nastepujacych rownan:

-   [ ] 2+6+"1"
-   [ ] 2\*4+3+"3"
-   [ ] 2/5
-   [ ] 9%4
-   [ ] 4\*\*8

## Zadanie 8

Wskaż błędne operatory przypisania, rozpisz je i popraw bledne np.
x+=3 -> x=x+3

```js
let x=2;
x+=3
x--
x=-1
x*=2
x=/2
```

## Zadanie 9

Sprawdź jaki wynik wyswietli sie w konsoli i napisz czym rozni sie porownanie plytkie od glebokiego.

```js
let a = 1;
a == "1";
a === 1;
a !== 1;
!!a;
a < 10;
a > 0;
a >= 1;
a <= 0;
let b = true;
b && true;
b || false;
false || true;
!false;
```

## Zadanie 10

Podaj czy podany typ zmiennej jest typem prymitywnym czy zlozonym i wskaz konkretny typ danych
np. const a=3 // prymitywny number

```js
const a = "1";
const b = false;
const c = [];
const d = {};
const e = undefined;
const f = null;
const g = new Set();
const h = NaN;
```

## Zadanie 11

Sprawdz typ danych z poprzedniego zadania za pomoca operatora typeof

## Zadanie 12

Ręczna konwersja danych przekonwertuj

-   [ ] "102" na number
-   [ ] 10 na stringa
-   [ ] 0 na boolean
-   [ ] pustą tablicę na boolean
-   [ ] za pomocą toFiexed, który wyswietli liczbe 123.4587 z 3 cyframi po przecinku

# Zadanie 13

Ze zmiennych

```js
const adres = "localhost:3000";
const endpoint = "/api";
const params = "?start=true";
```

Stwórz stringa "http://localhost:3000/api?start=true" i zapisz go do zmiennej apiCall

## Zadanie 14

Korzystajac ze zmiennej apiCall z zadania 13

-   [ ] wypróbuj metody toUpperCase, toLowerCase,
-   [ ] odczytaj dlugosc takiego stringa
-   [ ] pobierz znak na pozycji 5
-   [ ] zastąp (replace) znak / znakiem \*
-   [ ] sprawdź czy tekst zaczya się na b
-   [ ] sprawdz czy tekst konczy sie na e
-   [ ] za pomoca substring wytnij tekst http do osobnej zmiennej
-   [ ] za pomoa split potnij tekst na czesci znakiem '/'
