console.log("............Escolha o Prato");
console.log(".....Pipoca");
console.log(".....Frango");
console.log(".....Carne");
console.log(".....Feijao");
console.log(".....Batata Frita");
console.log("...........................");

let readlineSync = require('readline-sync');
var comida = readlineSync.question("Qual sua escolha..." + " ");


switch (comida) {
    case "pipoca" :
        var tempo = readlineSync.questionInt("Informe o Tempo de preparo..." + " ");
          pipoca(tempo);
        break;
    case "frango" :
        var tempo = readlineSync.questionInt("Informe o Tempo de preparo..." + " ");    
          frango(tempo);
        break; 
    case "carne" :
        var tempo = readlineSync.questionInt("Informe o Tempo de preparo..." + " ");    
          carne(tempo);  
        break;   
    case "feijao" :
        var tempo = readlineSync.questionInt("Informe o Tempo de preparo..." + " ");    
          feijao(tempo);  
        break;   
    case "brigadeiro" :
        var tempo = readlineSync.questionInt("Informe o Tempo de preparo..." + " ");    
            brigadeiro(tempo);  
        break;       
    default:
        console.log("Prato Inexistente.!");
        break;
}

function pipoca(tempo){
    if (tempo < 10) {
        console.log("tempo insuficiente");
    }else{
        if (tempo === 10) {
            console.log("espere o tempo padrão para pipoca.....");
            console.log("Seu Prato ponto bom apetite!!!");
        }else{          
            if ((tempo > 10) && (tempo <= 20)) {
              console.log("prato feito rapido. Bom apetite!!!");  
            }else{
                if ((tempo > 20) && (tempo <= 30)){
                    console.log("Queimouuu.!");    
                }else{
                    console.log("Kaboom.!");
                } 
            }
        }
    }
}

function frango(tempo){
    if (tempo < 8) {
        console.log("tempo insuficiente");
    }else{
        if (tempo === 8) {
            console.log("espere o tempo padrão para frango.....");
            console.log("Seu Prato ponto bom apetite!!!");
        }else{          
            if ((tempo > 8) && (tempo <= 16)) {
              console.log("prato feito rapido. Bom apetite!!!");  
            }else{
                if ((tempo > 16) && (tempo <= 24)){
                    console.log("Queimouuu.!");    
                }else{
                    console.log("Kaboom.!");
                } 
            }
        }
    }
}

function carne(tempo){
    if (tempo < 15) {
        console.log("tempo insuficiente");
    }else{
        if (tempo === 15) {
            console.log("espere o tempo padrão para carne.....");
            console.log("Seu Prato ponto bom apetite!!!");
        }else{          
            if ((tempo > 15) && (tempo <= 30)) {
              console.log("prato feito rapido. Bom apetite!!!");  
            }else{
                if ((tempo > 30) && (tempo <= 45)){
                    console.log("Queimouuu.!");    
                }else{
                    console.log("Kaboom.!");
                } 
            }
        }
    }
}

function feijao(tempo){
    if (tempo < 12) {
        console.log("tempo insuficiente");
    }else{
        if (tempo === 12) {
            console.log("espere o tempo padrão para feijao.....");
            console.log("Seu Prato ponto bom apetite!!!");
        }else{          
            if ((tempo > 12) && (tempo <= 24)) {
              console.log("prato feito rapido. Bom apetite!!!");  
            }else{
                if ((tempo > 24) && (tempo <= 36)){
                    console.log("Queimouuu.!");    
                }else{
                    console.log("Kaboom.!");
                } 
            }
        }
    }
}

function brigadeiro(tempo){
    if (tempo < 8) {
        console.log("tempo insuficiente");
    }else{
        if (tempo === 8) {
            console.log("espere o tempo padrão para brigadeiro.....");
            console.log("Seu Prato ponto bom apetite!!!");
        }else{          
            if ((tempo > 8) && (tempo <= 16)) {
              console.log("prato feito rapido. Bom apetite!!!");  
            }else{
                if ((tempo > 16) && (tempo <= 24)){
                    console.log("Queimouuu.!");    
                }else{
                    console.log("Kaboom.!");
                } 
            }
        }
    }
}