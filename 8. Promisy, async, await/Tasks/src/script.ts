// # Zadania z promis i async, await

import { Country, SelectedCountryData } from "./types";

//! ## Zadanie 1

// Stwórz promisę, która na wejście może dostać dowolny typ danych. Jeśli otrzymana dana to liczba zwróć odpowiedź "hello" po 2 sekundach, a jeśli to string odpowiedź zwróć po sekundzie "test". W innym przypadku zwróć błąd. Wykorzystaj składnię async, await.

//! ## Zadanie 2 (zadanko jest w folderze advice_generator)

// Zaimplementuj advice generator ze strony [frontend mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)

//! ## Zadanie 3

// Zapoznaj się z [API](https://jsonplaceholder.typicode.com/) i pobierz z API https://jsonplaceholder.typicode.com/users po załadowaniu strony wszystkich userów, a następnie za pomocą JSa stwórz funkcję, która stworzy kartę i wyświetli dane usera w przeglądarce domyślne widoczne (username, email) oraz po kliknięciu w przycisk wyświetla następne informacje (adres miasto, ulica, kod pocztowy). Zastosuj operacje na DOM, składnię async, await oraz ostyluj galerię kart userów z wykorzystaniem SCSSa lub tailiwnd css.

const endpoint = "https://jsonplaceholder.typicode.com/users";

async function getData() {
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
}

function createCard({ username, email, address }: any) {
    //* Username
    const userName: HTMLElement = document.createElement("p");
    userName.classList.add("card__username");
    userName.innerHTML = `<span class="bold">Username: </span>${username}`;

    //* Email
    const userEmail: HTMLElement = document.createElement("p");
    userEmail.classList.add("card__email");
    userEmail.innerHTML = `<span class="bold">E-mail: </span>${email}`;

    const userDefaultData = document.createElement("div");
    userDefaultData.classList.add("card__default-data");
    userDefaultData.appendChild(userName);
    userDefaultData.appendChild(userEmail);

    //* Button
    const userBtn: HTMLButtonElement = document.createElement("button");
    userBtn.classList.add("card__btn");
    userBtn.innerText = "Expand credentials";

    //* Address
    const addressContainer: HTMLDivElement = document.createElement("div");
    addressContainer.classList.add("card__address-container");
    addressContainer.setAttribute("id", "card__address-expand");
    const addressCredentials = `
    <p class="card__address-container-city"><span class="bold">City: </span>${address.city}</p>
    <p class="card__address-container-street"><span class="bold">Street: </span>${address.street}</p>
    <p class="card__address-container-zipcode"><span class="bold">Zipcode: </span>${address.zipcode}</p>
`;
    addressContainer.innerHTML += addressCredentials;

    // expandContainer.innerHTML += addressContainer;

    const bodyElement: any = document.querySelector("body");
    const mainContainer = document.createElement("section");
    const expandContainer: HTMLDivElement = document.createElement("div");
    expandContainer.classList.add("card__expand-container");

    mainContainer.classList.add("card");
    mainContainer.appendChild(userDefaultData);
    mainContainer.appendChild(userBtn);
    mainContainer.appendChild(expandContainer);
    expandContainer.appendChild(addressContainer);

    bodyElement.appendChild(mainContainer);

    function unrollData(event: Event) {
        //* First approach
        // if(event.target === userBtn && addressContainer.style.display !== "none" ){
        //     addressContainer.style.display = "none";
        // }else{
        //     addressContainer.style.display = "block";
        // }
        //* Second approach
        if (event.target === userBtn) {
            addressContainer.classList.toggle("card__address-container");
        }
    }

    userBtn.addEventListener("click", unrollData);
    return bodyElement;
}

getData().then((item: any) => {
    item.forEach((element: {}) => {
        createCard(element);
    });
});
//! My second dumb solution xD
// function createCard({ id, username, email, address }: any) {
//     const container = document.querySelector("body") as HTMLElement;

//     // Card element
//     const card = document.createElement("section");
//     card.classList.add("card");

//     // Card Content
//     const content = `
//     <section class="card">
//         <div class="card__body">
//             <div class="card__default-data">
//                 <p class="card__name" id="card__name--${id}"> ${username}</p>
//                 <p class="card__email" id="card__email--${id}"> ${email}</p>
//             </div>
//             <button class="card__btn"> Expand credentials ${id}</button>
//             <div class="card__collapse--${id}">
//                 <p class="card__city" id="card__name--${id}"> ${address.city}</p>
//                 <p class="card__street" id="card__name--${id}"> ${address.street}</p>
//                 <p class="card__zipcode" id="card__name--${id}"> ${address.zipcode}</p>
//             </div>
//         </div>
//     </section>
//     `;

//     container.innerHTML += content;

//     const btn = document.querySelectorAll(".card__btn") as NodeList;

//     function unrollData(event: any) {
//         const collapse = event.target.nextElementSibling;

//         if (event.target.classList.contains("card__btn")) {
//             collapse.classList.toggle("card__address-container");
//         }
//     }

//     btn.forEach((item) => {
//         item.addEventListener("click", unrollData);
//     });
// }
// getData().then((item) => {
//     item.forEach((element: any) => {
//         createCard(element);
//     });
// });

//! ## Zadanie 4

