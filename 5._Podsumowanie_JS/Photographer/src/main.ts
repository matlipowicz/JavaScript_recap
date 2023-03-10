export {};
import { MappedValues, ReturnedValue } from "./types";
/*

# Fotograf

## Story

Na stronie głównej chciałbym wyświetlić galerię zdjęć w formie kafelek. Chciałbym żeby za każdym odswieżeniem strony pokazywały się inne zdjęcia. Chciałbym żeby po najechaniu na nie myszką pojawiła się na tle zdjęcia nazwa autora. Chciałbym aby na dole były przyciski prawo, lewo, które pozwalają na nawigowanie pomiędzy stronami w galerii

## Podpowiedź

W celu przedstawienia rozwiązania klientowi zapoznaj się z API https://picsum.photos
Wykorzystaj grida

## TODO
- [ ] strona główna z kafelkami
- [ ] losowanie zdjęć z API po załadowaniu strony
- [ ] pobieranie informacji dla zdjęcia
- [ ] obsługa przycisków na dole strony

*/
// //* INTERFACES

// //* DATA ARRAY
let photosArr: Array<MappedValues> = [];

let currentPage = 1;
let pageSize = 15;

const main = document.querySelector("#photographer") as HTMLDivElement;
const prevBtn = document.querySelector(".button__prev") as HTMLButtonElement;
const nextBtn = document.querySelector(".button__next") as HTMLButtonElement;
const pageNum = document.getElementById("page-num") as HTMLSpanElement;
const pageNumTotal = document.getElementById("page-num__total") as HTMLSpanElement;

//* Render random ids to endpoint
function getRandomPhotosLinks() {
    const endpoints = [];
    while (endpoints.length !== 50) {
        let randomId = Math.floor(Math.random() * 79);
        endpoints.push(`https://picsum.photos/id/${randomId}/info`);
    }
    return endpoints;
}

//* Event listeners
nextBtn.addEventListener("click", nextSide);
prevBtn.addEventListener("click", prevSide);
window.addEventListener("load", prepareView);

//* Pagination
function prevSide() {
    if (currentPage > 1) {
        currentPage--;
    }
    console.log(currentPage);
    renderPhotos();
}
function nextSide() {
    if (currentPage * pageSize < photosArr.length) {
        currentPage++;
    }
    console.log(currentPage);
    renderPhotos();
}

//* Render all data
async function prepareView() {
    const endpoints = await getRandomPhotosLinks();
    photosArr = await getPhotos(endpoints);
    renderPhotos();
}

const renderPhoto = (element: MappedValues, index: number) => {
    let imgDiv = document.createElement("div");
    let authorParagraph = document.createElement("p");
    let authorName = document.createTextNode(element.author);
    let img = document.createElement("img");

    imgDiv.classList.add(`photographer__box`);
    authorParagraph.appendChild(authorName);
    authorParagraph.classList.add("photographer__author");
    img.setAttribute("src", element.url);
    img.setAttribute("alt", `Photo-${index}`);

    imgDiv.appendChild(img);
    imgDiv.appendChild(authorParagraph);
    main.appendChild(imgDiv);
};

//* Render photos
async function renderPhotos() {
    console.log(photosArr);
    main.innerHTML = ``;
    let totalPageNumber = Math.ceil(photosArr.length / pageSize);
    pageNum.innerText = `${currentPage}`;
    pageNumTotal.innerText = `${totalPageNumber}`;

    //! slice array.slice(0,8) --> spróbuj
    photosArr
        .filter((_, index) => {
            let start = (currentPage - 1) * pageSize;
            let end = currentPage * pageSize;

            if (index >= start && index < end) return true;
        })
        .forEach((element, index) => {
            renderPhoto(element, index);
        });
}

//* Fetch data
async function getPhotos(endpoints: Array<string>) {
    let responses = await Promise.all(
        endpoints.map(async (endpoint): Promise<any> => {
            const response = await fetch(endpoint);
            const photos: Promise<object> = await response.json();

            return photos;
        })
    );
    console.log(responses);

    const mappedPhotos: MappedValues[] = responses.map((el) => ({
        author: el.author,
        url: el.download_url,
    }));
    return mappedPhotos;
}
