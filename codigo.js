// Seleciona o botão de calcular pelo seletor de classe
const calcular = document.querySelector(".calcular");

// Adiciona um evento de clique ao botão "calcular"
calcular.addEventListener("click", () => {
    // Obtém os valores dos inputs de nome, altura e peso, removendo espaços em branco
    const nome = document.getElementById("nome").value.trim();
    const altura = Number(document.getElementById("altura").value.trim()); // Converte para número
    const peso = Number(document.getElementById("peso").value.trim()); // Converte para número
    
    // Seleciona o elemento onde o resultado será exibido
    const resultado = document.querySelector(".resultado");

    // Verifica se os campos nome, altura e peso foram preenchidos corretamente
    if (nome && altura && peso) {
        // Calcula o valor do IMC e arredonda para uma casa decimal
        const valorIMC = (peso / (altura ** 2)).toFixed(1);

        // Obtém a classificação do IMC com base no valor calculado
        let classificacao = getClassificacaoIMC(valorIMC);

        // Exibe o resultado no elemento "resultado"
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        // Se algum campo não foi preenchido corretamente, exibe uma mensagem de erro
        resultado.innerHTML = getMensagemErro(nome, altura, peso);
    }
});

// Função que retorna a classificação do IMC com base no valor
function getClassificacaoIMC(imc) {
    if (imc < 18.5) return "abaixo do peso."; // IMC abaixo de 18.5
    if (imc < 25) return "com peso ideal. Parabéns!!!"; // IMC entre 18.5 e 24.9
    if (imc < 30) return "levemente acima do peso."; // IMC entre 25 e 29.9
    if (imc < 35) return "com obesidade grau I."; // IMC entre 30 e 34.9
    if (imc < 40) return "com obesidade grau II."; // IMC entre 35 e 39.9
    return "com obesidade grau III. Cuidado!!"; // IMC acima de 40
}

// Função que retorna uma mensagem de erro específica para os campos não preenchidos
function getMensagemErro(nome, altura, peso) {
    let mensagem = "Preencha corretamente: "; // Mensagem base
    if (!nome) mensagem += "Nome, "; // Se o nome não foi preenchido, adiciona à mensagem
    if (!altura) mensagem += "Altura, "; // Se a altura não foi preenchida, adiciona à mensagem
    if (!peso) mensagem += "Peso, "; // Se o peso não foi preenchido, adiciona à mensagem
    return mensagem.slice(0, -2) + "!"; // Remove a vírgula final e adiciona um ponto de exclamação
}
