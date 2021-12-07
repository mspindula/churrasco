let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
  
        
    let quantTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let quantTotalLing = lingPP(duracao) * adultos + (lingPP(duracao)/ 2 * criancas);
    let quantTotalCerveja = cervejaPP(duracao) * adultos;
    let quantTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    let quantTotalBaseado = (baseadoPP(duracao) * adultos) / 4;
    
    
    
    resultado.innerHTML = `<p>${quantTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${quantTotalLing/1000} Kg de Linguiça</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantTotalCerveja/350)} Latas de Cerveja </p>`
    resultado.innerHTML += `<p>${Math.ceil(quantTotalBebidas / 2000)} Refri de 2L</p>`
    resultado.innerHTML += `<p>${quantTotalBaseado} Gramas de Skunk/Pak/Crumble/Ice </p>`
    
    
    
}

function carnePP(duracao) {   
    if (duracao>= 6) {
        return 300;
    }
    else {
        return 200;
    }
     
}
function lingPP(duracao) {   
    if (duracao>= 6) {
        return 250;
    }
    else {
        return 150;
    }
     
}


function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
     
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
     
}
function baseadoPP(duracao) {
    if (duracao >= 6) {
        return 5;
    }
    else {
        return 3;
    }
     
}


