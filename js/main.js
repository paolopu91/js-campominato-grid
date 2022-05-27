/*
Esercizio Campo Minato:

Consegna
-Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
-Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

Passaggi da fare:
-Creo la mia variabile che mi servirà a richiamare l'elemento in HTML
-Creo una funzione per generare i quadrati delle mie celle
-Creo tramite una formula, i numeri in modo incrementale da 1 a 100
-Tramite un addEvenentListner creo un evento sul click delle varie celle,che dovranno colorarsi al click del nostro utente

Se riesco continuo anche con i bonus
*/

//Variabile globale, per richiamare il mio elemento HTML utilizabile in tutto il mio foglio js
const start = document.getElementById("start")
start.addEventListener("click", function()  {

const gridContainer = document.querySelector(".grid-container");




    //creiamo una funzione per numeri incrementali
function numeriIncrementali (min1, max100){

    // ciclo for per i creare i numeri incrementali
    for(let i = 1 ;i < 101; i++){
     //faccio il console.log di i per vedere in console che i miei numeri siano stampati correttamente
        console.log(i);
        const celle = document.createElement("div")
        celle.append(i.toString())
    }

 }
 numeriIncrementali(1, 100);

  
    // quanto voglio che sia grande la griglia? inteso in numero di quadrati che può contenere
function cellGrid (orizontalCells , verticalCells){
    const cellsNumber = orizontalCells * verticalCells;

    console.log(cellsNumber)
    
    //questa formula va messa fuori il nostro ciclo for perchè sennò ad ogni ciclo si ripete
    gridContainer.style.width = `calc(100px * ${orizontalCells})`


    // creo il mio ciclo per far si che si vedano le mie celle
    for (let i = 0 ; i<cellsNumber; i++){
        // creo una variabile per i miei numeri crescenti

        
        const celle = document.createElement("div");
        celle.classList.add("celle");
        
        //append per aggiungere un elemento virtuale ad un elemento che abbiamo creato
        gridContainer.append(celle);
    }


}
cellGrid(10, 10);
})