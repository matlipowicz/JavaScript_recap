# Zadania dla funkcje rozszerzenie, callbacks, daty

## Zadanie 1
Stwórz funkcje:
- [ ] Funkcja phone ma przyjmować argument phoneNumber i zwracać stringa "Phoned to "+ phoneNumber.
- [ ] Funkcja mail ma przyjmować argument mail i zwracać stringa "Mailed to"+mail
- [ ] Funkcję clientContact, która przyjmie trzy argumenty: 
- phoneFunction - funkcję dzwoniącą do użytkownika,
- mailFunction - funkcję mailującą do użytkownika,
- user - przyjmującą obiekt użytkownika

W funkcji clientContact stwórz logikę odpowiedzialną za sprawdzenie z obiektu user, którą metodę kontaktu wybrał użytkownik.
W przypadku gdy użytkownik wybrał contactMethod:
- both -> zadzwon do uzytkownika,
- phone -> zadzwon do uzytkownika,
- mail -> mail do uzytkownika,
- both -> podany tylko jeden parametr dzwon lub pisz mail,
- brak parametrow -> wyświetl błąd,
- phone, ale podał mail -> wyslij mail,
- mail, ale podal phone -> dzwon,
Przykładowi użytkownicy to:
```
const user1={
    phone: "123456",
    mail: "123@mail.pl",
    contactMethod: "mail"
}
const user2={
    phone: "123456",
    mail: "123@mail.pl",
    contactMethod: "phone"
}
const user3={
     phone: "",
    mail: "123@mail.pl",
    contactMethod: "both"
}
const user4={
     phone: "123456",
    mail: "",
    contactMethod: "both"
}
const user5={
     phone: "",
    mail: "123@mail.pl",
    contactMethod: "phone"
}
const user6={
    phone: "123456",
    mail: "",
    contactMethod: "mail"
}
const user7={
    phone: "",
    mail: "",
    contactMethod: "mail"
}
```
Wywołaj funkcję z podanymi argumentami i sprawdź ich działanie.

## Zadanie 2

Stwórz funkcję (webSocketInit) przyjmującą jako parametr:
- adres - adres webSocketu np. ws://localhost:3000,
- cb - inną funkcję, która ma się wykonać przed zamknięciem socketa,
- time - czas po jakim socket się zamyka <br />

Funkcja wyświetla w konsoli stringa:
- "web socket open on " i na koniec zdania dopisz adres podany jako paramter.
- czeka podany czas za pomoca setTimeout i wykorzystuje funkcje connectionClosed,
- wykonuje funkcję mu podaną nad setTimeout,

Stwórz funkcję connectionClosed która przyjmuje paramter connectionName będący adresem web socketu i wyświetla komunikat w konsoli "web socket closed " + connectionName z paramteru, użyj tej funkcji po setTimeout

Stwórz funkcję emitMessage, która przyjmuje jako paramter message wiadomość będącą stringiemi wyświetla ją w konsoli.

Do funkcji webSocketInit podaj funkcję emitMessage jako callback (aby zrobić to z parametrem należy użyć składni ()=>emitMessage("message"))

## Zadanie 3
Uzupełnij zadanie 2 o parametry domyślne:
- w funkcji webSocketInit adres="127.0.0.1:3000", 
- cb - inna funkcja to domyślnie funkcja emitMessage,
- time - 300,
- w funkcji connectionClosed parametr domyślny to 127.0.0.1:3000,
- emitMessage - domyślny message to "I'm live",

## Zadanie 4
Napisz funkcję, która dla podanej daty zwraca:
- jaki to był dzień tygodnia, miesiąc i jaka pora roku,

## Zadanie 5
Napisz funkcję, która dla podanej daty zwraca datę pierwszego dnia danego tygodnia,

## Zadanie 6
Napisz funkcję, która dla podanej daty zwraca czy to dzień tygodnia czy weekend.

## Zadanie 7
Napisz funkcję, która dla podanej daty zwraca ile dni zostało do weekendu.

## Zadanie 8
Napisz funkcję sprawdzającą czy podany rok był przestępny

## Zadanie 9
Napisz funkcje addDays, która przyjmuje dwa parametry:
- obecną datę,
- ile dni ma dodać,
i zwraca nową datę z dodanymi dniami

## Zadanie 10
Napisz funkcję isAfter, która przyjmuje dwa parametry:
- date1,
- date2,
która zwraca true jeżeli data2 jest po dacie1

## Zadanie 11
Napisz funkcję isBefore, która przyjmuje dwa parametry:
- date1,
- date2,
która zwraca true jeżeli data2 jest przed data1

## Zadanie 12
Napisz funkcję isFuture, która sprawdza czy podana data jest z przyszłości.

## Zadanie 13
Napisz funkcje isPast, która sprawdza czy podana data jest z przeszłości.

## Zadanie 14
Napisz funkcje która dla podanej liczby sekund zwraca ile to w godzinach.

## Zadanie 15
Napisz funkcję getToday, która zwraca dzisiejszą datę w formacie: nazwa dnia, data kalendarzowa

