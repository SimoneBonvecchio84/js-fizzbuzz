// creo una variabile row che collego tramite querySelector all'elemeto 
// html 
const rowElem = document.querySelector(".row"); // object | null

// Creo ciclo

// stringa che inizializzo per il contenuto di un elemeto alla quale darò
// il valore stabilito dalla condizione
let content = "";
for (let i = 1; i <= 100; i++) {
    
    // test
    console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        bgClass = "fizzBuzz";
        // valore assegnato alla variabile stabilito da questa condizione
        content = "FizzBuzz";
    } else if (i % 3 === 0) {
        console.log("Fizz");
        bgClass = "fizz"
        // valore assegnato alla variabile stabilito da questa condizione
        content = "Fizz";
    } else if (i % 5 === 0) {
        console.log("Buzz");
        bgClass = "buzz"
        // valore assegnato alla variabile stabilito da questa condizione
        content = "Buzz";
    } else {
        console.log(i);
        bgClass = "other"
        // in questo caso il valore di content è uguale alla variabile
        // iniziale i
        content = i;

    }
    //CONDIZIONE
  
    // INIZIALIZZO VARIABILE
    const boxElem = document.createElement("div"); // object
    boxElem.innerHTML = i;
    // Aggiungo il testo al contenuto dell'elemento
    boxElem.innerHTML = content;
    boxElem.classList.add("box");
    boxElem.classList.add(bgClass);
    
    
    console.log(boxElem);
    // Inserisco boxElem nella riga
    rowElem.append(boxElem);

}




