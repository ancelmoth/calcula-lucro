function calcular() {
    // Obter os valores do custo, margem de lucro e valor do serviço
    var custo = parseFloat(document.getElementById("custo").value);
    var margem = parseFloat(document.getElementById("margem").value);
    var servico = parseFloat(document.getElementById("servico").value);

    // Calcular o preço de venda do produto
    var precoProduto = custo * (1 + (margem / 100));

    // Calcular o preço total (produto + serviço)
    var precoTotal = precoProduto + servico;

    // Arredondar os resultados para 2 casas decimais
    precoProduto = precoProduto.toFixed(2);
    precoTotal = precoTotal.toFixed(2);

    // Exibir os resultados nas caixas de texto
    document.getElementById("preco").value = "R$ " + precoTotal;
}