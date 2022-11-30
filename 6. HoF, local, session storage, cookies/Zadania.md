# Zadania HoF, localStorage, sessionStorage, cookies

Obiekt będzie wykorzystywany w wielu zadaniach
```js
const sampleObj=[
    {name: "Alex", age: 30},
    {name: "Piotr", age: 26},
    {name: "Patryk", age: 45},
    {name: "Agnieszka", age: 20}
]
```

## Zadanie 1
Za pomocą map stwórz tablicę stringów zawierających tekst "Jestem (name) i mam (age) lat", wykorzystaj tablicę sampleObj.

## Zadanie 2
Za pomocą map stwórz tablicę obiektów, która zawiera name, age oraz nowy klucz bornYear, który zostanie obliczony na podstawie wieku i dodany do obiektu, w nowo tworzonej tablicy. Wykorzystaj tablicę sampleObj.

## Zadanie 3
Za pomocą filter wyciągnij z tabliy sampleObj osoby które mają więcej niż 25 lat.

## Zadanie 4
Za pomocą filter wyciągnij z tablicy sampleObj osoby który imię kończy się na a lub r.

```js
const books=[
    {name: "Wojna i pokoj",price: '30'},
    {name: "Encyklopedia", price: 100},
    {name: "Kosmos", price: 65}
]
```

## Zadanie 5
Za pomocą map połącz osoby z sampleObj i książki z books tak aby pierwsza osoba miała pierwszą książkę, druga drugą itd.

## Zadanie 6
Przefiltruj książki tak aby znaleźć książkę, której cena jest stringiem

## Zadanie 7
Za pomocą find znajdź cenę książki Kosmos.

## Zadanie 8
Sprawdź za pomocą every czy każda książka kosztuje powyżej 50

## Zadanie 9
Sprawdź za pomocą some czy jakaś książka kosztuje poniżej 40

## Zadanie 10
Sprawdż czy każda osoba z sampleObj jest pełnoletnia

## Zadanie 11
Zsumuj wiek wszystkich osób za pomocą reduce i oblicz średnią wieku

## Zadanie 12
Za pomocą forEach znajdź najmłodszą i najstarszą osobę i oblicz ich różnicę wieku

## Zadanie 13
Wyświetl nazwę książki która jest najtańsza i najdroższa

## Zadanie 14
Zsumuj cenę wszystkich książek

## Zadanie 15
Stwórz funckję zapisującą do localStorage, sessionStorage lub ciastka

## Zadanie 16
Stwórz funkcję odczytującą ciasteczka z przeglądarki i tworzącą z nich obiekt wygodny do odczytu. Ciasteczka są zapisywane jako string. W stworzonym obiekcie niech kluczem będzie nazwa, a value wartością w obiekcie
```js
{name}={value};
```