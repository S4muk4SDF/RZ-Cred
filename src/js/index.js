let coeficienteSemCarencia = 0.02450;
let coeficienteComCarencia = 0.02600;

let parcelaAtual = document.getElementById("parcela-atual");
let parcelaFinal = document.getElementById("parcela-final");
let resultadoHtmlSCarencia = document.getElementById("resultado-calculo-scarencia");
let resultadoHtmlCCarencia = document.getElementById("resultado-calculo-ccarencia");


function calcFunction () {
    parcelaAtual = parseFloat(parcelaAtual.value);
    parcelaFinal = parseFloat(parcelaFinal.value);

    let subtracaoParcela = parcelaAtual - parcelaFinal;
    console.log(subtracaoParcela)

    let resultadoFinalSCarencia = subtracaoParcela / coeficienteSemCarencia;
    console.log(resultadoFinalSCarencia)

    let resultadoFinalCCarencia = subtracaoParcela / coeficienteComCarencia;
    console.log(resultadoFinalCCarencia)


    resultadoFinalSCarencia = Math.round(resultadoFinalSCarencia * 100) / 100;
    console.log(resultadoFinalCCarencia.typeof())
    resultadoFinalCCarencia = Math.round(resultadoFinalCCarencia * 100) / 100;


    resultadoHtmlSCarencia.innerHTML = `R$${resultadoFinalSCarencia}`
    resultadoHtmlCCarencia.innerHTML = `R$${resultadoFinalCCarencia}`

}