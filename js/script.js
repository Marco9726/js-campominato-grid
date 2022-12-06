    //1.1 - creo costante collegata al bottone
    const button = document.getElementById('button');
    //2.1 - creo costante collegata al container
    const container = document.getElementById('container');
    //2.2 - creo costante collegata alla grid
    const grid = document.getElementById('grid');
//3 - addEventListner al click del bottone
button.addEventListener('click', function () {
    //3.1 - visualizzo il container 
    container.className = 'd-block';
    const square = grid.appendChild(document.createElement('div'));
    console.log(square);

})