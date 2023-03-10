export {};
import { commentsObject } from "./types";
/*
# Panel administracyjny bloga

## Story klienta
W panelu administracyjnym do bloga chciałbym posiadać tabelkę w której wyświetlą się wszystkie komentarze do artykułów. Chciałbym mieć możliwość usuwania nieprzyzwoitych komentarzy. W moim panelu brakuje mi możliwości ich wyróżniania i wyszukiwania

## Podpowiedź
Klient nie dostarczył swojego API, więc musimy skorzystać z https://jsonplaceholder.typicode.com/comments  aby wyświetlić komentarze w tabeli. 

## TODO:

- [ x ] Stwórz tabelę z nagłówkami name, email, body i action
- [ x ] W polu action dodaj przycisk usuń, który usunie komentarz z drzewa DOM i wyświetli go w konsoli.
- [ x ] Dodaj mozliwość zaznaczania kilku wierszy i usuwania zaznaczonych
- [ x ] Dodaj checkbox wyróżnij nieprzyzwoite, który w body lub name komentarza sprawdzi czy zawiera on nieprzyzwoitą część i wyróżni wiersz na żółto (w celach demonstracyjnych wybierz jeden wyraz ze zbioru udostępnionego przez JSONplaceholder )

### Dodatkowe:
Filtrowanie postów
- [ ] Dodaj możliwość wyszukiwania w tabeli po polach:
* name
* email
* body

Dodaj select który wyswietli tytuły postów, z API 
https://jsonplaceholder.typicode.com/posts a następnie spraw aby po wybraniu postu pokazywały się komentarze tylko do niego (filtrowanie po parametrze postId z /comments)

*/
//* HTML elements
const table = document.querySelector(".admin__table") as HTMLTableElement;
const tableBody = document.querySelector(".admin__table-body") as HTMLTableElement;
const sortTableByName = document.querySelector('[data-sort="name"]') as HTMLButtonElement;
const sortTableByEmail = document.querySelector('[data-sort="email"]') as HTMLButtonElement;
const sortTableByComment = document.querySelector('[data-sort="comment"]') as HTMLButtonElement;
const deleteRowBtn = document.querySelector(".delete-row__btn") as HTMLButtonElement;

//* Global arrays
let commentsArray: Array<commentsObject> = [];
let selectedRow: Array<number> = [];
let redRows: Array<HTMLElement> = [];

//* Event listeners

//Windowload
window.addEventListener("load", prepareTable);
table.addEventListener("click", removeRow);
tableBody.addEventListener("click", highlightForbiddenWord);

let desc: boolean = false;
//Sort table by name
sortTableByName.addEventListener("click", async () => {
    sortItems(commentsArray, "name", desc);
    console.log(commentsArray);
    displayComments(commentsArray);
    desc = !desc;
});

//Sort table by email
sortTableByEmail.addEventListener("click", async () => {
    sortItems(commentsArray, "email", desc);
    displayComments(commentsArray);
    desc = !desc;
});

//Sort table by comment
sortTableByComment.addEventListener("click", async () => {
    sortItems(commentsArray, "body", desc);
    displayComments(commentsArray);
    desc = !desc;
});

table.addEventListener("click", deleteSelectedElements);

//! Functions

// Delete selected elements
function deleteSelectedElements(e: Event) {
    let target = e.target as HTMLElement;
    let row = target.parentElement as HTMLTableElement;
    let cellClass = target.classList.contains("admin__table-cell");

    if (cellClass) {
        row.classList.toggle("active-row");
        deleteRowBtn.classList.add("show__btn");

        if (!redRows.includes(row)) {
            selectedRow.push(Number(row.dataset.id));
            redRows.push(row);
        } else {
            selectedRow.splice(selectedRow.indexOf(Number(row.dataset.id)), 1);
            redRows.splice(redRows.indexOf(row), 1);
        }
        return redRows;
    }
    console.log(redRows);

    if (target === deleteRowBtn) {
        //* Remove from a DOM
        redRows.forEach((rows) => {
            if (rows.classList.contains("active-row")) {
                rows.remove();
            }
        });

        //* Remove from an array
        let editedTable = commentsArray.filter((element) => {
            return !selectedRow.includes(element.id);
        });
        console.log(editedTable);
        commentsArray = editedTable;
        return commentsArray;
    }
}

