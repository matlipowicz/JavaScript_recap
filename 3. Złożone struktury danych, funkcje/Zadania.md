# Zadania dla złożonych struktur danych i funkcji
## Tablice

### Zad 1
Stwórz tablicę (tab1) imion psów (7 elementow),a następnie odowłaj się do:
 - [ ] pierwszego,
 - [ ] trzeciego,
 - [ ] srodkowego,
 - [ ] ostatniego,
 - [ ] przedostatniego,
 - [ ] oczytaj długość tablicy,
Zmodyfikuj listę tak żeby dodać nowe imię:
 - [ ] na początek listy,
 - [ ] na koniec listy,
 - [ ] odwołaj się do imion tak jak w 1 części,
Zmodyfikuj listę tak, aby:
 - [ ] usunąć element z końca,
 - [ ] odwołaj się do imion tak jak w 1 części,
 - [ ] usunąć element z początku,
 - [ ] odwołaj się do imion tak jak w 1 części,
 - [ ] stwórz drugą tablicę, do której przypiszesz tablicę 1 np. const tab2=tab1;
 - [ ] zrób kopię tablicy 1 do zmiennej tab3 np. const tab3=[...tab1]
 - [ ] usuń element z początku z tab2 i tab3
 - [ ] sprawdź czy tab1 się zmieniła
 - [ ] odwróć tab1 za pomocą .reverse(),
 - [ ] sprawdź czy tab1 i tab2 się zmieniła,

### Zad 2
Stwórz tablicę (cats) która przechowa imiona kotów.
- [ ] poproś użytkownika za pomocą prompt aby podał imię kota i wpisz to do tablicy (powtórz 5 razy),
- [ ] wyświetl tylko te imiona których długość jest większa od 3,
- [ ] wyświetl tylko te imiona które mają w sobie literę 'b',

### Zad 3
Stworz tablicę przechowującą odczyt temperatury ze stacji pogodowej.
- [ ] znajdź wartość maksymalną i minimalną,
- [ ] oblicz średnią temperaturę,
- [ ] oblicz różnicę między max, a min
- [ ] znajdź index elementu o minimalnej temperaturze (indexOf),
- [ ] sprawdź czy lista zawiera liczbę 20,
- [ ] wyświetl elementy tablicy za pomocą for i foreach
Wpisywanie temperatury możesz zrobić bezpośrednio w kodzie, lub pobierać dane za pomocą prompta

## Map
### Zadanie 4
- [ ] Stwórz nową mapę,
- [ ] dodaj do nowej mapy swoje imię i liczbę,
- [ ] pobierz i wyświetl danę po kluczu który istnieje w mapie
- [ ] sprawdź co się dzieje gdy chcemy pobrać wartość po kluczu który nie istnieje w mapie,
- [ ] dodaj jeszcze 2 obiekty z kluczem i wartością,
- [ ] odczytaj długość mapy (size),
- [ ] wyświetl tylko klucze z mapy,
- [ ] wyświetl tylko wartości z mapy,
- [ ] wyświetl pary elementów (entries),
- [ ] wyświetl pary elementów za pomocą forEach,
## Set

### Zadanie 5
- [ ] Stwórz zbiór set do przechowywania peseli użytkowników aplikacji,
- [ ] dodaj do niego 3 pesele (możesz skorzystać z [generator peseli](https://pesel.cstudios.pl/o-generatorze/generator-on-line)),
- [ ] odczytaj rozmiar zbioru,
- [ ] dodaj pesel, który był dodany wcześniej,
- [ ] odczytaj rozmiar zbioru (czy się zmienił?),
- [ ] sprawdź czy zbiór zawiera pesel "810321864545",
- [ ] usuń wybrany pesel ze zbioru,
- [ ] odczytaj rozmiar zbioru,
- [ ] przeiteruj po zbiorze za pomocą for of,
- [ ] przeiteruj po zbiorze za pomocą forEach,

### Zadanie 6
Mając do dyspozycji poniższą zmienną temp
```js
const temp=[1,5,7,9,13,1,7,4,6,3,1,2]
```
- [ ] odczytaj długość tablicy temp,
- [ ] za pomocą zbioru (new Set()) wyeliminuj duplikaty z tablicy temp wynik zapisz do zmiennej temp1,
- [ ] odczytaj dlugosc zmiennej temp1,


## Obiekty

### Zadanie 7

Mając do dyspozycji poniższy obiekt:
```js
const person={
    name: "Adam",
    surname: "Jochemczyk",
    devices: [{
        name: "phone",
        memory: "64GB"
    },{
        name: "laptop",
        memory: "512GB",
    }
    ],
    bloodPressure: ["120/80","121/81"],
}
```
- [ ] wyświetl wartość pola name i surname,
- [ ] przeiteruj po polu devices i wyświetl za pomocą forEach dla każdego urządzenia string pokazujący imię i nazwisko osoby, nazwę i pojemność urządzenia (zaprojektuj funkcjonalność tak aby po dodaniu lub usunięciu urządzeń kod dalej działał),
- [ ] wyświetl imię i nazwisko osoby oraz jej odczyty ciśnienia krwi,
## Funkcje

### Zadanie 8

Stwórz funkcję isPeselValid, która dla podanego stringa zwróci true albo false i sprawdzi:
- [ ] czy jego długośc wynosi 11 znaków,
- [ ] czy 3 i 4 liczba mieści się w zakresie 01-12,

### Zadanie 9

Stwórz funckję calculator, która przyjmie parametry liczbę a i b oraz znak (+,-,/,*) w funkcji obsłuż:
- [ ] dodawanie,
- [ ] odejmowanie,
- [ ] mnozenie,
- [ ] dzielenie,
Rozwiązanie oprzyj o switcha.

### Zadanie 10

Stwórz funkcję która dla podanej liczby pascali (ciśnienie atmosferyczne) zwróci jej sformatowaną wartość w hPa (100Pa to 1 hPa).

### Zadanie 11

Stwórz funkcję, która jako paramter przyjmie godzinę, minuty, format.
- [ ] jeśli format to string PM lub AM przelicz na format 24h,
- [ ] jeśli format nie jest podany przelicz na format amerykański (AM/PM),

### Zadanie 12

Stwórz funkcję, która zwraca:
- [ ] string "Hi" gdy podana liczna jest podzielna przez 5 bez reszty,
- [ ] string "Hello" gdy podana liczba jest podzielna przez 6 bez reszty,
- [ ] string "Bye" gdy liczba nie jest podzielna przez 5 i 6 bez reszty,

### Zadanie 13
Stwórz funkcję która dla podanej tablicy liczb zwróci tylko liczby parzyste

### Zadanie 14
Stwórz funkcję która dla podanej tablicy liczb zwróci tylko liczby nieparzyste
### Zadanie 15
Stwórz funkcję która dla podanej tablicy liczb zwróci obiekt zawierający minimalna i maksymalną liczbe ze zbioru np.
```js
return {min: 1, max: 10}
```

## Zadania dodatkowe

[zaprogramuj windę w JS](https://play.elevatorsaga.com/) ←  (ćwiczy korzystanie z dokumentacji)