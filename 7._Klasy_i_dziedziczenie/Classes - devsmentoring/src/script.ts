// Stwórz obiekt, który będzie reprezentował kota. Powinien on posiadać takie pola jak: name, level_hapiness, level_hunger, level_lonliness.
// Następnie dodaj metody, które będą zwiększały oraz zmniejszały wartości powyższych zmiennych. Nazwij je zgodnie z działaniem, np. “feed”, “sleep”, “play”.
// Następnie, stwórz metodę, która będzie wyświetlała informację o statusie kota (wydruk uzależnij od wartości atrybutów kota), np. “Pusia is not lonliness, a bit hungry and very happy”, “Pusia is a bit lonliness, very hungry and not happy” itp.

// Rozwiązanie oprzyj o dwa poznane sposoby na tworzenie klas.

// Podpowiedź: konstruktor, 4 metody (feed, sleep, play, status)

// import { CatFields } from "./interfaces/fields.js";
// export class Cat implements CatFields {
//     name;
//     levelOfHappiness;
//     levelOfHunger;
//     levelOfLoneliness;
//     constructor(name: string, levelOfHappines: number, levelOfHunger: number, levelOfLoneliness: number) {
//         this.name = name;
//         this.levelOfHappiness = levelOfHappines;
//         this.levelOfHunger = levelOfHunger;
//         this.levelOfLoneliness = levelOfLoneliness;
//     }

//     play(attention: number, fun: number): void | [number, number] {
//         if ((attention > 0 && fun > 0) || (attention > 0 && fun < 0)) {
//             this.levelOfLoneliness -= attention;
//             this.levelOfHappiness += fun;
//         } else if ((attention < 0 && fun > 0) || (attention < 0 && fun < 0)) {
//             this.levelOfLoneliness += attention;
//             this.levelOfHappiness += fun;
//         }
//     }

//     feed(feeding: number): void | number {
//         if (feeding > 0 || feeding < 0) {
//             this.levelOfHunger += feeding;
//         }
//     }

//     sleep(sleep: number): void | number {
//         if (sleep > 0 || sleep < 0) {
//             this.levelOfHappiness += sleep;
//         }
//     }

//     catStatus(): string {
//         let very = "very";
//         let bit = "a bit";
//         let not = "not";

//         // Range 0 - 5  === "very"
//         if (this.levelOfHappiness || this.levelOfHunger || this.levelOfLoneliness < 5) {
//             return `${this.name} is ${very} hungry, ${very} loneliness and ${not} happy!`;
//             // Range 5 - 10  === "a bit"
//         } else if (
//             this.levelOfHappiness ||
//             this.levelOfHunger ||
//             (this.levelOfLoneliness < 10 && this.levelOfHappiness) ||
//             this.levelOfHunger ||
//             this.levelOfLoneliness >= 5
//         ) {
//             return `${this.name} is ${bit} hungry, ${bit} loneliness and ${bit} happy!`;
//             // Range 10 - infinite  === "not"
//         } else {
//             return `${this.name} is ${not} hungry, ${not} loneliness and ${very} happy!`;
//         }
//     }
// }

// const catOne = new Cat("Dixi", 12, 14, 22);

// catOne.play(10, -5);
// catOne.feed(-2);
// catOne.sleep(12);
// console.log(catOne.catStatus());

//! Ex.2
// Stwórz klasę Order, która będzie reprezentowała zamówienie ze sklepu internetowego. Klasa ta ma zawierać takie pola jak: id (będący kolejnymi liczbami całkowitymi), price, name. Utwórz mapę, do której będziesz dynamicznie dodawał kolejne zamówienia (w sumie 5). Kluczami w takiej mapie mają być wartości odpowiadające id-kom z każdego z zamówień.

// Podpowiedź: Klasa Order i Mapa to osobne “byty”. Nie należy tworzyć mapy w klasie. Mapa przechowuje obiekty stworzone przez konstruktor klasy Order.
// import { Ordering } from "./interfaces/order";
// const orderMap = new Map();
// class Order implements Ordering {
//     id;
//     price;
//     name;
//     constructor(id: string, name: string, price: number) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }

//     addOrder(): {} {
//         return orderMap.set(this.id, { name: this.name, price: this.price });
//     }
// }

// const orderOne = new Order("029232", "Trousers", 129.9);
// const orderTwo = new Order("273212", "Shoes", 229.9);
// orderOne.addOrder();
// orderTwo.addOrder();

// console.log(orderMap);

//! Ex.3

/*
Stwórz klasę Account, która będzie przechowywała pola: balance, number (numer konta) oraz metody: deposit(value), withdraw(value) oraz gettery i settery dla wymienionych pól. Implementację metod deposit oraz withdraw pozostawiam Tobie. Pamiętaj o dodaniu odpowiednich walidacji w takich metodach (np. wpłacana wartość nie może być ujemna).

Następnie stwórz dwie klasy dziedziczące po Account: SavingAccount oraz CurrentAccout.

Klasa SavingAccount powinna posiadać również pole: interest i metodę, która będzie odpowiednio zwiększała wartość przechowywanego atrybutu.

CurrentAccount powinien natomiast składać się z atrybutu overdraft_limit z metodą zwiększającą jego wartość. 

Następnie stwórz klasę Bank, która będzie zawierała tablicę wielu obiektów Account (konkretnie CurrentAccout oraz SavingAccount). W banku stwórz metodę update, która będzie iterowała po każdym koncie i dodawała do niego dowolną wielkość depozytu. Dodatkowo, w przypadku obiektu typu SavingAccount, ma być zwiększane pole interest każdego konta o 5, a dla CurrentAccount - overdraft_limit o 10.
*/