// Pobierz dane z endpointu https://restcountries.com/v3.1/all a następnie wykonaj operacje:
// - [ ] policz ile krajów ma walutę euro,
// - [ ] znajdź kraj bez stolicy,
// - [ ] pogrupuj nazwy krajów według kontynentu,
// - [ ] znajdź który kontynent ma najwięcej, a który najmniej państw,
// - [ ] zsumuj populacje krajów na danych kontynentach,
// - [ ] zsumuj powierzchnie krajów na danych kontynentach,
// - [ ] wyswietl nazwy kontynentow o najwiekszej i najmiejszej powierzchni,
// - [ ] wyswietl nazwy kontynentow o najwiekszej i najmniejszej populacji,
// - [ ] posortuj waluty alfabetycznie,

// Podpowiedź dane możesz grupować za pomocą reduce, przykładowa implementacja [tutaj](https://learnwithparam.com/blog/how-to-group-by-array-of-objects-using-a-key/)

const secondEndpoint = "https://restcountries.com/v3.1/all";

const getCountriesData = async () => {
    try {
        const response = await fetch(secondEndpoint);
        const data = await response.json();

        calculateData(data);
    } catch (err) {
        console.log(err);
    }
};

function calculateData(item: any) {
    const flattedDataArr: Array<number> = [];

    const countryData = item.map((country: Country) => ({
        name: country.name.common,
        capitol: country.capital,
        continent: country.continents,
        population: country.population,
        currency: country.currencies,
        area: country.area,
    }));

    //* Countries with EUR currency
    countryData.forEach((element: SelectedCountryData) => {
        for (const currencyValue in element.currency) {
            return currencyValue === "EUR" ? flattedDataArr.push(1) : flattedDataArr.push(0);
        }
    });

    flattedDataArr.reduce((prev, curr) => prev + curr);

    //* Country without capitol
    const withoutCapitol = countryData.filter((el: SelectedCountryData) => {
        if (!el.capitol) {
            let { name } = el;
            console.log(name);
        }
    });

    //* Group by continent
    //! Ogarnij jak to działa (już w miare wyjaśnione)
    const groupByContinent = (arr: [], key: string) => {
        //? Jakie tutaj dać typy do reducera?
        const reducer = function (groups: any, item: any) {
            let name = item[key];
            let group = (groups[name] = groups[name] || []);
            group.push(item);
            return groups;
        };
        return arr.reduce(reducer, {});
    };

    const continentGrouping = groupByContinent(countryData, "continent");

    //* The most and the least countries in a contintent

    const biggestNumOfCountries = (arr: any) => {
        let continentsWithNumbers: any = {};
        let sortedContinents = [];
        for (const value in arr) {
            continentsWithNumbers[value] = arr[value].length;
        }
        for (const continents in continentsWithNumbers) {
            sortedContinents.push({ country: continents, countries: continentsWithNumbers[continents] });
        }

        sortedContinents.sort((a, b): number => {
            return a.countries - b.countries;
        });

        console.log(sortedContinents);
        console.log(`The lowest countries number has ${sortedContinents[0].country}, with amount of ${sortedContinents[0].countries}`);
        console.log(
            `The highest countries number has ${sortedContinents[sortedContinents.length - 1].country}, with amount of ${
                sortedContinents[sortedContinents.length - 1].countries
            }`
        );
    };

    biggestNumOfCountries(continentGrouping);

    //* Add up the populations in a continents
    //? Jaki typ tutaj w parametrze funkcji skoro przekazuje obiekt, który ma pogrupowane tablice z osadzonymi dalej obiekatmi?
    const sumPopulation = (arr: any) => {
        let sortedPopulation = [];

        for (const num in arr) {
            console.log(arr[num]);
            const populationCountries = arr[num].map((element: any) => ({
                sumContinent: element.continent,
                population: element.population,
            }));

            const sum = populationCountries.reduce((prev: any, curr: any) => (prev += curr.population), 0);
            //! Display max and min population continent
            //? Wiem jak wyciągnąć najmniejszą i największą wartość, ale jak wyświetlić ich kontynent nie mam pomysłu (siedze cały weekend nad tym xD)
            sortedPopulation.push(sum);
        }
        sortedPopulation.sort((a, b) => {
            return a - b;
        });
        console.log(sortedPopulation);
    };

    sumPopulation(continentGrouping);

    // sumPopulation(continentGrouping);

    //* Add up the area of a countries on continents

    const sumArea = (arr: any) => {
        let arrArea: object[] = [];

        for (const area in arr) {
            let areaObject = arr[area];
            const areas = areaObject.map((element: any) => ({
                continents: element.continent,
                area: element.area,
            }));

            let sum = areas.reduce((prev: any, curr: any) => (prev += curr.area), 0);

            arrArea.push(sum);
        }

        //! Display max and min area continent
        //? Wiem jak wyciągnąć najmniejszą i największą wartość, ale jak wyświetlić ich kontynent nie mam pomysłu (siedze cały weekend nad tym xD)
        arrArea.sort((a: any, b: any) => {
            return a - b;
        });
        console.log(arrArea);
    };

    sumArea(continentGrouping);

    const currencySorter = (arr: any) => {
        let currencyCode: Array<string> = [];
        let currencies = arr.map((element: any) => ({
            currency: element.currency,
        }));

        currencies.forEach((item: any) => {
            for (let curr in item.currency) {
                currencyCode.push(curr);
            }
        });
        currencyCode.sort();

        console.log(currencyCode);
    };

    currencySorter(countryData);
}

getCountriesData();
