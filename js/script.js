    //1.1 - creo costante collegata al bottone
    const button = document.getElementById('button');
    //2.1 - creo costante collegata al container
    const container = document.getElementById('container');
    //2.2 - creo costante collegata alla grid
    const grid = document.getElementById('grid');
//3 - addEventListner al click del bottone
button.addEventListener('click', function () {
    //3.1 - creo ciclo for per generare 100 square
    for (let i = 0; i < 100; i++) {
        //3.1.1 - creo l'elemento div all'interno della grid
        const square = grid.appendChild(document.createElement('div'));
        console.log(square);
        //3.1.2 - assegno classe square al div creato
        square.className = 'square';
        
    }

})