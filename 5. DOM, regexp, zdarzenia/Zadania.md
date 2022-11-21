# Zadania DOM, regexp i zdarzenia

# Zadanie 1

Stwórz projekt zawierający index.html, style.css, index.js, a następnie je połącz.
W HTMLu użyj przygotowanej struktury:

```html
<div class="container">
  <div class="box box1"></div>
  <div class="box" id="box2"></div>
  <div class="box"></div>
</div>
<button>Start</button>
<button data-id="stop">Stop</button>
```

w CSS użyj przygotowaych klas:

```
.container{
  background-color: black;
  padding: 10px;
  width:100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.box{
  height: 100px;
  border-radius: 100%;
  border: solid 1px gray;
}
.box1{
  background-color: red;
}
#box2{
  background-color: orange;
}
.box:last-child{
  background-color:green;
}
```

w JS:

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

# Zadanie 2
Zaimplementuj stronę z frontendmentor dostępną pod tym [linkiem](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX)

# Zadanie 3
Stwórz funkcję walidującą numer ISBN, numer ISBN musi mieć 13 cyfr.

# Zadanie 4
Stwórz funkcję walidującą numer telefonu, musi zaczynać się od + i zawierać 11 cyfr.

# Zadanie 5
Stwórz funkcę walidującą czy podany tekst nie zawiera cyfr.

# Zadanie 6
Strona podziel się książką. <br />
Stwórz formularz z polami do podania:
- [ ] numeru ISBN,
- [ ] numeru telefonu,
- [ ] imie i nazwisko,
- [ ] link do okladki, (pole opcjonalne)
Do formularza na zdarzenie onSubmit podepnij stworzone wczesniej funkcje walidujące. <br />
Na zdarzeniu powstrzymaj domyślne zachowanie formularza za pomocą e.preventDefault() aby strona sie nie odswiezyla.
Podane dane dodaj do tablicy jako obiekt i wygeneruj na ich podstawie UI, które na górze ma zdjęcie książki a pod spodem numer ISBN, imie i nazwiso oraz numer telefonu.
