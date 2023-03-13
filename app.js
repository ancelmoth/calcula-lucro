function calcular() {
    // Obter os valores do custo e da margem de lucro
    var custo = parseFloat(document.getElementById("custo").value);
    var margem = parseFloat(document.getElementById("margem").value);

    // Calcular o preço de venda
    var preco = custo * (1 + (margem / 100));

    // Arredondar o resultado para 2 casas decimais
    preco = preco.toFixed(2);

    // Exibir o resultado na caixa de texto
    document.getElementById("preco").value = "R$ " + preco;
}