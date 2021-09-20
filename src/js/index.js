let coeficiente = 0.02450;

let parcelaAtual = document.getElementById("parcela-atual");
let parcelaFinal = document.getElementById("parcela-final");
let resultadoHtml = document.getElementById("resultado-calculo");


function calcFunction () {
    parcelaAtual = parseFloat(parcelaAtual.value);
    parcelaFinal = parseFloat(parcelaFinal.value);

    let subtracaoParcela = parcelaAtual - parcelaFinal;
    console.log(subtracaoParcela)

    let resultadoFinal = subtracaoParcela / coeficiente;

    resultadoFinal = Math.round(resultadoFinal * 100) / 100;

    resultadoHtml.innerHTML = `R$${resultadoFinal}`
}