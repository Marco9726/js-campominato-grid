    //1.1 - creo costante collegata al bottone
    const button = document.getElementById('button');
    //2.1 - creo costante collegata al container
    const container = document.getElementById('container');
    //2.2 - creo costante collegata alla grid
    const grid = document.getElementById('grid');
    //2.3 - creo variabile square
    let square = ""
//3 - addEventListner al click del bottone
button.addEventListener('click', function () {
    //3.1 - creo ciclo for per generare 100 square
    grid.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
        //3.1.1 - creo l'elemento div all'interno della grid
        square = grid.appendChild(document.createElement('div'));
        //3.1.2 - assegno classe square al div creato
        square.className = 'square';
        //3.1.3 - visualizzo il numero dell'iterazione nel suo square
        square.append(i)
        //3.1.4 - addEventListner al click dello square
        square.addEventListener('click', function() {
            //3.1.4.1- assegno classe bg-blue allo square
            this.classList.add('bg-blue')
            //3.1.4.2 - visualizzo numero dello suqare cliccato in console log
            console.log(i);
        }) 
    }

})