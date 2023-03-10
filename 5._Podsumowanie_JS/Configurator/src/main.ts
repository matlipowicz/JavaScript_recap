export {};

/*

# Konfigurator tapicerki

## Story klienta

Podczas zamówienia mebli mamy w firmie ponad sto kolorów, obecnie klient wybiera kolor z selecta co jest dla niego niewygodne, ponieważ nie ma w nim możliwości wyszukiwania.

## Podpowiedź

Stwórz inputa w którym po wpisywaniu przez uzytkownika frazy nastąpi filtrowanie dostępnych opcji. Po kliknięciu bez frazy wyświetlą się wszystkie opcje.

Na potrzeby developmentu stwórz wyszukiwanie po liście elementów

## TODO

-   [ ] wyszukiwanie kolorów

### dodatkowe:

-   [ ] wygeneruj listę 20 losowych kolorów
-   [ ] zapoznaj się z API https://www.thecolorapi.com i pobierz nazwę dla wygenerowanych kolorów

## TODO

1. Zaciągnąć kolory z API i wygenerować randomowo liste 20
   (async,await + fetch)
2. Utworzyć inputa który wyszuka kolor z opcji, jeżeli nic nie jest wpisane mają się wyświetlić wszystkie kolory
   (pobranie wartości z inputa i korelacja z tym co jest w zaciągniętych danych, następnie wyświetlenie po wpisanej frazie) + (walidacja)
3. Utworzyć listę z dostępnymi kolorami + ilość dostępnych + wyszukiwanie z listy elementów
   (dropdown list z checkboxem)


*/

//* Get element

const input = document.querySelector(".color-configurator__input") as HTMLInputElement;
const generateColor = document.querySelector(".color-configurator__btn") as HTMLButtonElement;
const ul = document.querySelector(".color-configurator__ul") as HTMLUListElement;
const body = document.querySelector("body") as HTMLElement;
const appContainer = document.getElementById("app") as HTMLDivElement;

//! Event Listeners
input.addEventListener("keyup", () => {
    const value = input.value.toUpperCase();

    let liList = Array.from(ul.children);
    console.log(liList);
    liList.forEach((element: any) => {
        if (element.innerText.toUpperCase().includes(value)) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
    });
});
//! Hide the list
body.addEventListener("click", (e: Event) => {
    console.log(e.target);
    if (e.target === body || e.target === appContainer) {
        // ul.style.display = "none";
        ul.classList.add("hide");
        ul.classList.remove("active");
    } else {
        ul.style.display = "";
    }
});

input.addEventListener("click", (e: Event) => {
    if (e.target === input) {
        // ul.style.display = "flex";
        ul.style.opacity = "1";
        ul.classList.remove("hide");
        ul.classList.add("active");
    } else {
        ul.style.display = "";
    }
});

generateColor.addEventListener("click", getColorsData);

window.addEventListener("load", () => {
    ul.style.opacity = "0";
});

//? Jak zrobić żeby mi na kliknięcie przycisku generowania kolorów zmieniało ciągle te wartości rgb i pobierało inne kolory?

//! RGB string generator
function colorEndpointGenerator() {
    const colorsEndpointArr: Array<string> = [];
    while (colorsEndpointArr.length !== 20) {
        const getRandomRed = Math.floor(Math.random() * 256);
        const getRandomGreen = Math.floor(Math.random() * 256);
        const getRandomBlue = Math.floor(Math.random() * 256);
        colorsEndpointArr.push(`https:/www.thecolorapi.com/id?rgb=rgb(${getRandomRed},${getRandomGreen},${getRandomBlue})`);
    }
    return colorsEndpointArr;
}

//! Colors API
async function getColorsData() {
    const colorsEndpointArr = colorEndpointGenerator();

    const responses = await Promise.all(
        colorsEndpointArr.map(async (endpoint) => {
            const res = await fetch(endpoint);
            return res.json();
        })
    );

    //! Create list
    const colorValues = responses.map((element) => ({
        name: element.name.value,
        rgb: element.rgb.value,
    }));

    console.log(colorValues);

    colorValues.forEach((element) => {
        let li = document.createElement("li") as HTMLLIElement;
        let p = document.createElement("p") as HTMLParagraphElement;
        let box = document.createElement("div") as HTMLDivElement;
        let div = document.createElement("div") as HTMLDivElement;

        //* list_styles
        li.classList.add("color-configurator__li");
        li.style.display = "flex";
        li.style.gap = "5px";
        //* div_styles
        div.style.width = "100%";
        div.style.display = "grid";
        div.style.gridTemplateColumns = "1fr 1fr";
        div.style.justifyItems = "center";
        //* paragraph_styles
        p.innerText = element.name;
        p.style.margin = "5px";
        //* box_styles
        box.style.width = "25px";
        box.style.height = "25px";
        box.style.backgroundColor = element.rgb;

        //* appending
        div.append(p, box);
        li.append(div);
        ul.append(li);

        li.addEventListener("click", () => {
            input.value = p.innerText;
        });
    });
}
