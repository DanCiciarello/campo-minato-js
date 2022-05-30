// Genero una nuova partita
generateGameBtnElement.addEventListener("click",function(){

    // Resetto la partita
    gridElement.innerHTML = "";
    gameStop = false;
    pointsCounter = 0;
    pointsCounterElement.innerHTML = "0";

    // Recupero il livello scelto dall'utente
    let levelSelect = levelSelectElement.value;
    
    // Determino la griglia in base al livello scelto
    switch (levelSelect) {
        
        // Livello facile
        case "easy":
            sideX = 10;
            sideY = 10;
            totBombs = 16;
            break;
        
        // Livello medio
        case "medium":
            sideX = 9;
            sideY = 9;
            totBombs = 14;
            break;

        // Livello difficile    
        case "hard":
            sideX = 7;
            sideY = 7;
            totBombs = 12;
            break;
    }

    // Genero una nuova partita
    generateGame (sideX, sideY, totBombs)

});