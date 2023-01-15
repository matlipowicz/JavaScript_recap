const diceButton = document.querySelector(".card__dice-box") as HTMLElement;
const id = document.querySelector(".card__advice") as HTMLElement;
const quote = document.querySelector(".card__quote") as HTMLElement;

diceButton.addEventListener("click", async () => {
    //! Approach with asynbc await and try...catch
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

        id.innerText = `ADVICE #${data.slip.id}`;
        quote.innerHTML = `&#8220${data.slip.advice}&#8221`;
    } catch (err) {
        console.log(err);
    }
    //! Approach with than and catch
    // response.then((response) => {
    //     return response.json();
    // })
    //     .then((data) => {
    //         id.innerText = `ADVICE #${data.slip.id}`;
    //         quote.innerHTML = `&#8220${data.slip.advice}&#8221`;
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
});
