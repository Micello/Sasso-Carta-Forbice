mac = document.querySelector('.mac');

function getComputerChoice(){
    const array = ["Sasso", "Carta", "Forbice"];
    c = array[Math.floor(Math.random() * 3)];
    mac.textContent = c;
    return c; 
}

function Play(playerSelection, computerSelection){
    let choice = playerSelection.toUpperCase();
    switch(choice){
        case "SASSO":
            if (computerSelection =="Forbice")
                {return "Vinto!!"}
             else if(computerSelection=="Carta") 
                {return "Perso..."}
             else {return "Pareggiato"}
        case "CARTA":
            if (computerSelection =="Forbice")
                 {return "Perso..."}
             else if(computerSelection=="Carta") 
                {return "Pareggiato"}
            else {return "Vinto!!"}
        case "FORBICE":
            if (computerSelection =="Forbice")
                {return "Pareggiato"}
            else if(computerSelection=="Carta") 
                {return "Vinto!!"}
            else {return "Perso..."}
    break;
    }

    
}


/*
function gioco(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Sasso, Carta o Forbice?");
        const computerSelection = getComputerChoice();
        alert(Play(playerSelection, computerSelection));
    }
}

gioco();
*/




const buttons = document.querySelectorAll('button');
const res = document.querySelector('#risultato');
const tab = document.querySelector('.tabellone');
let puntiMacchina = 0;
let puntiUmano = 0;
let a = document.createElement('p');
a.textContent = 'Hai...'
res.appendChild(a);


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
    let risultato = Play(button.className,getComputerChoice());
    
    const p = document.createElement('p');
    p.textContent = risultato;
    res.replaceChild(p,a);
    a=p;
    if (risultato == 'Vinto!!'){
        puntiUmano++;
        document.getElementById('resu').textContent = puntiUmano;
    }else{
        if (risultato == 'Perso...'){
            puntiMacchina++
            document.getElementById('resm').textContent = puntiMacchina;
        }
    }
    });
});