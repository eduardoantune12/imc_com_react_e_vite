function calcularIMC(altura, peso) {
    console.log('Calculando IMC...');
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function getClassificacao(imc) {
    console.log('Classificando IMC...');
    if (imc < 18.5) return 'Magreza';
    if (imc < 25) return 'Normal';
    if (imc < 30) return 'Sobrepeso';
    if (imc < 35) return 'Obesidade Grau I';
    if (imc < 40) return 'Obesidade Grau II';
    return 'Obesidade Grau III';
}

export {
    calcularIMC,
    getClassificacao
};