//Prepare table
async function prepareTable() {
    const endpoint = "https://jsonplaceholder.typicode.com/comments";
    commentsArray = await getCommentsApi(endpoint);
    displayComments(commentsArray);
}

//Sort ascending and descending
function sortItems(array: any, property: string, desc: boolean) {
    //? Jaki typ dodać jako parametry w sort?
    array.sort((a, b): number => {
        if (a[property] < b[property]) {
            return -1;
        }

        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });

    if (desc) array.reverse();
    return array;
}

//Remove one row
function removeRow(e: any) {
    const btn = e.target;

    if (!btn.classList.contains("btn-delete")) {
        return;
    }
    console.log();

    let deletedComment = btn.parentElement.previousSibling.innerText;
    let deletedCommentUser = btn.parentElement.previousSibling.previousSibling.innerText;
    const getRowId = Number(btn.getAttribute("data-id"));
    btn.closest("tr").remove();

    const arrElementIndex = commentsArray.findIndex((element) => {
        if (element.id === getRowId) {
            return element.id;
        }
    });

    commentsArray.splice(arrElementIndex, 1);
    console.log(commentsArray, arrElementIndex);

    console.log(`Deleted comments from ${deletedCommentUser}\n\n${deletedComment}`);
}

//Highlight forbidden text

function highlightForbiddenWord(e: Event) {
    const checkboxInput = e.target as HTMLInputElement;

    if (checkboxInput.classList.contains("admin__table-checkbox") && checkboxInput.checked === true) {
        let nameCell = checkboxInput?.parentElement?.nextSibling as HTMLTableCellElement;
        let commentCell = checkboxInput?.parentElement?.nextSibling?.nextSibling?.nextSibling as HTMLTableCellElement;

        const regexp = new RegExp("quia", "mg");

        let commentHTML: string = commentCell.innerHTML;
        let nameHTML: string = nameCell.innerHTML;

        let replacedTextInCommentCell = commentHTML.replace(regexp, `<mark>quia</mark>`);
        let replacedTextInNameCell = nameHTML.replace(regexp, `<mark>quia</mark>`);

        commentCell.innerHTML = replacedTextInCommentCell;
        nameCell.innerHTML = replacedTextInNameCell;
    }
}

//Create content
const renderRow = <T extends commentsObject>(el: T, index: number) => {
    //* Create table body

    const userRow = document.createElement("tr");
    let verifyCell = document.createElement("td");
    let nameCell = document.createElement("td");
    let emailCell = document.createElement("td");
    let commentCell = document.createElement("td");
    let actionCell = document.createElement("td");
    let checkbox = document.createElement("input");
    const deleteBtn = document.createElement("button");

    //* Add classes
    userRow.classList.add("admin__table-rw");
    nameCell.classList.add("admin__table-cell", "admin__table-name");
    emailCell.classList.add("admin__table-cell", "admin__table-emial");
    commentCell.classList.add("admin__table-cell", "admin__table-comment");
    verifyCell.classList.add("admin__table-cell");
    checkbox.classList.add("admin__table-checkbox");

    actionCell.classList.add("admin__table-cell", "admin__table-action");
    deleteBtn.classList.add("btn-delete");

    nameCell.innerText = el.name;
    emailCell.innerText = el.email;
    commentCell.innerText = el.body;
    deleteBtn.innerText = "x";
    deleteBtn.dataset.id = `${el.id}`;
    userRow.dataset.id = `${el.id}`;
    checkbox.setAttribute("type", "checkbox");
    verifyCell.appendChild(checkbox);
    actionCell.appendChild(deleteBtn);

    userRow.append(verifyCell, nameCell, emailCell, commentCell, actionCell);
    tableBody.appendChild(userRow);
};

//Render HTML content
function displayComments(array: Array<commentsObject>) {
    tableBody.innerHTML = "";

    array.forEach(<T extends commentsObject>(el: T, index: number) => {
        renderRow(el, index);
    });
}

//Fetch data form an API

async function getCommentsApi<T>(endpoint: string): Promise<T> {
    const response = await fetch(endpoint);
    const comments = await response.json();

    return comments;
}