// import { Save } from "./interfaces/bank_array";
// import { Curr } from "./interfaces/bank_array";

// class Account {
//     #balance: number;
//     #number: string;
//     constructor(balance: number, number: string) {
//         this.#balance = balance;
//         this.#number = number;
//     }

//     //Getters
//     get balance() {
//         return this.#balance;
//     }
//     get number() {
//         return this.#number;
//     }
//     //Setters
//     set balance(balance) {
//         this.#balance = balance;
//     }
//     set number(number) {
//         this.#number = number;
//     }

//     deposit(value: number): void {
//         value !== 0 && value > 0 ? (this.balance += value) : alert("Enter positive value");
//     }

//     withdraw(value: number): void {
//         value !== 0 && value > 0 ? (this.balance -= value) : alert("Enter positive value");
//     }
// }

// const accountOne = new Account(5800, "PL16109024025699669825378533");
// accountOne.withdraw(1200);
// accountOne.deposit(2200);
// console.log(accountOne);

// class SavingAccount extends Account {
//     interest: number;
//     constructor(balance: number, number: string, interest: number) {
//         super(balance, number);
//         this.interest = interest;
//     }
//     // Account interest per year (earns 5% of an interest)
//     // Used formula: Interest = account_balance * interest_earns/year * time period (one year, so it's equal to 1)
//     interestAmount(value: number) {
//         let interestValue = this.balance * (value * 0.01) * 1;

//         return (this.interest += interestValue);
//     }
// }

// const savingAccountOne = new SavingAccount(4200, "PL46109024026716248145543244", 200);
// const savingAccountTwo = new SavingAccount(124500, "PL39109024026945762353958714", 2700);

// console.log(savingAccountTwo);

// class CurrentAccount extends Account {
//     overdraft_limit: number;
//     constructor(balance: number, number: string, overdraft_limit: number) {
//         super(balance, number);
//         this.overdraft_limit = overdraft_limit;
//     }

//     increaseLimit(value: number): number {
//         return (this.overdraft_limit += value);
//     }
// }

// const currentAccountOne = new CurrentAccount(5600, "PL07109024027859344882292137", 800);
// const currentAccountTwo = new CurrentAccount(17300, "PL11109024027621887893579892", 4000);
// console.log(currentAccountTwo);

// class Bank {
//     accountsArr: (Save | Curr)[];
//     constructor(accountsArr: (Save | Curr)[]) {
//         this.accountsArr = accountsArr;
//     }

//     updateAccounts(account: Save | Curr): any {
//         return this.accountsArr.push(account);
//     }

//     update(value: number) {
//         this.accountsArr.map((el: any) => {
//             el.balance += value;

//             return el.constructor === SavingAccount ? (el.interest += 5) : (el.overdraft_limit += 10);
//         });
//     }
// }

// const collectionOfAccounts = new Bank([]);
// collectionOfAccounts.updateAccounts(savingAccountOne);
// // collectionOfAccounts.updateAccounts(currentAccountOne);
// // collectionOfAccounts.updateAccounts(currentAccountTwo);
// // collectionOfAccounts.updateAccounts(savingAccountTwo);
// // collectionOfAccounts.update(35000);
// // collectionOfAccounts.update(25000);
// // collectionOfAccounts.update();
// console.log(collectionOfAccounts);

//! Ex.4
// Stwórz klasę Airplane z polem name oraz flagą isFlying (typ bool), która domyślnie jest ustawiana na false.
// Utwórz dwa obiekty Airplane.
// Korzystając z prototypu, dodaj do obiektów metodę takeOff, która będzie ustawiała flagę isFlying na true oraz land - setującą isFlying na false. Sprawdź, czy metody dodane dzięki prototypowi są prawidłowo wywoływane i realizują swoje założenia.

// class Airplane {
//     name;
//     isFlying = false;
//     constructor(name: string) {
//         this.name = name;
//     }

//     takeOff() {
//         this.isFlying = true;
//     }
// }

// const airplaneOne = new Airplane("SU57");
// airplaneOne.takeOff();
// console.log(airplaneOne);

//! Ex.5

// - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
// - All instances built with Car:
//     + should initialize with an `tank` at 0
//     + should initialize with an `odometer` at 0
// - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
// - Give cars ability to `.drive(distance)`. The distance driven:
//     + Should cause the `odometer` to go up.
//     + Should cause the the `tank` to go down taking `milesPerGallon` into account.
// - A car which runs out of `fuel` while driving can't drive any more distance:
//     + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.

class Car {
    model: string;
    kilometersPerLiter: number;
    tank: number = 0;
    odometer: number = 0;
    constructor(model: string, kilometersPerLiter: number) {
        this.model = model;
        this.kilometersPerLiter = kilometersPerLiter;
    }
    // Filling the tank
    fill(liters: number): number {
        return (this.tank += liters);
    }

    drive(distance: number): any {
        let fuelUsage = this.kilometersPerLiter * distance;
        // Increasing odometer
        this.odometer += distance;
        // Fuel usage
        this.tank -= fuelUsage;

        if (Math.sign(this.tank) === -1 || this.tank === 0) {
            let difference = Math.round(this.tank / this.kilometersPerLiter);
            alert(`I ran out of fuel at ${this.odometer + difference}`);
            this.tank = 0;
            this.odometer += difference;
        } else {
            this.tank;
        }
    }
}

const carOne = new Car("Volkswagen Golf VII", 0.06);
carOne.fill(20);
carOne.drive(577);
console.log(carOne);
