function getComputerChoice(){
    const array = ["Sasso", "Carta", "Forbice"];
    return array[Math.floor(Math.random() * 3)];
}

function Play(playerSelection, computerSelection){
    let choice = playerSelection.toUpperCase();
    switch(choice){
        case "SASSO":
            if (computerSelection =="Forbice")
                {return "Vittoria"}
             else if(computerSelection=="Carta") 
                {return "Sconfitta"}
             else {return "Pareggio"}
        case "CARTA":
            if (computerSelection =="Forbice")
                 {return "Sconfitta"}
             else if(computerSelection=="Carta") 
                {return "Pareggio"}
            else {return "Vittoria"}
        case "FORBICE":
            if (computerSelection =="Forbice")
                {return "Pareggio"}
            else if(computerSelection=="Carta") 
                {return "Vittoria"}
            else {return "Sconfitta"}
    break;
    }

    
}



function gioco(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Sasso, Carta o Forbice?");
        const computerSelection = getComputerChoice();
        alert(Play(playerSelection, computerSelection));
    }
}

gioco();