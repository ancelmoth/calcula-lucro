function calcular() {
    // Obter os valores do custo, margem de lucro e valor do serviço
    var custo = parseFloat(document.getElementById("custo").value);
    var margem = parseFloat(document.getElementById("margem").value);
    var servico = parseFloat(document.getElementById("servico").value);

    // Verificar se os valores de custo e margem foram preenchidos
    if (!custo || !margem) {
        alert("Os campos Custo e Margem são obrigatórios");
        return;
    }

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

function limpar(){
    document.getElementById("custo").value = ""
    document.getElementById("margem").value = ""
    document.getElementById("servico").value = ""
    document.getElementById("preco").value = ""
}


