/*
Funzione per generare un array di numeri per le bombe
*/



// ---------------------------------------------------------------
// ---------------------------------------------------------------

/*
Funzione per generare la griglia di gioco.
*/

// Recupero l'elemento dal dom
let gridElement = document.querySelector("#grid");

// Inizio la funzione
function generateGameGrid (sideX, sideY) {

    // Resetto la sezione di gioco
    gridElement.innerHTML = "";

    // Imposto la larghezza della griglia nel dom
    gridElement.style.width = `calc(var(--squareWidth) * ${sideX})`;

    // Calcolo il numero totale di quadrati della griglia
    const totSquare = sideX * sideY;

    // Ciclo per generare tutti i quadrati della griglia di gioco
    for (i = 1; i <= totSquare; i++) {

        // Creo il quadrato
        let square = document.createElement("div");

        // Gli assegno la classe
        square.classList.add("square");

        // Gli assegno un id
        square.dataset.index = `${i}`;

        // Appendo l'elemento in pagina
        gridElement.appendChild(square);

    };

}

generateGameGrid (10,10)


// ---------------------------------------------------------------
// ---------------------------------------------------------------