
const rowElem = document.querySelector(".row"); // object | null

// Creo ciclo
// stringa che inizializzo per il contenuto di un elemeto
let content = "";
for (let i = 1; i <= 100; i++) {
    
    // test
    console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        bgClass = "fizzBuzz";
        content = "FizzBuzz";
    } else if (i % 3 === 0) {
        console.log("Fizz");
        bgClass = "fizz"
        content = "Fizz";
    } else if (i % 5 === 0) {
        console.log("Buzz");
        bgClass = "buzz"
        content = "Buzz";
    } else {
        console.log(i);
        bgClass = "other"
        content = i;

    }
    //CONDIZIONE
  
    // INIZZIALIZZO VARIABILE
    const boxElem = document.createElement("div"); // object
    boxElem.innerHTML = i;
    boxElem.innerHTML = content;
    boxElem.classList.add("box");
    boxElem.classList.add(bgClass);
    
    
    console.log(boxElem);
    // Inserisco boxElem nella riga
    rowElem.append(boxElem);

}




