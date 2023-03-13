function calcular() {
    // Obter os valores do custo e da margem de lucro
    var custo = parseFloat(document.getElementById("custo").value);
    var margem = parseFloat(document.getElementById("margem").value);
    var servico = parseFloat(document.getElementById("servico").value)

    // Calcular o preço de venda
    var precoProduto = custo * (1 + (margem / 100));

    // Calcular o preço total (produto + serviço)
    var precoTotal = precoProduto + servico

    // Arredondar o resultado para 2 casas decimais
    precoProduto = precoProduto.toFixed(2);
    precoTotal = precoTotal.toFixed(2)

    // Exibir o resultado na caixa de texto
    document.getElementById("preco").value = "R$ " + precoTotal;
}