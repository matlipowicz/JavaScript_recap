"use strict";

// XMLHttpRequest (HTTP request)

/*
* Fetchując dane przy pomocy XMLHttpRequest trzeba pamiętać o:
    - stan requesta (są 1 - 4 [https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState]) 
    - aby dane zostały pobrane poprawnie bez błędów, stan requesta musi być równy 4 oraz status równy 200
    - typ requesta musi być GET
    - endpoint musi być ustawiony do pobrania danych z np. API 
*/

// const getTodo = (resource) => {
//     let promisik = new Promise((resolve, reject) => {
//         const req = new XMLHttpRequest();
//         req.addEventListener("readystatechange", () => {
//             if (req.readyState === 4 && req.status === 200) {
//                 const data = JSON.parse(req.responseText);
//                 resolve(data);
//             } else if (req.readyState === 4) {
//                 reject("error getting the resource");
//             }
//         });
//         req.open("GET", resource);
//         req.send();
//     });
//     return promisik;
// };

// getTodo("todo/palik.json")
//     .then((data) => {
//         console.log("Promise 1 resolved:", data);
//         return getTodo("todo/padre.json");
//     })
//     .then((data) => {
//         console.log("Promise 2 resolved:", data);
//         return getTodo("todo/palik.json");
//     })
//     .then((data) => {
//         console.log("Promise 3 resolved:", data);
//     })
//     .catch((err) => {
//         console.log("Promise rejected:", err);
//     });

/* 
! Callback
Callbacki to też funkcje, przekazane do innej funkcji jako parametr. One też pozwalają na wykonanie konkretnego kawałka kodu przed wykonaniem kolejnego

Fetchując dane przy wykorzystaniu callbacka musimy pamietac o przesłaniu parametrów (err, data) i aby odczytać te dane trzeba je z tekstu zamienić ponownie na JSON'a przy użyciu JSON.parse(data)

* W przypadku gdy mamy kilka źródeł, z których chcemy fetchować dane w konkretnej kolejności, jesteśmy w stanie tego dokonać, ale przez to się tworzy tzw. "Callback hell". Kod staje się nieczytelny i właśnie tutaj przychodzi nam z odsieczą Promise + than(co ma sie wykonac po promise czyli obietnicy) + catch(error)

Jak poniżej: 

const getTodo = (resource, callback) => {
    const req = new XMLHttpRequest();

    req.addEventListener("readystatechange", () => {
        if (req.readyState === 4 && req.status === 200) {
            const data = JSON.parse(req.responseText);
            callback(undefined, data);
        } else if (req.readyState === 4) {
            callback("Could not fetch the data", undefined);
        }
    });

    req.open("GET", resource);
    req.send();
};

getTodo("todo/padre.json", (err, data) => {
    console.log(data);
    getTodo("todo/mateo.json", (err, data) => {
        console.log(data);
        getTodo("todo/palik.json", (err, data) => {
            console.log(data);
        });
    });
});
*/

/*
! Handling JSON data

Otrzymane dane to tekst czy inaczej string. Aby je sparsować do obiektów, użyjemy JSON.parse(data)

*/

/*
! Promises

* Dwa wyniki:
    - resolve,
    - reject

    resolve powoduje, że fetchowane dane są pobrane i można użyć na tym promisie metody .then(), w której wykonujemy jakąś konkretną funkcję.

* Metoda .then(successCallback, failureCallback)
    - successCallback: czyli po wykonanym poprawnie promise, wykonujemy jakieś operacjie z danymi, które otrzymaliśmy,
    - failureCallback: czyli po braku otrzymania danych co ma zrobić, najczęściej wyrzucić error
* Metod .catch(failureCallback)
    - jest to skrócona wersja .then(null, failureCallback),
    - czyli to pozwala nam na ogarnięcie errora jeżeli danych nie ma, zamiast tworzyć kolejną metodę .than(), można skorzystać z tej ze względu na czytelność kodu.

PROSTY PRZYKŁAD
    const getData = () => {
    return new Promise((resolve, reject) => {
        // resolve("some data");
        reject("some error");
    });
};

*Pierwszy sposób (mniej czytelny)

getData().then((data) => {
    console.log(data);
}, (err)=>{
    console.log(err);
});


*Drugi sposób (bardziej czytelny)
getData()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

! Łańcuchowe wywołanie promisów
    Jeśli utworzymy promise, i wywołamy funkcję, w której został stworzony to zwraca nam ona promise przy podaniu źródła z którego zaciągamy dane. Jeżeli w wyołanym .then() zwrócimy ponownie funkcje, w której przekazujemy ścieżkę do danych to on znowu zwraca promise, co ozncza, że możemy użyć metod than i catch ponownie i to jest właśnie "Promise chaining".

PRZYKŁAD

Mamy dane pod dwoma ścieżkami date1/date_one.json i data2/date_two.json.

function getData(resource){
    return fetch(resource)

    
}
*/

// function getData(resource) {
//     fetch(resource)
//         .then((data) => {
//             console.log(data);
//             return data.json();
//         })
//         .then((data) => {
//             console.log(data);
//         });
// }

// getData("todo/mateo.json");

// let getData = fetch("todo/padre.json");

// getData
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("We have an error!", err);
//     });
// const getData = async () => {
//     const response = await fetch("todo/padrse.json");
//     if (response.status !== 200) {
//         throw new Error("Nie pobierzesz go pacanie");
//     }
//     const data = await response.json();
//     return data;
// };

// getData()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

const getUser = () => {
    const user = null;

    if (user) {
        return user;
    } else {
        throw new Error("Już se go wykonasz , uważaj...");
    }
};

const someFunc = () => {
    try {
        const user = getUser();
        console.log(user);
    } catch (err) {
        console.log("Error:" + err.message);
    } finally {
        console.log("End of function");
    }
};

someFunc();
