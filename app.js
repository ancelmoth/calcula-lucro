function calcular() {
    // Obter o valor do custo do produto
    var custo = parseFloat(document.getElementById("custo").value);

    // Verificar se o valor do custo foi inserido
    if (isNaN(custo)) {
        document.getElementById("mensagem-erro").style.display = "block";
        return;
    }

    // Esconder a mensagem de erro, caso ela tenha sido exibida anteriormente
    document.getElementById("mensagem-erro").style.display = "none";

    // Obter os valores da margem de lucro e do valor do serviço
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
