// Recupero elementi dal dom
const pointsCounterElement = document.querySelector("#pointsCounter");
const gridElement = document.querySelector("#grid");
const generateGameBtnElement = document.querySelector("#generateGameBtn");
const levelSelectElement = document.querySelector("[name='levelSelect']")

// Variabili globali
let sideX = 0;
let sideY = 0;
let totBombs = 0;
let gameStop = false;
let pointsCounter = 0;
pointsCounterElement.innerHTML = "0";


// ---------------------------------------------------------------
// ---------------------------------------------------------------

/*
Funzione per generare un array di numeri per le bombe
*/

function generateBombs (totSquare, totBombs) {

    // Creo un array vuoto
    let bombsList = [];

    do {

        // Genero un numero casuale
        let randomNum = Math.floor(Math.random() * totSquare) + 1;

        // Controllo se è unico nell'array
        if (!bombsList.includes(randomNum)) {

            // Aggiungo il numero all'array
            bombsList.push(randomNum);

        }

    } while (bombsList.length <= totBombs - 1)

    return bombsList;
}

// ---------------------------------------------------------------
// ---------------------------------------------------------------

/*
Funzione per generare una serie di Event Listener per un elemento
*/

function addEvents (element, bombsList) {

    // Evento per controllare se il quadrato contiene una bomba
    element.addEventListener("click", function(){

        // Controllo che la partita sia ancora attiva
        if (gameStop == true) {
            return;
        };

        // Recupero l'id del quadrato
        let squareId = +this.dataset.id;

        // Controllo se è una bomba
        if (bombsList.includes(squareId)) {
            
            // Aggiungo la classe relativa
            this.classList.remove("placeholder");
            this.dataset.clicked = "true";
            this.classList.add("bomb");

            // Genero un alert
            alert(`PARTITA FINITA! Hai totalizzato ${pointsCounter} punti!`);

            // E termino il gioco
            gameStop = true;

        } else {

            // Aggiungo la classe relativa
            this.classList.remove("placeholder");
            this.dataset.clicked = "true";
            this.classList.add("safe");

            // Incremento il punteggio
            pointsCounter++;

            // E lo stampo in pagina
            pointsCounterElement.innerHTML = `${pointsCounter}`;

        }
    });

    // Evento per posizionare la bandierina
    element.addEventListener("contextmenu", function(n){

        // Elimino il comportamento di default del menu
        n.preventDefault();

        // Recupero se l'elemento è già stato cliccato
        let clickedStatus = this.dataset.clicked;

        // Modifico il quadrato se non è già stato cliccato
        if (clickedStatus === "true" && gameStop == false) {
            alert("Hai già scoperto questa cella.");
        } else if (clickedStatus !== "true" && gameStop == false) {
            this.classList.add("placeholder");
        }
    })

};

// ---------------------------------------------------------------
// ---------------------------------------------------------------

/*
Funzione per generare la partita
*/

function generateGame (sideX, sideY, totBombs) {

    // Imposto la larghezza della griglia nel dom
    gridElement.style.width = `calc(var(--squareWidth) * ${sideX} + 16px)`;
    gridElement.classList.remove("d-none")

    // Calcolo il numero totale di quadrati della griglia
    const totSquare = sideX * sideY;

    // Genero l'array delle bombe
    let bombsList = generateBombs (totSquare, totBombs);

    // Ciclo per generare tutti i quadrati della griglia di gioco
    for (i = 1; i <= totSquare; i++) {

        // Creo il quadrato
        let square = document.createElement("div");

        // Gli assegno la classe
        square.classList.add("square");

        // Gli assegno un id
        square.dataset.id = `${i}`;

        // Gli assegno gli Event Listener
        addEvents (square, bombsList);

        // Appendo l'elemento in pagina
        gridElement.appendChild(square);

    };

};


// ---------------------------------------------------------------
// ---------------------------------------------------------------