"use strict";
// # Klasy i dziedziczenie zadania
//! ## Zadanie 1
// Stwórz klasę Computer posiadającą pola:
// -   moc zasilacza, - podawane w W
// -   prędkość procesora - podawane w GHz,
// -   ilosc rdzeni procesora,
// -   płyta główna,
// -   GPU karty graficznej - podawane w GHz,
//     Dodaj konstruktor i getery oraz setery do pól.<br />
//     Dodaj metodę info wyświetlającą informacje o komputerze.<br />
//     Dodaj metodę calculateProcessorsPower, która zwróci sumę predkoscProcesora\*iloscRdzeni+GPU.<br /> //! Chyba trzeba tu poprawić
//* Stare podejście
// ! Bez accessorow klasa będzie dostę
//? Czy przy deklaracji pól w klasie muszę im nadawać typ czy wystarczy w konstruktorze?
class Computer {
    // Field declaration inside the class
    #adapterPower; // [W]
    #processorSpeed; // [GHz]
    #coreQuantitiy;
    #motherboard;
    #graphicProcessorUnit; // [GHz]
    // Constructor for Computer class
    constructor(adapterPower, processorSpeed, coreQuantitiy, motherboard, graphicProcessorUnit) {
        this.#adapterPower = adapterPower;
        this.#processorSpeed = processorSpeed;
        this.#coreQuantitiy = coreQuantitiy;
        this.#motherboard = motherboard;
        this.#graphicProcessorUnit = graphicProcessorUnit;
    }
    //* Gettery
    get adapterPower() {
        return this.#adapterPower;
    }
    get processorSpeed() {
        return this.#processorSpeed;
    }
    get coreQuantitiy() {
        return this.#coreQuantitiy;
    }
    get motherboard() {
        return this.#motherboard;
    }
    get graphicProcessorUnit() {
        return this.#graphicProcessorUnit;
    }
    //* Settery
    set adapterPower(power) {
        this.#adapterPower = power;
    }
    set processorSpeed(speed) {
        this.#processorSpeed = speed;
    }
    set coreQuantitiy(amount) {
        this.#coreQuantitiy = amount;
    }
    set motherboard(type) {
        this.#motherboard = type;
    }
    set graphicProcessorUnit(GPU) {
        this.#graphicProcessorUnit = GPU;
    }
    //? Jak to można inaczej ogarnąć? Wiem, że istnieje coś takiego jak metoda super i mógłbym to machnąć super.userInfo(); ale co dalej to nie wiem, bo jakoś się musze do tego obiektu dostać. Zdres
    unitInfo() {
        alert("Look into the console for unit specification");
        let computerSpec = {
            "Power Supply": `${this.adapterPower} W`,
            Processor: `${this.coreQuantitiy} cores`,
            "Clock speed": `${this.processorSpeed} GHz`,
            Motherboard: `${this.motherboard}`,
            GPU: `${this.graphicProcessorUnit} GHz`,
        };
        return computerSpec;
    }
    calculateProcessorPower() {
        return this.processorSpeed * this.coreQuantitiy;
    }
}
const unitOne = new Computer(500, 2.4, 8, "Gigabyte Z690 Aorus Pro", 1.4);
unitOne.motherboard = "Fajna ta płyta";
// console.log(unitOne.calculateProcessorPower());
// console.log(unitOne);
// console.log(unitOne.unitInfo());
// console.log(unitOne.calculateProcessorPower());
//? Czy teraz zalecane jest tworzenie przez funkcje konstruktora?
//* tworzenie konstruktora przez "function constructor"
// function Computer(adapterPower, processorSpeed, coreQuantitiy, motherboard, graphicProcessorUnit) {
//     this.adapterPower = adapterPower;
//     this.processorSpeed = processorSpeed;
//     this.coreQuantitiy = coreQuantitiy;
//     this.motherboard = motherboard;
//     this.graphicProcessorUnit = graphicProcessorUnit;
//     this.unitInfo = function () {
//         alert("Look into the console for unit specification");
//         console.log(`
//         Power Supply: ${this.adapterPower}W,
//         Processor has a ${this.coreQuantitiy} cores,
//         Clock speed ${this.processorSpeed}GHz,
//         Motherboard comes from ${this.motherboard},
//         GPU ${this.graphicProcessorUnit}GHz`);
//     };
//     this.calculateProcessorPower = function () {
//         return (this.processorSpeed = this.coreQuantitiy * this.graphicProcessorUnit);
//     };
// }
// const unitTwo = new Computer(750, 3.0, 16, "AMD Radeon RX 7900 XTX", 1.6);
// unitTwo.unitInfo();
// console.log(unitTwo.calculateProcessorPower());
//! ## Zadanie 2
// Stwórz klasę SuperComputer dziedziczącą po klasie Computer, która posiada dodatkowe pole na ilość procesorów.
// Nadpisz metodę info o wyświetlanie dodatkowej informacji o ilości procesorów.
// Nadpisz metodę z klasy bazowej calculateProcessorsPower według wzoru:
// ` iloscProcesorow*(predkoscProcesora*iloscRdzeni)`
// Napisz metodę estimateCalculations, która dla podanego czasu w cyklach (GHz) oblicza czas obliczen wedlug wzoru:
// `timeInCycles/(iloscProcesorow*(predkoscProcesora*iloscRdzeni))`
class SuperComputer extends Computer {
    #processorQuantity;
    constructor(adapterPower, processorSpeed, coreQuantitiy, motherboard, graphicProcessorUnit, processorQuantity) {
        super(adapterPower, processorSpeed, coreQuantitiy, motherboard, graphicProcessorUnit);
        this.#processorQuantity = processorQuantity;
    }
    get processorQuantity() {
        return this.#processorQuantity;
    }
    set processorQuantity(processorQuantity) {
        this.#processorQuantity = processorQuantity;
    }
    unitInfo() {
        alert("Look into the console for unit specification");
        let computerSpec = {
            "Power Supply": `${this.adapterPower} W`,
            Processor: `${this.coreQuantitiy} cores`,
            "Clock speed": `${this.processorSpeed} GHz`,
            Motherboard: `${this.motherboard}`,
            GPU: `${this.graphicProcessorUnit} GHz`,
            "Processor amount": `${this.processorQuantity}`,
        };
        return computerSpec;
    }
    calculateProcessorPower() {
        return this.processorQuantity * (this.processorSpeed * this.coreQuantitiy);
    }
    estimateCalculations(cycleTime) {
        let timeInCycles = cycleTime;
        return timeInCycles / this.calculateProcessorPower();
    }
}
const suppaComputta = new SuperComputer(800, 3.4, 32, "Gigabyte Z690 Aorus Pro xD", 1.8, 2);
console.log(suppaComputta.unitInfo());
console.log(suppaComputta.calculateProcessorPower());
console.log(suppaComputta.estimateCalculations(4));
//! ## Zadanie 3
// Stwórz klasę CryptoMinerStation dziedziczącą po klasie Computer, która posiada dodatkowe pole na ilość GPU.
// Nadpisz metodę info o wyświetlanie dodatkowej informacji o ilości GPU.
// Nadpisztodę calculateProcessorsPower według wzoru:
// `(iloscGPU* meGPU)+(predkoscProcesora*iloscRdzeni)`
// Napisz metodę miningTime, która dla podanego czasu i kosztu prądu za W na GHz, oblicza koszt miningu według wzoru:
// `time*costs*GHz`
//? Nie wiem, czy dokładnie Ci chodziło z przekazywanym czasem?
class CryptoMinerStation extends Computer {
    #amountGPU;
    constructor(adapterPower, processorSpeed, coreQuantitiy, motherboard, graphicProcessorUnit, amountGPU) {
        super(adapterPower, processorSpeed, coreQuantitiy, motherboard, graphicProcessorUnit);
        this.#amountGPU = amountGPU;
    }
    get amountGPU() {
        return this.#amountGPU;
    }
    set amountGPU(amount) {
        this.#amountGPU = amount;
    }
    unitInfo() {
        alert("Look into the console for unit specification");
        let computerSpec = {
            "Power Supply": `${this.adapterPower} W`,
            Processor: `${this.coreQuantitiy} cores`,
            "Clock speed": `${this.processorSpeed} GHz`,
            Motherboard: `${this.motherboard}`,
            GPU: `${this.graphicProcessorUnit} GHz`,
            "GPU amount": `${this.amountGPU}`,
        };
        return computerSpec;
    }
    calculateProcessorPower() {
        return this.amountGPU * this.graphicProcessorUnit + this.processorSpeed * this.coreQuantitiy;
    }
    miningTime(time, gpuNum, gpuWats) {
        // kWh(1kWh = 1000W / h ) = 0.80gr
        // I assume that We have one kind of GPU, function requires only number of them in one kit
        // Time must be passed as days, so for example 2.5 is = to 2.5 day not 2.5 hours
        let consumptionGPU = gpuWats * gpuNum * 0.001;
        let costPerHour = 0.8;
        let usage = time * 24;
        let totalCost = usage * (consumptionGPU * costPerHour) * this.graphicProcessorUnit;
        return parseFloat(totalCost.toFixed(2));
        //* Amount of GPU * (time * )
    }
}
const miningSation = new CryptoMinerStation(800, 3.4, 32, "Gigabyte Z690 Aorus Pro xD", 1.8, 4);
console.log(miningSation.unitInfo());
console.log(miningSation.calculateProcessorPower());
console.log(miningSation.miningTime(2, 4, 50));
class ComputerGarage {
    computers = [];
    superComputers = [];
    cryptoMinerStations = [];
    // Methods setting the computers to an arrays
    addComputer(computer) {
        let arrOne = this.computers;
        return arrOne.push(computer);
    }
    addSuperComputer(superComputer) {
        let arrTwo = this.superComputers;
        return arrTwo.push(superComputer);
    }
    addCryptoStation(cryptoComputer) {
        let arrThree = this.cryptoMinerStations;
        return arrThree.push(cryptoComputer);
    }
    // Computer info
    // info(arrName: "computers" | "superComputers" | "cryptoMinerStations") {
    //     switch (arrName) {
    //         case :
    //           return  arrName.forEach((e) => {});
    //     }
    // }
    // garage units info
    garageInfo() {
        let basicComputers = this.computers;
        let superComputers = this.superComputers;
        let cryptoComputers = this.cryptoMinerStations;
        //Computer
        let garage = [];
        basicComputers.forEach((e) => {
            garage.push(e);
        });
        //SuperComputer
        superComputers.forEach((e) => {
            garage.push(e);
        });
        //CryptoComputer
        cryptoComputers.forEach((e) => {
            garage.push(e);
        });
        return garage;
    }
    // Setting specific computer to specific array
    // //? Jest inna metoda? Bo próbowałem po instanceof, ale to mi tylko zwaracało główną klase Computer na której bazuje reszta.
    addToGarage(unit) {
        if (unit.constructor === Computer) {
            this.computers.push(unit);
        }
        else if (unit.constructor === SuperComputer) {
            this.superComputers.push(unit);
        }
        else if (unit.constructor === CryptoMinerStation) {
            this.cryptoMinerStations.push(unit);
        }
    }
}
const mainGarage = new ComputerGarage();
const normalUnit = new Computer(400, 2.2, 8, "Gigabyte Z690 Aorus Pro", 1.0);
const superUnit = new SuperComputer(480, 4.2, 32, "Gigabyte Z690 Aorus Pro xD", 2.0, 4);
const cryptoUnit = new CryptoMinerStation(600, 2.2, 32, "Gigabyte Z690 Aorus Pro xD", 2.2, 8);
mainGarage.addComputer(normalUnit);
mainGarage.addComputer(normalUnit);
mainGarage.addSuperComputer(superUnit);
mainGarage.addCryptoStation(cryptoUnit);
console.log(mainGarage);
mainGarage.info(mainGarage.CryptoMinerStations);
console.log(mainGarage.garageInfo());
const normalUnitTwo = new Computer(4100, 22.2, 8, "Gigabyte Z690 Aorus Pro", 130);
const superUnitTwo = new SuperComputer(4800, 42.2, 32, "Gigabyte Z690 Aorus Pro xD", 6.0, 8);
const cryptoUnitTwo = new CryptoMinerStation(4800, 42.2, 32, "Gigabyte Z690 Aorus Pro xD", 6.0, 8);
mainGarage.addToGarage(normalUnitTwo);
mainGarage.addToGarage(superUnitTwo);
mainGarage.addToGarage(cryptoUnitTwo);
console.log(mainGarage);
//! # Zadanie 5
// Aby odświeżyć CSSa i poćwiczyć go z JSem zaimplementuj stronę dostępną pod [linkiem](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw)
